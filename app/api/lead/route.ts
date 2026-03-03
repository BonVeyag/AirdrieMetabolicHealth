import { NextResponse } from "next/server";
import { z } from "zod";
import { appendJsonLine } from "@/lib/submissions";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  preferredContactMethod: z.enum(["email", "phone"]),
  goal: z.string().trim().min(5).max(500),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid submission payload.",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const submission = {
      id: crypto.randomUUID(),
      type: "lead",
      createdAt: new Date().toISOString(),
      ...parsed.data,
    };

    await appendJsonLine("leads.jsonl", submission);
    console.info("[lead] submission recorded", {
      id: submission.id,
      createdAt: submission.createdAt,
      preferredContactMethod: submission.preferredContactMethod,
    });

    return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
  } catch (error) {
    console.error("[lead] failed to store submission", error);
    return NextResponse.json(
      { error: "Unable to process submission at this time." },
      { status: 500 },
    );
  }
}
