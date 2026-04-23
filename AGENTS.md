# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```sh
bun dev          # Start dev server at localhost:3000
bun run build    # Production build
bun run lint     # Lint all files
```

## Architecture

Personal portfolio website built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.

### Structure
- `app/` - Next.js App Router pages and server actions
  - `actions/sendEmail.ts` - Server action for contact form (nodemailer/Gmail SMTP)
  - `layout.tsx` - Root layout with Header component and JetBrains Mono font
  - Route pages: `/`, `/about`, `/experience`, `/projects`, `/contact`
- `components/` - React components
  - `header.tsx` - Client component with responsive nav and mobile menu
  - `resume/` - Homepage bento grid cards (all use `BentoCard` wrapper)

### Patterns
- Server Actions for form handling (not API routes)
- `BentoCard` is the base component for homepage grid cards - extends it for new cards
- CSS variables for theming (`--background: #CCCCCC`, `--foreground: #171717`)
- Path alias: `@/*` maps to project root

### Environment Variables
Contact form requires:
- `GMAIL_USER` - Gmail address
- `GMAIL_APP_PASSWORD` - Gmail app password
