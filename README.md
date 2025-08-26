# Lineapp

Minimal Next.js + TypeScript starter with a single **/sales** page showing a simple sales funnel.

## Quickstart

```bash
pnpm i   # or: npm i / yarn
pnpm dev # or: npm run dev
```

Then open http://localhost:3000 and go to **/sales**.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (minimal styles)

## Project structure

```
app/
  layout.tsx     # global shell
  page.tsx       # home, links to /sales
  sales/page.tsx # sales funnel page
components/
  Funnel.tsx     # simple funnel component
```

## Deploy
Push to GitHub and import the repo in Vercel. No env vars required.
