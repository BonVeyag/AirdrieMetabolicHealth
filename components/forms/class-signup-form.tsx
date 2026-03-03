"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  CLASS_TIME_LABEL,
  CLASS_TIME_ZONE,
  type ClassSession,
} from "@/lib/class-program";

type ClassSignupState = {
  name: string;
  albertaHealthCareNumber: string;
  classDate: string;
  consent: boolean;
};

type ClassSignupFormProps = {
  sessions: ClassSession[];
};

type ClassSignupSuccess = {
  id: string;
  classDate: string;
  zoomLink: string;
};

export function ClassSignupForm({ sessions }: ClassSignupFormProps) {
  const hasSessions = sessions.length > 0;
  const [form, setForm] = useState<ClassSignupState>({
    name: "",
    albertaHealthCareNumber: "",
    classDate: sessions[0]?.dateKey ?? "",
    consent: false,
  });
  const [success, setSuccess] = useState<ClassSignupSuccess | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const selectedSession = useMemo(
    () => sessions.find((session) => session.dateKey === form.classDate),
    [form.classDate, sessions],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/class-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as {
        error?: string;
        id?: string;
        classDate?: string;
        zoomLink?: string;
      };

      if (!response.ok) {
        throw new Error(payload.error || "Unable to submit signup.");
      }

      if (!payload.id || !payload.classDate || !payload.zoomLink) {
        throw new Error("Registration completed but class details were missing.");
      }

      setSuccess({
        id: payload.id,
        classDate: payload.classDate,
        zoomLink: payload.zoomLink,
      });

      setForm((current) => ({
        ...current,
        name: "",
        albertaHealthCareNumber: "",
        consent: false,
      }));
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-lg border border-slate-200 bg-white p-6"
    >
      <div>
        <label
          htmlFor="class-session-date"
          className="text-sm font-medium text-slate-900"
        >
          Select class date
        </label>
        <select
          id="class-session-date"
          name="classDate"
          required
          value={form.classDate}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              classDate: event.target.value,
            }))
          }
          disabled={!hasSessions}
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          {hasSessions ? (
            sessions.map((session) => (
              <option key={session.dateKey} value={session.dateKey}>
                {session.shortLabel}
              </option>
            ))
          ) : (
            <option value="">No upcoming classes available</option>
          )}
        </select>
      </div>

      <div>
        <label htmlFor="class-name" className="text-sm font-medium text-slate-900">
          Full name
        </label>
        <input
          id="class-name"
          name="name"
          required
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div>
        <label
          htmlFor="class-ahcn"
          className="text-sm font-medium text-slate-900"
        >
          Alberta health care number
        </label>
        <input
          id="class-ahcn"
          name="albertaHealthCareNumber"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="123-456-789"
          required
          value={form.albertaHealthCareNumber}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              albertaHealthCareNumber: event.target.value,
            }))
          }
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <p className="mt-1 text-xs text-slate-500">
          Use your 9-digit AHCIP number.
        </p>
      </div>

      <label className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) =>
            setForm((current) => ({ ...current, consent: event.target.checked }))
          }
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
        />
        <span>
          I consent to using this information for class registration and attendance
          records.
        </span>
      </label>

      {error ? (
        <p role="alert" className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          {error}
        </p>
      ) : null}

      {success ? (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold">Registration confirmed.</p>
          <p className="mt-1">
            {selectedSession?.longLabel ||
              `Class date: ${success.classDate} at ${CLASS_TIME_LABEL} (${CLASS_TIME_ZONE})`}
          </p>
          <a
            href={success.zoomLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center rounded-md bg-emerald-700 px-3 py-2 font-semibold text-white transition hover:bg-emerald-600"
          >
            Open Zoom link
          </a>
          <p className="mt-2 break-all text-xs text-emerald-800">
            Zoom link: {success.zoomLink}
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting || !hasSessions}
        className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting
          ? "Submitting..."
          : hasSessions
            ? "Register and reveal Zoom link"
            : "No sessions available"}
      </button>
    </form>
  );
}
