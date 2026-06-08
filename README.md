# Verny Portfolio

Personal portfolio for Verny Emillio John, built as a one-page React site with animated sections, project filtering, and a Supabase-backed contact form.

## Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Supabase
- Plausible analytics support
- ESLint

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

3. Fill the Supabase and optional analytics values in `.env`:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_PLAUSIBLE_DOMAIN=
```

4. Start the dev server:

```bash
npm run dev
```

## Supabase Tables

The app expects two tables:

- `portfolio_projects`: read by the public site for project cards.
- `portfolio_messages`: receives contact form submissions.

See `SUPABASE.md` for full SQL, including table definitions and row-level security policies.

## RLS Requirements

Enable RLS on both tables.

- Allow anonymous `SELECT` on `portfolio_projects`.
- Allow anonymous `INSERT` on `portfolio_messages`.
- Do not allow anonymous users to read contact messages.

## Deploy Notes

- Build with `npm run build`.
- Deploy the generated `dist/` directory.
- Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the hosting provider.
- Add `VITE_PLAUSIBLE_DOMAIN` only when Plausible analytics should be active.
- Add `public/cv.pdf` before re-enabling the CV link in `Hero.jsx`.
