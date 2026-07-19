# Pearl Gro — Website

## Project
Marketing site for Pearl Gro, a Sri Lankan agri-tech greenhouse investment company.
7 pages: Home, Invest, Why Pearl Gro, Products, Education, Gallery, Contact.
Plus: 404/500 error pages, loading overlay system, Products skeleton state.
No login, no dashboard, no payments, no e-commerce. Lead capture only.

## Stack
- Next.js 15 (App Router) + React 19
- TypeScript (strict mode)
- Tailwind CSS
- GSAP + ScrollTrigger for all animation
- No component library — build from the Figma designs

## Next.js Conventions
- App Router only. Routes in src/app/[route]/page.tsx
- Shared layout (Nav + Footer) in src/app/layout.tsx — build once, never duplicate per page
- Default to Server Components. Add "use client" ONLY for: GSAP animations, form state, scroll listeners, useState/useEffect
- Keep "use client" as low in the tree as possible — isolate interactivity into small leaf components, never mark a whole page
- next/image for every image — never raw <img>
- next/font for Space Grotesk, Inter, JetBrains Mono — never Google Fonts <link> tags
- next/link for internal navigation — never raw <a>
- loading.tsx for route loading states, not-found.tsx for 404, error.tsx for the error boundary
- Follow current Next.js documentation. If unsure about an API, check the docs rather than guessing — do not use deprecated patterns.

## GSAP Rules
- Use @gsap/react's useGSAP hook — never raw useEffect for GSAP
- Register plugins once: gsap.registerPlugin(ScrollTrigger)
- Always scope animations with the useGSAP contextSafe/scope option so they clean up on unmount
- Kill ScrollTrigger instances on cleanup — route changes must not leak triggers
- Respect prefers-reduced-motion: disable or reduce animation when set
- Animate transform and opacity only. Never animate layout properties (width, height, top, left)

## TypeScript Rules
- Strict mode on. No `any` — use `unknown` and narrow it
- Explicit prop types for every component via interface
- No non-null assertions (!) unless justified with a comment
- Shared types in src/types/

## Design System (NON-NEGOTIABLE — these values are final)
Colors (synced from the Figma variables — Figma is the source of truth):
- bg-deep:        #0A1410  (deep charcoal-green page background)
- bg-black:       #070B09  (near-black — footer)
- accent:         #BAE320  (lime — primary accent; Figma "Background")
- accent-hover:   #97C41B  (Figma "hover")
- accent-ink:     #1B4708  (dark green text on accent surfaces; Figma "text")
- glow:           #2FE58C  (emerald — soft glows and hairline borders only)
- gold:           #E8C46B  (investment moments ONLY — see rule below)
- text:           #F2F5F3  (off-white headlines)
- muted:          #8FA69A  (sage-grey body)
- light-bg:       #F6F5F0  (warm off-white light sections)
- focus-soft:     #DFE7D9  (Figma "Colorfocus")
- green ramp:     green-1 #51830F, green-2 #71A211, green-4 #286005, green-disabled #74906F, green-off #D2E492

Typography:
- Headlines: Space Grotesk, tight letter-spacing, 56-88px section headlines
- Body: Inter, 16-18px
- Numbers/labels/eyebrows: JetBrains Mono

Rules:
- GOLD RULE: #E8C46B appears ONLY on investment moments — the LKR 60M stat card, Business Plan button, Invest form submit, investor CTA card, Why page closing CTA. Never anywhere else. Education, Gallery, Contact, and error pages use NO gold.
- Cards: 16-20px radius. Sections: 120-160px vertical rhythm. 12-column grid.
- Nav and footer are identical on every page — they live in layout.tsx
- Hover on cards: 8px lift + soft emerald glow
- Loading motif is the thin-line sprout mark. Never spinners
- Skeleton placeholders derive from their section background — NEVER grey
- All values come from the Figma file. Never improvise spacing, sizing, or color.

## Page Structure Consistency
Every page follows the identical structure:
- src/app/[route]/page.tsx — the page (Server Component by default)
- Sections composed from shared components in src/components/
- Page-specific sections in src/components/sections/[page-name]/
- Same section rhythm, container widths, and heading hierarchy across all pages
Do not invent a different structural pattern for any single page.

## Component Discipline
- Do NOT create components that are used only once — inline them in the page
- Extract a shared component only when it appears on 2+ pages, or 3+ times on one page
- Shared components: Nav, Footer, Button, Card, GlassCard, StatCard, SectionHeading, Container
- No wrapper components that only pass props through
- No premature abstraction — build it concretely first, extract when repetition is real
- Before creating any new component, check src/components/ for an existing one that fits

## Responsive Requirements
- Mobile-first. Figma is 1440px desktop — you derive tablet and mobile
- Breakpoints: 360px, 768px, 1024px, 1440px, 1920px
- Touch targets minimum 44x44px
- Test every page at all breakpoints before calling it done
- No horizontal scroll at any width
- Fluid typography using clamp() for headlines
- Must work in current Chrome, Safari, Firefox, and Edge — including iOS Safari
- Prefix experimental CSS or avoid it entirely

## Security
- Never commit secrets. Environment variables only, .env.local gitignored
- No secrets in client bundles — server-only values must never reach a Client Component
- Validate and sanitize all form input on both client and server
- Form submissions go through a Next.js Route Handler or Server Action, never a raw client fetch to a third party with keys attached
- Rate-limit the contact and lead forms
- Set security headers in next.config: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- No dangerouslySetInnerHTML unless sanitized and justified
- Run a VibeSec audit before any deploy

## Engineering Standards
- Accessibility: semantic HTML, alt text on every image, keyboard navigable, visible focus states, WCAG AA contrast
- SEO: unique metadata per page via the Metadata API, Open Graph tags, semantic heading hierarchy (one h1 per page)
- Performance: optimize images, lazy-load below the fold, target Lighthouse 90+ on all four scores
- Handle loading, error, and empty states — never assume the happy path
- Descriptive naming. No abbreviations, no single-letter variables outside loop indices
- Small focused components. If a file exceeds ~200 lines, it is doing too much
- No dead code, no commented-out blocks, no unused imports
- Run `npm run build` and `npm run lint` before declaring any task complete — both must pass clean

## Content Rules
- Never invent statistics, yields, ROI figures, or percentages. If a number isn't in the Figma design or given by me, use the designed placeholder state instead.
- Real figures in use: 42.5 acres total, 10 acres Phase 1, 10 investor slots, LKR 60,000,000 entry, Phases 2-4 at LKR 80M/100M/120M, 1 acre solar, 5 crops (Scotch Bonnet, Brinjal, Tomato, Capsicum, Salad Cucumber)

## Working Agreement
- Build ONE page or ONE section per task. Never "build the whole site"
- Match the Figma frame exactly — spacing, sizes, colors. Do not improvise layout
- Run the dev server and verify visually before telling me a task is done
- Ask before adding any npm dependency
- If a requirement is ambiguous, ask rather than assume
- State clearly when something is incomplete — never claim done when it isn't

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — lint check
