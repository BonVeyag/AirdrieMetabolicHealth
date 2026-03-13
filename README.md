# Airdrie Metabolic Health (v1)

Production-ready Next.js App Router website for a physician-led weight loss and metabolic health program in Airdrie, Alberta.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (v4)
- Markdown content with frontmatter (`/content`)
- Zod validation for form APIs
- Local JSONL storage for submissions (`/data`)
- SMTP email delivery via `nodemailer` (for class roster digests)

## Implemented routes

- `/` Home
- `/how-it-works`
- `/book`
- `/book/success`
- `/class`
- `/class/success`
- `/start`
- `/pillars/[slug]` (Markdown-driven)
- `/resources`
- `/resources/[slug]` (Markdown-driven, references rendered from frontmatter)
- `/community`
- `/research`
- `/research/[slug]` (Markdown-driven)
- `/privacy`
- `/disclaimer`

## API routes

- `POST /api/lead`
- `POST /api/class-signup`
- `GET /api/class-signup/digest?phase=morning|final&classDate=YYYY-MM-DD` (admin roster digest)

Form submission endpoints:

- validate server-side with `zod`
- append JSON lines to local files:
  - `data/leads.jsonl`
  - `data/class-signups.jsonl`
  - `data/class-digest-log.jsonl`

## Local development (MacBook)

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production build

1. Build:

```bash
npm run build
```

2. Start:

```bash
npm start
```

## Environment variables

Create `.env.local` (optional for local):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CLASS_ZOOM_LINK=https://us04web.zoom.us/j/78684861758?pwd=m46sJyczLlVpaQGVXC3Bbbe15zbzU9.1
CLASS_ADMIN_EMAIL=thapa.rajat@gmail.com
CLASS_DIGEST_TOKEN=replace-with-strong-token
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password-or-app-password
SMTP_FROM="Airdrie Metabolic Health <no-reply@yourdomain.ca>"
```

For production, set `NEXT_PUBLIC_SITE_URL` to your public domain (for SEO metadata, sitemap, robots).
If using Vercel cron, also set `CRON_SECRET` (or reuse `CLASS_DIGEST_TOKEN`) to secure `/api/class-signup/digest`.

## Content editing

All content lives under `/content`:

- `content/pillars/*.md`
- `content/resources/*.md`
- `content/research/*.md`

### Frontmatter shape (common)

```yaml
title: "..."
description: "..."
date: "YYYY-MM-DD" # optional
tags:
  - tag1
  - tag2
references:
  - title: "Reference title"
    source: "Journal or source" # optional
    url: "https://..." # optional but recommended
```

### Research-only frontmatter fields

```yaml
status: "working paper" # or "submitted" | "published"
abstract: "Short project abstract"
```

References render at the bottom of resource, pillar, and research detail pages.

## Editable clinic placeholders

Update clinic/contact/schedule/community URLs in:

- `lib/site-config.ts`

## SEO & crawl files

- Global metadata + OpenGraph: `app/layout.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`

## Weekly Classes automation

- Class schedule is configured in `lib/class-program.ts` (recurring Tuesdays at 8:00 PM, starting first week of April).
- `vercel.json` includes cron entries for:
  - morning roster digest (Tuesday morning in Alberta time)
  - final post-class digest (Tuesday evening in Alberta time)
- Digest emails are sent to `CLASS_ADMIN_EMAIL` and contain registered names + Alberta health care numbers for the selected class date.

After deploy, submit `/dr-rajat-thapa` in Google Search Console for indexing.

## Validation and quality check

Run:

```bash
npm run lint && npm run build
```
