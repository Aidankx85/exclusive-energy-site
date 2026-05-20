"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const PROJECT_TYPES = [
  { value: "", label: "Project type *" },
  { value: "tenant-improvement", label: "Tenant Improvement" },
  { value: "new-construction", label: "New Construction" },
  { value: "lighting-retrofit", label: "Lighting Retrofit / Energy Efficiency" },
  { value: "ev-charging", label: "EV Charging Station" },
  { value: "warehouse-power", label: "Warehouse Power" },
  { value: "service-maintenance", label: "Service & Maintenance / Repairs" },
  { value: "other", label: "Other" },
];

const ROLES = [
  { value: "", label: "Your role *" },
  { value: "general-contractor", label: "General Contractor" },
  { value: "building-owner", label: "Building Owner" },
  { value: "property-manager", label: "Property Manager" },
  { value: "project-manager", label: "Project Manager" },
  { value: "architect-engineer", label: "Architect / Engineer" },
  { value: "tenant", label: "Tenant" },
  { value: "other", label: "Other" },
];

const TIMELINES = [
  { value: "", label: "Timeline *" },
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "exploring", label: "Just exploring" },
];

type EstimateFormProps = {
  variant?: "modal" | "inline";
};

export default function EstimateForm({ variant = "inline" }: EstimateFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formLoadedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          formLoadedAt: formLoadedAt.current,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center text-gray-800 py-6">
        {variant === "inline" && (
          <Image
            src="/exclusive-logo.png"
            alt=""
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p>
          Your estimate request has been submitted successfully.
          <br />
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 px-4 py-2.5 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {variant === "modal" && (
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Request an Estimate
        </h2>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name *"
          autoComplete="name"
          className={inputClass}
          required
        />
        <input
          name="company"
          type="text"
          placeholder="Company / GC Name *"
          autoComplete="organization"
          className={inputClass}
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          placeholder="Email *"
          autoComplete="email"
          className={inputClass}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone *"
          autoComplete="tel"
          className={inputClass}
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <select name="projectType" required defaultValue="" className={inputClass}>
          {PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        <select name="role" required defaultValue="" className={inputClass}>
          {ROLES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="address"
          type="text"
          placeholder="Project Address (City, State) *"
          className={inputClass}
          required
        />
        <select name="timeline" required defaultValue="" className={inputClass}>
          {TIMELINES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="description"
        placeholder="Tell us about your project — scope, square footage, key constraints *"
        className={`${inputClass} min-h-[120px]`}
        required
      />

      {/* Honeypot — invisible to humans, bots will fill it. Server rejects if non-empty. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0 pointer-events-none h-0 w-0"
      />

      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Submit Request"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll respond within one business day. We never share your info.
      </p>
    </form>
  );
}
