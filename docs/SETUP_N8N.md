# n8n Setup — Estimate Form → AI Summary → Email

This guide walks you through connecting your website's Get Estimate form to an n8n workflow that AI-summarizes each lead and emails it to your team via Resend.

**End state:** every form submission triggers an email like:

> Subject: *New Estimate: ABC Construction — Tenant Improvement*
>
> **New Estimate Request**
> John Doe from ABC Construction (General Contractor) requested an estimate for a tenant improvement project in Riverside, CA, starting in 1–3 months.
>
> **Project Details**
> - Project type: Tenant Improvement
> - Role: General Contractor
> - Timeline: 1–3 months
> - Address: Riverside, CA
>
> **Client Description**
> "We need lighting and panel upgrades for a 12,000 sq ft retail buildout..."
>
> **Recommended Next Step**
> Call John within 24 hours to schedule a site walkthrough and confirm scope.
>
> **Contact**
> John Doe · ABC Construction · 555-123-4567 · john@abc.com

---

## Prerequisites

You need three accounts:

1. **n8n** — workflow runner. Easiest: [n8n.cloud free tier](https://n8n.io/cloud/) (5,000 executions/month, way more than you'll use).
2. **OpenAI** — for the AI summary. Sign up at [platform.openai.com](https://platform.openai.com). Add ~$5 credit; each lead costs ~$0.001 (you'll use $5 in 5,000 leads).
3. **Resend** — to send email. [resend.com](https://resend.com) free tier sends 100 emails/day, 3,000/month. Plenty.

---

## Step 1 — Verify your domain in Resend

This lets emails be sent from `websiteform@exclusive-ca.com`.

1. Sign up at resend.com and log in.
2. Go to **Domains** → **Add Domain** → enter `exclusive-ca.com`.
3. Resend will show 3–4 DNS records (MX, SPF/TXT, DKIM/CNAME). Copy them.
4. Log in to wherever you manage DNS for `exclusive-ca.com` (GoDaddy, Cloudflare, Google Domains, your web host's panel, etc.) and add those records.
5. Back in Resend, click **Verify**. It usually takes 5–30 minutes.
6. Once verified, the domain shows a green check.

⚠️ **Important:** Verifying a domain in Resend lets you *send* email from any `@exclusive-ca.com` address. To *receive* email at `websiteform@exclusive-ca.com`, that's a separate setup with your email host (Google Workspace / Microsoft 365 / etc.). For this workflow you only need send capability — emails *go to* `estimating@exclusive-ca.com` (which already exists). The `websiteform@` address is just the "From" — replies will route to the actual customer's email anyway because we set `reply_to` to the form submitter.

7. In Resend, go to **API Keys** → **Create API Key** → name it "Website Form" → permission "Sending access" → copy the key (starts with `re_...`). Save it somewhere safe; Resend won't show it again.

---

## Step 2 — Get an OpenAI API key

1. Sign up at platform.openai.com.
2. Add a payment method and put $5 of credit on the account (Settings → Billing).
3. Go to **API Keys** → **Create new secret key** → copy it (starts with `sk-...`).

---

## Step 3 — Set up n8n

### Easiest: n8n Cloud

1. Sign up at [n8n.cloud](https://n8n.cloud/) — free tier is fine.
2. Once your instance is ready, you'll land on a workflows dashboard.

### Self-host alternative (skip if using cloud)

Deploy via Railway / Render / Fly.io / your own server — see [n8n docs](https://docs.n8n.io/hosting/).

---

## Step 4 — Import the workflow

1. In n8n, click **Workflows** → **Import from File**.
2. Select `docs/n8n-estimate-workflow.json` from this repo.
3. The workflow opens — you should see 3 connected nodes: **Webhook → OpenAI — Generate Summary → Resend — Send Email**.

If import doesn't work or you'd rather build it manually, see "**Manual setup**" at the bottom of this doc.

---

## Step 5 — Wire your API keys

### OpenAI node

1. Click the **OpenAI — Generate Summary** node.
2. Find the **Authorization** header in the Headers section.
3. Replace `Bearer YOUR_OPENAI_API_KEY_HERE` with your real key, e.g. `Bearer sk-proj-xxxxxxxxxxxx`.
4. Click out of the node to save.

### Resend node

1. Click the **Resend — Send Email** node.
2. Find the **Authorization** header.
3. Replace `Bearer YOUR_RESEND_API_KEY_HERE` with your real key, e.g. `Bearer re_xxxxxxxx`.
4. While you're here, look at the JSON Body — confirm:
   - `"from"`: `Estimate Requests <websiteform@exclusive-ca.com>` (or change the address)
   - `"to"`: `["estimating@exclusive-ca.com"]` — change this to whoever should receive the leads. You can list multiple: `["aidan@exclusive-ca.com","office@exclusive-ca.com"]`.
5. Click out of the node to save.

---

## Step 6 — Activate the workflow

1. Top-right of the workflow editor — toggle **Inactive → Active**.
2. Click the **Webhook** node again. You'll see two URLs: a **Test URL** and a **Production URL**. Copy the **Production URL** — it looks like `https://yourname.app.n8n.cloud/webhook/estimate-form`.

---

## Step 7 — Wire it to the website

### Local development

Open `.env.local` in the repo:

```
N8N_WEBHOOK_URL=https://yourname.app.n8n.cloud/webhook/estimate-form
```

(Paste the URL you copied. Then restart `npm run dev` so it picks up the change.)

### Production (Vercel)

1. Vercel dashboard → your project → **Settings** → **Environment Variables**.
2. Add `N8N_WEBHOOK_URL` with the same value, scoped to **Production** (and **Preview** if you want it).
3. Redeploy (push any commit, or use the "Redeploy" button).

---

## Step 8 — Test it

1. Visit your site (`localhost:3000` or production).
2. Click **Get Estimate**, fill out the form, submit.
3. Check the recipient inbox — you should get the AI-summarized email within 5–10 seconds.
4. In n8n, **Executions** tab will show the run with green checkmarks.

---

## Customizing the AI summary

To change tone, structure, or what the AI emphasizes, open the **OpenAI — Generate Summary** node and edit the `system` message in the JSON body. Examples:

- **Shorter:** add "Maximum 100 words" to the system prompt.
- **Different recipient styles per project type:** replace single `to` with a JS expression that switches recipients based on `$('Webhook').item.json.body.projectType`.
- **Slack instead of email:** swap the Resend node for an HTTP Request to a Slack webhook.

---

## Switching off Make.com

Once you've confirmed n8n is delivering emails reliably:

1. Open `.env.local` and delete the `MAKE_WEBHOOK_URL=...` line.
2. Same in Vercel env vars.
3. Optional: archive the old Make.com scenario.

The API route (`app/api/estimate/route.ts`) automatically prefers `N8N_WEBHOOK_URL` over `MAKE_WEBHOOK_URL`, so as long as N8N is set, Make is unused.

---

## Manual setup (if import fails)

Build the workflow node-by-node:

### Node 1 — Webhook
- **HTTP Method:** POST
- **Path:** `estimate-form`
- **Respond:** Immediately (`onReceived`)

### Node 2 — HTTP Request (OpenAI)
- **URL:** `https://api.openai.com/v1/chat/completions`
- **Method:** POST
- **Send Headers:** ON
  - `Authorization: Bearer YOUR_OPENAI_API_KEY`
  - `Content-Type: application/json`
- **Send Body:** ON, type **JSON**
- **JSON Body:** copy the `jsonBody` field from `n8n-estimate-workflow.json` (the `=`-prefixed expression)

### Node 3 — HTTP Request (Resend)
- **URL:** `https://api.resend.com/emails`
- **Method:** POST
- **Send Headers:** ON
  - `Authorization: Bearer YOUR_RESEND_API_KEY`
  - `Content-Type: application/json`
- **Send Body:** ON, type **JSON**
- **JSON Body:** copy from the workflow JSON

### Connections
- Webhook → OpenAI
- OpenAI → Resend

Activate, copy the production webhook URL, and follow Step 7+ above.

---

## Troubleshooting

- **"401 Unauthorized" from OpenAI** — your `sk-...` key is wrong or has no credit. Top up at platform.openai.com.
- **"403 from Resend"** — your `re_...` key is wrong, or your `from` domain isn't verified yet.
- **Email never arrives** — check spam folder first. Check n8n's **Executions** tab — was there an error? Did the Resend node return a 200?
- **Form submits but no n8n execution** — `N8N_WEBHOOK_URL` is wrong or workflow isn't activated. Double-check the production URL and that the toggle says "Active."
- **AI summary is missing or weird** — open the OpenAI node, check the system prompt; OpenAI may be returning markdown instead of HTML. Re-emphasize "HTML only, no markdown" in the system prompt.
