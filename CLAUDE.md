# CLAUDE.md — Lockdown Rules

This file governs how Claude Code (and any other AI coding agent) operates in this repository. **Treat these rules as binding.**

## Project context

- This is the public marketing site for **Exclusive Energy & Electric** (commercial electrical contractor, Corona, CA).
- Stack: Next.js 15 + React 19 + Tailwind 4 + Sanity CMS.
- The site has marketing pages, a portfolio (Sanity-driven), and an intake/estimate form.
- The estimate form posts to a server-side API route at `/api/estimate`. Webhook/email forwarding has been removed for now; submissions are validated server-side and logged. A delivery integration will be added back later.
- Do not assume production access is safe.
- Do not use real secrets unless the user manually adds them outside of chat.

## Absolute security rules

1. Never read, print, copy, summarize, expose, or repeat secret values.
2. Never inspect the contents of `.env`, `.env.local`, `.env.production`, `.env.development`, or any secret file.
3. You may reference environment variable **names** only, never values.
4. Never hardcode API keys, tokens, webhook URLs, database URLs, or credentials into source code.
5. Never place private secrets in frontend / client-side code.
6. Never use `NEXT_PUBLIC_` for private server-side secrets.
7. Never commit `.env` files or other secret files.
8. Never push to GitHub unless the user explicitly approves.
9. Never deploy to Vercel or any host unless the user explicitly approves.
10. Never send real emails, texts, or webhooks unless the user explicitly approves.
11. Never delete files unless the user explicitly approves.
12. Never run destructive commands unless the user explicitly approves.
13. Never install packages unless you explain why and the user approves.
14. Never modify Git history unless the user explicitly approves.
15. Never access files outside this repository.
16. Never access Desktop, Downloads, Documents, OneDrive, Google Drive, or personal folders.
17. Never collect or request sensitive user data such as SSN, bank info, passwords, payment info, driver license info, or private documents.

## Allowed without asking

- Read normal project source files.
- Edit normal app files inside this repository.
- Create safe placeholder files.
- Create or update `.env.example` with placeholder values only.
- Create or update this `CLAUDE.md`.
- Update `.gitignore` to protect secret files.
- Suggest code improvements.
- Explain what changed.

## Require user approval before

- Running `npm install` or adding dependencies.
- Running database migrations.
- Running Git commands other than `git status`, `git diff`, or `git grep`.
- Deleting, moving, or renaming files.
- Editing config files that affect deployment.
- Editing `package.json`.
- Sending test emails to real addresses.
- Calling live webhooks.
- Connecting to external services.
- Using any API key.
- Deploying.
- Pushing code.

## Denied actions

- Do not read `.env` or any env file values.
- Do not print secrets.
- Do not push to `main`.
- Do not deploy.
- Do not run `rm -rf` or equivalent destructive commands.
- Do not run commands outside the repo.
- Do not change system permissions.
- Do not access customer / private data.
- Do not store real credentials in source code, README, or chat.

## Environment variable naming

Use environment variable **names** only. Private values for this project should be referenced like:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` — intentionally public (Sanity convention). The site is built to tolerate these being unset (Sanity-driven sections degrade to empty), but must be set in Vercel for the portfolio CMS pipeline to render content.

If a feature needs a secret, tell the user:
1. The variable name needed.
2. Where they should add it manually (`.env.local`, Vercel env vars, etc.).
3. Do **not** ask them to paste the secret into chat.

## Intake form rules

- The intake form may collect only: name, email, phone, business name, project address, project notes, project type, role, timeline.
- Do not collect payment info, SSN, bank info, passwords, or private documents.
- A future delivery integration (email, CRM, or webhook) should run server-side from `/api/estimate`, never directly from the browser.

## Next.js security rules

- Private secrets stay server-side only.
- Do not expose server secrets in React components.
- Do not use `NEXT_PUBLIC_` unless the value is intentionally public.
- The intake form must POST to `/api/estimate` (server-side). Validate / sanitize form input before processing it.
- Apply spam protection (honeypot, time-on-form check, optional Turnstile/captcha).

## Git safety

Before making major changes, ask the user to make a backup commit.

Safe to run without approval:
- `git status`
- `git diff`
- `git grep`

Require approval:
- `git add` / `git commit`
- `git push`
- `git reset --hard`
- `git clean`
- `git rebase`
- `git rm`

## Working with the project owner (Aidan)

Aidan prefers to be asked before non-trivial actions, especially anything that creates external accounts, hits real services, sends real emails, or commits / pushes / deploys. When in doubt, propose a step and wait for confirmation rather than executing it.
