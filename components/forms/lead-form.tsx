"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type LeadFormState = {
  name: string;
  email: string;
  phone: string;
  preferredContactMethod: "email" | "phone";
  goal: string;
};

const initialState: LeadFormState = {
  name: "",
  email: "",
  phone: "",
  preferredContactMethod: "email",
  goal: "",
};

export function LeadForm() {
  const router = useRouter();
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Unable to submit form.");
      }

      router.push("/book/success");
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
    <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-slate-200 bg-white p-6">
      <div>
        <label htmlFor="lead-name" className="text-sm font-medium text-slate-900">
          Full name
        </label>
        <input
          id="lead-name"
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
        <label htmlFor="lead-email" className="text-sm font-medium text-slate-900">
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div>
        <label htmlFor="lead-phone" className="text-sm font-medium text-slate-900">
          Phone
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={(event) =>
            setForm((current) => ({ ...current, phone: event.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <div>
        <label
          htmlFor="lead-preferred-contact"
          className="text-sm font-medium text-slate-900"
        >
          Preferred contact method
        </label>
        <select
          id="lead-preferred-contact"
          name="preferredContactMethod"
          required
          value={form.preferredContactMethod}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              preferredContactMethod: event.target.value as "email" | "phone",
            }))
          }
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>

      <div>
        <label htmlFor="lead-goal" className="text-sm font-medium text-slate-900">
          Brief goal
        </label>
        <textarea
          id="lead-goal"
          name="goal"
          rows={4}
          required
          value={form.goal}
          onChange={(event) =>
            setForm((current) => ({ ...current, goal: event.target.value }))
          }
          placeholder="Example: I want support with weight loss and blood sugar control."
          className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
      </div>

      <p className="text-xs text-slate-600">
        Please do not include detailed medical history in this form.
      </p>

      {error ? (
        <p role="alert" className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Send Consultation Request"}
      </button>
    </form>
  );
}
