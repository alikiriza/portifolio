# Alikiriza Carol Portfolio — Design Style Guide

> Dark mode: NOT supported in this project. Remove all `.dark` classes, no dark palette, no toggle.

---

## Visual Reference

The design is anchored by a bold creative developer portfolio aesthetic — white background with a dramatic hero section, heavy black display typography (800–900 weight), and vibrant **emerald green** as the single accent color used sparingly but with confidence: blob shapes behind the hero photo, the active nav indicator, the LinkedIn/social icon fill, and the marquee ticker strip background. The reference shot features a real portrait photo in a clean rectangular frame floating over the green blobs, a black pill CTA button with an arrow icon, and a ghost "Download CV" secondary action. Project cards are flat white with light gray borders and subtle shadow. A dark green full-width marquee ticker strip separates the hero from the rest of the page. The overall energy is: **bold, personal, creative, Kampala-proud** — not generic SaaS.

---

## 1. Project Identity

- **Project name:** Alikiriza Carol Portfolio
- **Tagline:** "Creative builder. Next.js developer. Based in Kampala."
- **Personality:** Warm, confident, faith-grounded, technically sharp
- **Audience:** Clients, collaborators, employers, community

---

## 2. Color Palette

### Primary Colors (CSS custom properties — add to globals.css @theme)

```css
@theme {
  /* Brand */
  --color-emerald: #00C47A;
  --color-emerald-dark: #009960;
  --color-emerald-light: #D4F5E9;
  --color-emerald-ticker: #0A3D2B;

  /* Neutrals */
  --color-ink: #0D0D0D;
  --color-ink-muted: #3D3D3D;
  --color-surface: #FFFFFF;
  --color-surface-secondary: #F7F7F5;
  --color-surface-tertiary: #F0EFEB;
  --color-border: #E5E5E2;
  --color-border-strong: #C8C8C4;

  /* Text */
  --color-text-heading: #0D0D0D;
  --color-text-body: #3D3D3D;
  --color-text-muted: #888784;
  --color-text-on-dark: #FFFFFF;
  --color-text-on-emerald: #003D25;
}
```

### Usage Rules
- **Emerald (`#00C47A`):** Hero blob shapes, active nav dot, social icon fills, skill badge accents, section divider dots. Never use for body text.
- **Ink (`#0D0D0D`):** All headings, primary CTA button background, nav logo text, footer text.
- **Surface (`#FFFFFF`):** Page background, project cards, skill cards.
- **Surface secondary (`#F7F7F5`):** About section background, interests section background.
- **Emerald Ticker (`#0A3D2B`):** Marquee strip background only.
- **Never use red, orange, or blue** — the palette is intentionally monochromatic + emerald only.

---

## 3. Typography

### Font Stack
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800&display=swap');

@theme {
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
}
```

Use `next/font/google` in `layout.tsx` — do not use `@import` in production:
```ts
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700', '800'] })
```

### Type Scale

| Token | Size | Weight | Use |
|---|---|---|---|
| `display-xl` | 64px / 1.05 lh | 800 | Hero name |
| `display-lg` | 48px / 1.1 lh | 800 | Section headings |
| `display-md` | 32px / 1.2 lh | 700 | Sub-headings |
| `body-lg` | 18px / 1.7 lh | 400 | Hero subtitle, about bio |
| `body-md` | 16px / 1.7 lh | 400 | Card descriptions, body text |
| `body-sm` | 14px / 1.5 lh | 400 | Badges, captions, meta |
| `label` | 13px / 1.4 lh | 500 | Stat card labels, nav links |

### Typography Rules
- Hero name ("Alikiriza Carol") at 64px, weight 800, color `#0D0D0D`, no letter-spacing
- Section headings: 48px, weight 800 — use sparingly (one per section)
- Body copy: maximum line-length 65ch for readability
- Nav links: 14px, weight 500, uppercase tracking `0.05em`
- All text in sentence case except the marquee (title case allowed)
- No decorative fonts — Space Grotesk only throughout

---

## 4. Spacing System

```css
@theme {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
}
```

- Section vertical padding: `96px` top + bottom (`var(--space-9)`)
- Container max-width: `1200px`, padding `0 24px`
- Grid gap (project cards): `24px`
- Card internal padding: `24px`
- Component gap (icon + label): `8px`

---

## 5. Border Radius

```css
@theme {
  --radius-sm: 6px;     /* badges, tech tags */
  --radius-md: 10px;    /* skill cards, stat cards */
  --radius-lg: 16px;    /* project cards */
  --radius-xl: 24px;    /* interest cards */
  --radius-pill: 9999px; /* primary CTA button, nav active indicator */
}
```

---

## 6. Component Specifications

### Primary CTA Button — "Get In Touch"
```
Shape:     Pill (border-radius: 9999px)
Size:      px-7 py-3.5 (28px horizontal, 14px vertical)
BG:        #0D0D0D (ink)
Text:      #FFFFFF, 15px, weight 600
Icon:      Arrow-right icon, right side, 16px
Hover:     bg → #1A1A1A, slight scale(1.02)
Active:    scale(0.98)
Transition: 150ms ease
```

### Secondary Button — "Download CV"
```
Shape:     Pill
Size:      px-7 py-3.5
BG:        transparent
Border:    1.5px solid #0D0D0D
Text:      #0D0D0D, 15px, weight 500
Icon:      Download icon, right side, 16px
Hover:     bg → #F0EFEB
Active:    scale(0.98)
```

### Project Card
```
BG:        #FFFFFF
Border:    1px solid #E5E5E2
Radius:    16px
Padding:   24px
Shadow:    0 1px 3px rgba(0,0,0,0.06)
Hover:     translateY(-4px), shadow → 0 8px 24px rgba(0,0,0,0.10)
Transition: 200ms ease
```

Card structure (top to bottom):
1. Large emoji or icon (32px) — top left
2. Project name — 18px, weight 700, `#0D0D0D`
3. Description — 14px, weight 400, `#3D3D3D`, 3 lines max
4. Tech badge row — small pills `#F0EFEB` bg, `#0D0D0D` text, 12px, radius-sm
5. Link row — "View Project →" text link in `#00C47A`

### Stat Card (About section)
```
BG:        #F7F7F5
Border:    none
Radius:    10px
Padding:   20px
Number:    32px, weight 800, #0D0D0D
Label:     13px, weight 500, #888784, uppercase, tracking-wider
```

### Tech Skill Pill
```
BG:        #F0EFEB
Border:    1px solid #E5E5E2
Radius:    9999px
Padding:   8px 16px
Text:      14px, weight 500, #3D3D3D
Icon:      16px, left of text, 8px gap
```

### Interest Card
```
BG:        #FFFFFF
Border:    1px solid #E5E5E2
Radius:    24px
Padding:   28px
Icon:      28px emerald-colored icon, top
Title:     18px, weight 700, #0D0D0D
Body:      14px, #3D3D3D
```

### Nav
```
BG:             rgba(255,255,255,0.92), backdrop-blur-sm
Border-bottom:  1px solid #E5E5E2
Height:         64px
Logo text:      18px, weight 800, #0D0D0D
Links:          13px, weight 500, #3D3D3D, uppercase, tracking-wider
Active dot:     4px circle, #00C47A, before the active link
Sticky:         position sticky, top 0, z-index 50
```

### Marquee Ticker Strip
```
BG:        #0A3D2B
Height:    52px
Text:      15px, weight 500, #D4F5E9
Separator: "✦" in #00C47A
Speed:     30s infinite linear
Padding:   0 (full bleed)
```

---

## 7. Hero Section Layout

```
Layout:       Two columns — text left (55%), photo right (45%)
Photo:        Rectangular, 380×460px, border-radius 12px, object-cover
Blob shapes:  2–3 abstract SVG blobs in #00C47A, positioned absolute behind photo
              Opacity: 0.9 — they should be vibrant, not washed out
              Sizes: ~200px and ~300px organic shapes
Badge:        Small floating badge top-left of photo: "Hi everyone 👋 I'm Carol"
              White bg, 1px border, radius-full, 13px, weight 500
Social icons: Row below buttons — globe + instagram + linkedin icons, 20px,
              LinkedIn icon bg: #00C47A pill, white icon inside
Responsive:   Stack to single column on mobile, photo below text, blobs hidden
```

---

## 8. Section Structure

Each section follows this pattern:

```
[Section label — small, emerald, uppercase, 12px, weight 600, tracking-widest]
[Section heading — 48px, weight 800]
[Optional subheading — 18px, weight 400, muted]
[Content]
```

Section backgrounds alternate:
- Hero: `#FFFFFF`
- Marquee: `#0A3D2B`
- About: `#F7F7F5`
- Projects: `#FFFFFF`
- Skills: `#F7F7F5`
- Interests: `#FFFFFF`
- Contact: `#F7F7F5`

---

## 9. Animation Spec (Framer Motion)

All animations use `whileInView` with `viewport={{ once: true, margin: "-80px" }}`.

```ts
// Standard fade-up (default for most elements)
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
}

// Stagger container (for card grids)
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

// Card hover
const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
}
```

Rules:
- Animate `opacity` and `transform` only — never `height`, `width`, or `padding`
- One animation library only: Framer Motion. No GSAP, no AOS, no CSS keyframe mix
- Hero elements animate on mount (no `whileInView`) — they're always above the fold
- Keep durations under 600ms — snappy, not slow

---

## 10. Responsive Breakpoints

```css
@theme {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

| Section | Mobile (< 768px) | Desktop (≥ 1024px) |
|---|---|---|
| Hero | Single column, photo below text, blobs hidden | Two columns |
| Projects | Single column card stack | 3-column grid |
| Skills | 2-column pill grid | 4-column pill grid |
| Interests | Single column | 2×2 grid |
| Stat cards | 2-column | 4-column |
| Nav | Hamburger menu | Full horizontal links |

---

## 11. Iconography

Use **Lucide React** icons throughout:
```
pnpm add lucide-react
```

Key icons:
- `ArrowRight` — CTA buttons
- `Download` — CV button
- `Mail` — email contact
- `Phone` — phone contact
- `Copy` — copy to clipboard
- `Check` — copy success state
- `Globe`, `Instagram`, `Linkedin` — social links
- `BookOpen` — Bible Study interest
- `Heart` — Charity interest
- `Users` — Youth Apostolate interest
- `Church` — Voluntary Church Service interest

Icon sizing: 18px inline with text, 24px standalone

---

## 12. Photo Treatment

Carol's profile photo: `https://avatars.githubusercontent.com/u/285229291?s=400&u=791818c318fe668d074d5667a6a853f40095198b&v=4`

```tsx
<Image
  src="https://avatars.githubusercontent.com/u/285229291?s=400..."
  alt="Alikiriza Carol — Next.js Developer, Kampala Uganda"
  width={380}
  height={460}
  className="object-cover rounded-xl"
  priority
/>
```

Add this domain to `next.config.ts`:
```ts
images: {
  remotePatterns: [{ hostname: 'avatars.githubusercontent.com' }]
}
```

---

## 13. Projects Data Reference

```ts
// src/data/projects.ts
export const projects = [
  {
    id: 'contact-manager',
    emoji: '📇',
    title: 'Contact Manager',
    description: 'Helps business owners save, organise, and access their contacts in one place. Built for the everyday Ugandan entrepreneur.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'bible-quiz-app',
    emoji: '📖',
    title: 'Bible Quiz App',
    description: 'An interactive quiz app for kids and adults during Bible study sessions — making scripture fun and memorable.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'AI'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'choir-app',
    emoji: '🎵',
    title: 'Choir App',
    description: 'A music management app for choirs — handles praise & worship songs, order of the mass, and song scheduling.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: null,
  },
]
```

---

## 14. Contact Section Spec

```
Heading:     "Let's build something together"
Sub:         "I'm always open to new projects, collaborations, and conversations."
Email row:   Mail icon + alikirizacarol7@gmail.com + Copy button
Phone row:   Phone icon + +256 786 720 310 + Copy button + Call button
CTA button:  "Send me an email" → mailto:alikirizacarol7@gmail.com
```

Copy-to-clipboard behavior:
- On click: icon switches from `Copy` to `Check` for 2 seconds, then reverts
- No toast library needed — inline state is sufficient

---

## 15. SEO & Metadata

```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Alikiriza Carol — Next.js Developer & Creative Builder',
  description: 'I build creative, AI-powered web applications using Next.js. Based in Kampala, Uganda. Open to projects and collaborations.',
  openGraph: {
    title: 'Alikiriza Carol — Next.js Developer',
    description: 'Creative builder. Next.js developer. Based in Kampala, Uganda.',
    images: ['https://avatars.githubusercontent.com/u/285229291?s=400&...'],
    locale: 'en_UG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

---

## 16. Do Not / Anti-Patterns

- ❌ No dark mode — do not add `.dark` classes or ThemeProvider
- ❌ No blue, red, orange, or purple — emerald + black + white only
- ❌ No glassmorphism, gradient mesh, or noise textures
- ❌ No generic stock illustrations — use real photo + SVG blobs
- ❌ No slow animations over 500ms
- ❌ No "lorem ipsum" — all copy must be Carol's real content
- ❌ No multiple CTA buttons of equal weight — one primary (black pill), one secondary (ghost) only
- ❌ No `overflow-hidden` on the hero section if it clips the blobs — use `overflow: clip` or manage carefully
- ✅ Do use real project names, real emoji, real descriptions
- ✅ Do make the hero feel bold and personal, not a template
- ✅ Do write copy in Carol's voice — warm, direct, community-oriented
