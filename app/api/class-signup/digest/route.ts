import { NextResponse } from "next/server";
import { z } from "zod";
import {
  CLASS_TIME_LABEL,
  CLASS_TIME_ZONE,
  formatClassDate,
  getLocalDateKey,
  isClassDateKey,
  isScheduledClassDate,
} from "@/lib/class-program";
import { CLASS_ADMIN_EMAIL, getClassZoomLink } from "@/lib/class-program-server";
import { isMailerConfigured, sendEmail } from "@/lib/mailer";
import { appendJsonLine, readJsonLines } from "@/lib/submissions";

export const runtime = "nodejs";

const PHASES = ["morning", "final"] as const;
const DIGEST_LOG_FILE = "class-digest-log.jsonl";

const digestRequestSchema = z.object({
  phase: z.enum(PHASES),
  classDate: z.string().optional(),
  force: z.boolean().optional().default(false),
});

const classSignupRecordSchema = z.object({
  id: z.string().optional(),
  type: z.literal("class-signup"),
  createdAt: z.string(),
  name: z.string(),
  classDate: z.string(),
  albertaHealthCareNumber: z.string(),
});

const digestLogSchema = z.object({
  classDate: z.string(),
  phase: z.enum(PHASES),
});

type DigestPhase = (typeof PHASES)[number];
const DIGEST_TARGET_HOUR: Record<DigestPhase, number> = {
  morning: 8,
  final: 21,
};

function isAuthorized(request: Request) {
  const expectedToken = process.env.CLASS_DIGEST_TOKEN || process.env.CRON_SECRET;
  if (!expectedToken) {
    return process.env.NODE_ENV !== "production";
  }

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return false;
  }

  const receivedToken = header.slice("Bearer ".length).trim();
  return receivedToken === expectedToken;
}

function phaseLabel(phase: DigestPhase) {
  return phase === "morning" ? "Morning roster" : "Final post-class roster";
}

function getLocalHour(date = new Date()) {
  const hour = new Intl.DateTimeFormat("en-CA", {
    timeZone: CLASS_TIME_ZONE,
    hour: "2-digit",
    hour12: false,
  })
    .formatToParts(date)
    .find((part) => part.type === "hour")?.value;

  return hour ? Number(hour) : null;
}

function formatRegisteredAt(iso: string) {
  const parsed = new Date(iso);
  if (!Number.isFinite(parsed.getTime())) {
    return iso;
  }

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CLASS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(parsed);
}

function buildDigestBody({
  phase,
  classDate,
  rows,
}: {
  phase: DigestPhase;
  classDate: string;
  rows: Array<z.infer<typeof classSignupRecordSchema>>;
}) {
  const lines = rows.map((row, index) => {
    return `${index + 1}. ${row.name} | ${row.albertaHealthCareNumber} | Registered: ${formatRegisteredAt(
      row.createdAt,
    )}`;
  });

  return [
    `Airdrie Metabolic Health Weekly Class Registration Digest`,
    ``,
    `Digest: ${phaseLabel(phase)}`,
    `Class date: ${formatClassDate(classDate)}`,
    `Class time: ${CLASS_TIME_LABEL} (${CLASS_TIME_ZONE})`,
    `Session link: ${getClassZoomLink()}`,
    `Total participants: ${rows.length}`,
    ``,
    `Participant list (name + Alberta health care number):`,
    ...(lines.length > 0 ? lines : ["No registrations yet."]),
  ].join("\n");
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const url = new URL(request.url);
  const parsedRequest = digestRequestSchema.safeParse({
    phase: url.searchParams.get("phase"),
    classDate: url.searchParams.get("classDate") || undefined,
    force: ["1", "true"].includes((url.searchParams.get("force") || "").toLowerCase()),
  });

  if (!parsedRequest.success) {
    return NextResponse.json(
      { error: "Invalid request.", fields: parsedRequest.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const classDate = parsedRequest.data.classDate || getLocalDateKey(new Date());
  if (!isClassDateKey(classDate) || !isScheduledClassDate(classDate)) {
    return NextResponse.json(
      {
        error:
          "Class date must be a valid recurring Tuesday session date (YYYY-MM-DD).",
      },
      { status: 400 },
    );
  }

  if (!isMailerConfigured()) {
    return NextResponse.json(
      {
        error:
          "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM.",
      },
      { status: 500 },
    );
  }

  const phase = parsedRequest.data.phase;
  if (!parsedRequest.data.force) {
    const localHour = getLocalHour(new Date());
    const expectedHour = DIGEST_TARGET_HOUR[phase];

    if (localHour !== expectedHour) {
      return NextResponse.json({
        ok: true,
        skipped: true,
        reason: `Outside digest window for phase '${phase}'. Expected local hour ${expectedHour}:00 in ${CLASS_TIME_ZONE}.`,
        classDate,
        phase,
        localHour,
      });
    }
  }

  const digestLog = (await readJsonLines<unknown>(DIGEST_LOG_FILE))
    .map((row) => digestLogSchema.safeParse(row))
    .filter((row): row is { success: true; data: z.infer<typeof digestLogSchema> } => row.success)
    .map((row) => row.data);

  const alreadySent = digestLog.some(
    (entry) => entry.classDate === classDate && entry.phase === phase,
  );

  if (alreadySent) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "Digest already sent for this class date and phase.",
      classDate,
      phase,
    });
  }

  const signups = (await readJsonLines<unknown>("class-signups.jsonl"))
    .map((row) => classSignupRecordSchema.safeParse(row))
    .filter(
      (
        row,
      ): row is { success: true; data: z.infer<typeof classSignupRecordSchema> } =>
        row.success,
    )
    .map((row) => row.data)
    .filter((row) => row.classDate === classDate);

  const dedupedByNameAndNumber = Array.from(
    signups.reduce((map, row) => {
      map.set(`${row.name}::${row.albertaHealthCareNumber}`, row);
      return map;
    }, new Map<string, z.infer<typeof classSignupRecordSchema>>()).values(),
  ).sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  const subject = `[Airdrie Class ${phaseLabel(phase)}] ${formatClassDate(classDate)} (${CLASS_TIME_LABEL})`;
  const text = buildDigestBody({
    phase,
    classDate,
    rows: dedupedByNameAndNumber,
  });

  await sendEmail({
    to: CLASS_ADMIN_EMAIL,
    subject,
    text,
  });

  await appendJsonLine(DIGEST_LOG_FILE, {
    id: crypto.randomUUID(),
    sentAt: new Date().toISOString(),
    classDate,
    phase,
    recipients: [CLASS_ADMIN_EMAIL],
    participantCount: dedupedByNameAndNumber.length,
    subject,
  });

  return NextResponse.json({
    ok: true,
    classDate,
    phase,
    participantCount: dedupedByNameAndNumber.length,
    recipient: CLASS_ADMIN_EMAIL,
  });
}
