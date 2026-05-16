# Alikiriza Carol Portfolio — Build Phases

## Phase 1 — Foundation
**Goal:** Next.js project scaffolded, design system applied, layout components built, static data configured, navigation working.

### Tasks
- [ ] Initialize Next.js 15+ project with TypeScript, Tailwind v4, App Router
- [ ] Create `.env.example` (committed) and `.env.local` (gitignored) — for this project, no secrets are needed in v1, but scaffold the file with a `NEXT_PUBLIC_SITE_URL` var for SEO metadata
- [ ] Add `.env.local` to `.gitignore`
- [ ] Apply `design-style-guide.md` tokens to `globals.css` using Tailwind v4 CSS-first config (`@theme` directive — NO `tailwind.config.ts`)
- [ ] Install and configure Google Font: **Space Grotesk** (weights 400, 500, 700, 800) via `next/font/google` in root layout
- [ ] Create root layout (`src/app/layout.tsx`) with correct font class, metadata (title, description, og:image using Carol's GitHub avatar), and viewport config
- [ ] **Do NOT install ThemeProvider or next-themes** — light mode only
- [ ] Build `<Navbar />` component — sticky top, Carol's name on left, anchor links on right (About, Projects, Skills, Contact), mobile hamburger menu
- [ ] Build `<Footer />` component — "© 2025 Alikiriza Carol. All rights reserved."
- [ ] Create `src/data/projects.ts` with all 3 projects (Contact Manager, Bible Quiz App, Choir App) — typed with `Project` interface
- [ ] Create `src/data/skills.ts` with Carol's tech stack items — typed with `Skill` interface
- [ ] Create `src/data/interests.ts` with her 4 community interests — typed with `Interest` interface
- [ ] Build custom 404 page (`src/app/not-found.tsx`) with on-brand styling and a "Go Home" button
- [ ] Build loading page (`src/app/loading.tsx`) with a minimal skeleton
- [ ] Verify: site loads, nav links scroll to anchors, fonts render correctly, no TypeScript errors

### Dependencies
- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

---

## Phase 2 — Core Sections
**Goal:** All portfolio sections built, connected to static data, fully responsive, with Framer Motion entrance animations.

### Tasks
- [ ] Install Framer Motion: `pnpm add framer-motion`
- [ ] Build `<HeroSection />` component:
  - Carol's profile photo via `next/image` (GitHub avatar URL, with `priority` flag)
  - Name: "Alikiriza Carol" in display weight (800)
  - Title: "Next.js Developer & Creative Builder — Kampala, Uganda"
  - "Get In Touch" button → scrolls to `#contact` (black filled, pill shape with arrow icon)
  - "Download CV" button → links to `/carol-cv.pdf` in `/public` (ghost style with download icon)
  - Social links: Email icon (mailto) + Phone icon (tel)
  - Emerald green decorative blob shapes in background (SVG blobs, positioned absolute)
  - Framer Motion: fade-in + slide-up on mount
- [ ] Build `<MarqueeTicker />` component:
  - Dark green background (`#0A3D2B`)
  - Infinite horizontal scroll with CSS animation
  - Content: "Next.js Development ✦ AI-Powered Apps ✦ Creative Builder ✦ Kampala, Uganda ✦ Web Design ✦ Faith & Community ✦"
  - Place between Hero and About sections
- [ ] Build `<AboutSection />` component (`id="about"`):
  - Short paragraph bio
  - Stat cards: "2+ Years Experience", "3 Projects Shipped", "AI-Powered Workflow", "Based in Kampala"
  - Framer Motion: stagger children on scroll into view (use `whileInView`)
- [ ] Build `<ProjectsSection />` component (`id="projects"`):
  - Grid of 3 `<ProjectCard />` components
  - Each card: emoji icon, project name, description, tech stack badges, optional GitHub/live links
  - Card hover: subtle lift effect (transform + shadow via Framer Motion `whileHover`)
  - Data sourced from `src/data/projects.ts`
- [ ] Build `<SkillsSection />` component (`id="skills"`):
  - Icon grid of tech stack items
  - Each skill: logo icon (use Tabler icons or inline SVG), label
  - Data sourced from `src/data/skills.ts`
- [ ] Build `<InterestsSection />` component:
  - 2×2 card grid: Youth Apostolate, Bible Study, Charity Work, Voluntary Church Service
  - Warm, personal tone — not a tech section
  - Data sourced from `src/data/interests.ts`
- [ ] Build `<ContactSection />` component (`id="contact"`):
  - Email row: icon + `alikirizacarol7@gmail.com` + copy-to-clipboard button
  - Phone row: icon + `0786720310` + copy-to-clipboard + `tel:` link
  - Warm CTA heading: "Let's build something together"
- [ ] Add `<Navbar />` and `<Footer />` to root layout
- [ ] Assemble all sections in `src/app/page.tsx` in correct order
- [ ] Verify: all sections render correctly on mobile (375px) and desktop (1280px)
- [ ] Verify: Framer Motion animations trigger on scroll, no layout shift
- [ ] Add a placeholder `carol-cv.pdf` to `/public` (Carol replaces with real CV later)

### Dependencies
- Phase 1 must be complete (layout, fonts, data files, globals.css tokens)

---

## Phase 3 — Polish & Performance
**Goal:** Site is production-ready: fast, accessible, SEO-optimised, and visually polished.

### Tasks
- [ ] Add Open Graph metadata to `layout.tsx` (title, description, og:image = GitHub avatar)
- [ ] Add `robots.txt` and `sitemap.xml` via Next.js App Router metadata API
- [ ] Ensure all `next/image` components have correct `alt` text and `width`/`height`
- [ ] Run Lighthouse audit — target 95+ Performance, 100 Accessibility
- [ ] Fix any accessibility issues (contrast, aria labels, focus states)
- [ ] Test on real mobile device or BrowserStack (iPhone SE + Samsung Galaxy)
- [ ] Verify smooth scrolling behavior on all anchor links
- [ ] Check all external links open correctly (mailto, tel)
- [ ] Compress and optimise any static assets in `/public`
- [ ] **Run pre-deploy code review** — address any Critical findings

### Dependencies
- Phase 2 must be complete (all sections built and data-connected)

---

## Phase 4 — Deploy
**Goal:** Site is live at a custom domain with SSL.

### Tasks
- [ ] Push project to GitHub repository (`alikiriza-carol-portfolio`)
- [ ] Create new project on Vercel, import from GitHub
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable in Vercel to the production URL
- [ ] Deploy to Vercel — verify build succeeds
- [ ] Configure custom domain on Vercel (if Carol has one — e.g. `alikiriza.dev` or `carolalikiriza.com`)
- [ ] Configure Cloudflare DNS to point to Vercel (if using Cloudflare)
- [ ] Verify site loads on production URL with SSL (`https://`)
- [ ] Share live URL 🎉

### Production Checklist
- [ ] Site loads on production URL
- [ ] Profile photo loads correctly (GitHub avatar URL or replace with hosted image)
- [ ] "Download CV" link works (real PDF in `/public`)
- [ ] Email and phone links work on mobile
- [ ] All Framer Motion animations work in production build
- [ ] 404 page styled and working
- [ ] Lighthouse score 90+ on production URL
- [ ] Site looks correct on mobile Safari (iOS) and Chrome (Android)
