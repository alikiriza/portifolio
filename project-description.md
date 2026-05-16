# Alikiriza Carol — Project Description

## What This App Does
A personal portfolio website for Alikiriza Carol, a Next.js developer and creative builder based in Kampala, Uganda. The site showcases her projects, skills, and personality to potential clients and collaborators. It serves as her professional online presence — a place where visitors can learn about her work, her passions, and how to reach her.

## Target Users
- **Primary user:** Potential clients, employers, and collaborators who want to evaluate Carol's skills and past work.
- **Secondary user:** Community members (church, youth apostolate, charity networks) who want to connect with her personally.

## Core Value Proposition
A bold, creative portfolio that shows — not just tells — what Carol can build, blending technical skill with genuine personality rooted in faith, community, and Kampala's creative energy.

## User Roles & Permissions
- **Visitor (public):** Can view all sections, download CV, and contact Carol via email or phone.
- **No auth required:** This is a fully public, read-only site.

## Features — Complete List
1. **Hero Section** — Full-screen intro with Carol's name, title ("Next.js Developer & Creative Builder"), profile photo from GitHub, a "Get In Touch" CTA button, a "Download CV" button, and social links (email + phone).
2. **About Section** — Short bio describing her background, passion for building creative digital solutions, and her use of AI in development workflows.
3. **Projects Showcase** — Grid of 3 project cards: Contact Manager, Bible Quiz App, and Choir App. Each card includes the project name, a short description, tech stack badges, and a "View Project" link.
4. **Skills & Tech Stack Section** — Visual display of her core tools: Next.js, React, TypeScript, Tailwind CSS, AI tools, and Prisma.
5. **Interests & Community Section** — A warm section highlighting her involvement in Youth Apostolate, Bible Study, Charity work, and Voluntary Church Service — communicating her values.
6. **Contact Section** — Email (alikirizacarol7@gmail.com) and phone (0786720310) displayed clearly with copy-to-clipboard and mailto/tel links.
7. **Marquee Ticker Strip** — A horizontally scrolling strip (dark green background) listing her services/skills: "Next.js Development ✦ AI-Powered Apps ✦ Web Design ✦ Creative Solutions ✦ Uganda & Beyond".
8. **Sticky Navigation** — Minimal top nav with her name/logo on the left and anchor links (About, Projects, Skills, Contact) on the right.
9. **Footer** — Copyright line, name, and year.

## Data Model
No database. All content is static and stored in a `src/data/` config folder.

- **projects.ts:** `{ id, title, description, techStack[], liveUrl?, githubUrl?, emoji }`
- **skills.ts:** `{ name, icon, category }`
- **interests.ts:** `{ title, description, icon }`

**Relationships:** None — purely static content exported as arrays.

## Pages / Screens
1. `/` — Single-page portfolio (all sections on one scrollable page: Hero → About → Projects → Skills → Interests → Contact)
2. `/` — Same page handles all anchor navigation (`#about`, `#projects`, `#skills`, `#contact`)

No additional routes needed for v1.

## Integrations
- **Auth:** None
- **Email:** None (mailto: link only — no Resend)
- **Payments:** None
- **File uploads:** None (CV is a static PDF in `/public`)
- **AI features:** None (built with AI, not AI-powered at runtime)
- **Dark mode:** No — light mode only. No ThemeProvider, no next-themes.

## JB Components to Install
- **JB Data Table:** Not needed (no data tables)
- No JB components required for this project — custom components only.

## Out of Scope (v1)
- Blog or writing section
- Admin CMS to edit content
- Contact form with backend (email sending via Resend)
- Dark mode toggle
- Animations beyond Framer Motion entrance effects
- Authentication of any kind
- Project detail pages (single-page showcase is sufficient for v1)
