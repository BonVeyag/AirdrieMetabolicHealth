import { NextResponse } from "next/server";
import { z } from "zod";
import { appendJsonLine } from "@/lib/submissions";
import {
  formatAlbertaHealthCareNumber,
  isBookableClassDate,
  normalizeAlbertaHealthCareNumber,
} from "@/lib/class-program";
import { getClassZoomLink } from "@/lib/class-program-server";

export const runtime = "nodejs";

const classSignupSchema = z.object({
  name: z.string().trim().min(2).max(120),
  albertaHealthCareNumber: z.string().trim().min(9).max(32),
  classDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = classSignupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid submission payload.",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const normalizedAhcn = normalizeAlbertaHealthCareNumber(
      parsed.data.albertaHealthCareNumber,
    );

    if (!normalizedAhcn) {
      return NextResponse.json(
        { error: "Alberta health care number must be 9 digits." },
        { status: 400 },
      );
    }

    if (!isBookableClassDate(parsed.data.classDate)) {
      return NextResponse.json(
        { error: "Please select one of the available booking dates." },
        { status: 400 },
      );
    }

    const submission = {
      id: crypto.randomUUID(),
      type: "class-signup",
      createdAt: new Date().toISOString(),
      name: parsed.data.name,
      classDate: parsed.data.classDate,
      albertaHealthCareNumber: formatAlbertaHealthCareNumber(normalizedAhcn),
      consent: parsed.data.consent,
    };

    await appendJsonLine("class-signups.jsonl", submission);
    console.info("[class-signup] submission recorded", {
      id: submission.id,
      createdAt: submission.createdAt,
      classDate: submission.classDate,
    });

    return NextResponse.json(
      {
        ok: true,
        id: submission.id,
        classDate: submission.classDate,
        zoomLink: getClassZoomLink(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[class-signup] failed to store submission", error);
    return NextResponse.json(
      { error: "Unable to process signup at this time." },
      { status: 500 },
    );
  }
}
