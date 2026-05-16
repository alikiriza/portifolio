# Claude Code — Build Prompt: Alikiriza Carol Portfolio

Read the following files in order before doing anything:
1. `design-style-guide.md` — The visual design system for this project. Apply to every component you build.
2. `project-description.md` — What we are building. Every decision must align with this.
3. `project-phases.md` — The build plan. Work through phases in order.

---

## Rules

- Work through **ONE phase at a time**. Complete all tasks in a phase before moving to the next.
- After completing each phase, **stop and confirm with me** before proceeding.
- Follow `design-style-guide.md` tokens exactly — colors, typography, spacing, radius, animation spec.
- This is a **static portfolio site** — no database, no auth, no Prisma, no Redis. All content lives in `src/data/` TypeScript files.
- **No ThemeProvider, no next-themes, no dark mode** — light mode only throughout.
- Use **Framer Motion** for all animations. No GSAP, no AOS, no raw CSS keyframes for entrance animations.
- Use **Lucide React** for all icons (`pnpm add lucide-react`).
- Use **Space Grotesk** font via `next/font/google` (weights 400, 500, 700, 800).
- Use **`next/image`** for Carol's profile photo — add `avatars.githubusercontent.com` to `next.config.ts` `remotePatterns`.
- Use **Tailwind v4 CSS-first config** — all design tokens go in `globals.css` via `@theme` directive. No `tailwind.config.ts`.
- All animations use `whileInView` with `viewport={{ once: true }}` — animate `opacity` and `transform` only.
- Follow **performance budget**: `next/image` with `priority` on hero photo, aspect-ratio on all images, no layout shift.
- Write all copy in Carol's real voice — warm, direct, faith-grounded, community-oriented. No lorem ipsum.

---

## Project Context

**Who:** Alikiriza Carol — Next.js developer & creative builder, Kampala, Uganda
**Email:** alikirizacarol7@gmail.com
**Phone:** 0786720310
**GitHub avatar:** `https://avatars.githubusercontent.com/u/285229291?s=400&u=791818c318fe668d074d5667a6a853f40095198b&v=4`

**Projects to showcase:**
1. Contact Manager — saves contacts for business people
2. Bible Quiz App — helps kids & adults during Bible study
3. Choir App — manages music for praise & worship and order of the mass

**Community interests:** Youth Apostolate, Bible Study, Charity Work, Voluntary Church Service

**Design anchor:** Bold creative developer portfolio — white background, heavy black display type (Space Grotesk 800), vibrant emerald green (`#00C47A`) accent on blobs + marquee ticker + social icons, black pill primary CTA, flat white project cards with 1px border.

---

## Start

Begin with **Phase 1 — Foundation** from `project-phases.md`. Read every task in Phase 1 and execute them in order. When Phase 1 is complete, show me what's been built and wait for my confirmation before starting Phase 2.
