import { NextResponse } from "next/server";

const REQUIRED_FIELDS = [
  "name",
  "company",
  "email",
  "phone",
  "projectType",
  "role",
  "address",
  "timeline",
  "description",
] as const;

const MIN_FORM_DURATION_MS = 3000;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Spam check 1 — honeypot. Real humans never fill this.
  if (body.company_website) {
    return NextResponse.json({ success: true });
  }

  // Spam check 2 — too-fast submission (bots fill instantly).
  const formLoadedAt = Number(body.formLoadedAt);
  if (Number.isFinite(formLoadedAt)) {
    const elapsed = Date.now() - formLoadedAt;
    if (elapsed < MIN_FORM_DURATION_MS) {
      return NextResponse.json({ success: true });
    }
  }

  // Required field validation.
  for (const field of REQUIRED_FIELDS) {
    if (typeof body[field] !== "string" || !(body[field] as string).trim()) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 },
      );
    }
  }

  const payload = {
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone,
    projectType: body.projectType,
    role: body.role,
    address: body.address,
    timeline: body.timeline,
    description: body.description,
    submittedAt: new Date().toISOString(),
    sourceUrl: request.headers.get("referer") || null,
  };

  // TODO: wire up email/CRM delivery (e.g. Resend). Until then, log only
  // non-PII metadata so Vercel function logs aren't a leak surface.
  console.log("[estimate] New submission", {
    projectType: payload.projectType,
    role: payload.role,
    timeline: payload.timeline,
    submittedAt: payload.submittedAt,
    sourceUrl: payload.sourceUrl,
    companyDomain: typeof payload.email === "string"
      ? payload.email.split("@")[1] || null
      : null,
  });

  return NextResponse.json({ success: true });
}
