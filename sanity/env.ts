const DEFAULT_API_VERSION = "2025-07-23";

const rawApiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "").trim();

// Sanity requires apiVersion to be `1`, `X`, or a `YYYY-MM-DD` date.
// Reject anything else so the client doesn't blow up at construction time.
const looksValid = /^(1|X|\d{4}-\d{2}-\d{2})$/.test(rawApiVersion);

export const apiVersion = looksValid ? rawApiVersion : DEFAULT_API_VERSION;

export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET ?? "").trim();
export const projectId = (
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
).trim();

export const isSanityConfigured = Boolean(dataset && projectId);
