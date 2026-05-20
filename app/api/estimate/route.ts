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
    // Pretend success so the bot doesn't retry.
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

  const webhookUrl = process.env.N8N_WEBHOOK_URL || process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "[estimate] No webhook URL configured — submission accepted but not forwarded.",
      payload,
    );
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[estimate] Webhook returned non-OK", res.status);
      return NextResponse.json(
        { error: "Could not deliver your request. Please call 951-299-7505." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[estimate] Webhook fetch failed", err);
    return NextResponse.json(
      { error: "Could not deliver your request. Please call 951-299-7505." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
