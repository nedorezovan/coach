# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for a **Leadership Coach** specializing in clarity and decision-making under pressure.

**Positioning:** Helps leaders and senior experts in international organizations (Amazon, Google, BMW, Booking, Vodafone, Facebook, Swedbank, etc.) regain decision-making capacity and clarity before pressure becomes unsustainable. 1:1 coaching only.

**Brand pillars:** Clarity · Precision · Structured thinking · Safety through confidence · Scientific approach

**Tone:** Professional, precise, grounded in real business constraints. No generic frameworks, no motivational fluff. The work starts from seeing the problem clearly.

**Credentials:** 19+ years in HR, ICF & EMCC certified coach (ACC), certified corporate trainer, working across Europe, UK, and CIS.

See `BRIEF.md` for full positioning details.

## Stack

No build system — all files are standalone HTML. Dependencies loaded from CDN:
- **React 18** + **React Router 6** (via unpkg) + **Babel standalone** (in-browser JSX transform)
- **Tailwind CSS** (via CDN) with a custom Material Design 3 color token palette defined in `tailwind.config`
- **Google Fonts**: Cormorant Garamond (serif, headlines)
- **Local font**: Pragmatica Book (sans-serif, body) — self-hosted via `fonts/pragmatica_book.css`
- **Material Symbols Outlined** icon font

## File Structure

| File/Dir | Purpose |
|----------|---------|
| `index.html` | Full React SPA — all pages in one file, client-side routing via `MemoryRouter` |
| `images/` | Coach portrait photos (PV6A3633.jpg, PV6A3633_sm.jpg, PV6A3637.jpg, PV6A3657.jpg) |
| `fonts/` | Self-hosted Pragmatica Book font (woff/woff2 + pragmatica_book.css) |
| `BRIEF.md` | Positioning, brand pillars, credentials, target audience |

## Architecture (React SPA)

All logic lives in `index.html` as inline `<script type="text/babel">`. Structure:
- **Common components**: `NavBar`, `Footer`, `ScrollToTop`
- **Pages**: `HomePage`, `AboutPage`, `ContactPage`
- **Routing**: `MemoryRouter` → `Routes` → `Route` (paths: `/`, `/about`, `/contact`)
- Single `createRoot` mount on `<div id="root">`
- Brand name: **Nadiia Nedorezova** (confirmed from page title)

## Permissions

`.claude/settings.local.json` allows:
- `grep` on `.md`, `.txt`, `.json` files (Bash)