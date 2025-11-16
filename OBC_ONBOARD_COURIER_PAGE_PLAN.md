# Onboard Courier (OBC) Services Page — Planning Document

## Route and File Structure
- Route: `/on-board-courier-services`
- Files:
  - `app/on-board-courier-services/page.tsx` — page entry
  - `components/obc/obc-banner.tsx` — Hero/Banner
  - `components/obc/obc-what-is.tsx` — What is OBC
  - `components/obc/obc-why-important.tsx` — Why OBC is Important
  - `components/obc/obc-why-choose.tsx` — Why Choose OBC Care
  - `components/obc/obc-industries.tsx` — Industries We Serve
  - `components/obc/obc-how-it-works.tsx` — How It Works (steps)
  - `components/obc/obc-network.tsx` — OBC Network
  - `components/obc/obc-join.tsx` — Become an On Board Courier
  - `components/obc/obc-cta.tsx` — Final CTA

Notes:
- Reuse global `components/shared/Navbar.tsx` and `components/footer.tsx`.
- Reuse form routing to `/inquiry` for CTAs.

---

## Section Breakdown (Content → Component → Design/Animation)

### 1) Banner (Hero)
- Content:
  - Title: “Onboard Courier (OBC) Service”
  - Subtitle: “From airport to doorstep — hand-carried, monitored, and delivered with care.”
  - CTAs: [Get a Free Quote] → `/inquiry`, [Talk to Our Team] → `/inquiry`
  - Optional icon: plane; no emojis in final UI
- Component: `obc-banner.tsx`
- Design:
  - Full-width, dark gradient hero with glassy content card.
  - Background image/video optional (OBC missions). Path configurable via prop.
  - Mobile: centered content, buttons full-width with gap.
- Animation:
  - Framer Motion fade+slide for headline/desc.
  - Subtle parallax on background using `useScroll` + `useTransform`.

### 2) What Is an Onboard Courier Service?
- Content: Provided “What Is OBC” paragraphs block.
- Component: `obc-what-is.tsx`
- Design:
  - Two-column (image right) on desktop; stacked on mobile.
  - Neutral background with soft grid; readable typography (Inter), headings (Poppins).
- Animation:
  - Staggered reveal; image vertical parallax (no tilt).

### 3) Why Is OBC Important?
- Content:
  - Intro lines (industries need speed)
  - Bullet list (Zero Room for Error, Immediate Availability, Continuous Control, Peace of Mind, Critical for Urgent Industries)
- Component: `obc-why-important.tsx`
- Design:
  - 2x3 card grid (desktop); 1x stack (mobile).
  - Icons from `lucide-react` (no emojis).
  - Cards: glass, border accent on hover, no color flip.
- Animation:
  - `whileInView` reveals and grid parallax.

### 4) Why Choose OBC Care?
- Content blocks:
  - Speed You Can Rely On
  - Maximum Security
  - Real-Time Updates
  - Global Coverage
  - Trained & Verified Couriers
- Component: `obc-why-choose.tsx`
- Design:
  - Vertical feature list with icons and short descriptions; optional image accent.
  - Background gradient band to separate section.
- Animation:
  - Staggered features; light parallax on accent.

### 5) Industries We Serve
- Content items:
  - Aviation & AOG
  - Automotive
  - Technology & Electronics
  - Industrial & Manufacturing
  - Documents & Confidential Items
- Component: `obc-industries.tsx`
- Design:
  - Responsive grid cards with succinct copy.
  - Subtle badges (AOG, Prototype, Secure, etc.).
- Animation:
  - Card rise-in; gentle hover lift, no color change.

### 6) How It Works (Steps)
- Steps:
  1. Inquiry & Quotation
  2. Courier Assignment
  3. Pickup & Verification
  4. In-Transit Updates
  5. Final Delivery
- Component: `obc-how-it-works.tsx`
- Design:
  - 5-step horizontal on desktop; vertical stack on mobile.
  - Numbered badges top-right of each card; connecting line (desktop only).
- Animation:
  - Staggered step cards; gentle parallax on the line.

### 7) OBC Network
- Content:
  - “With 1,200+ On Board Couriers in 70 countries…”
  - Explain proximity-based dispatch.
- Component: `obc-network.tsx`
- Design:
  - Statistic highlights; map or abstract globe accent.
- Animation:
  - Count-up effects for stats; parallax backdrop.

### 8) Become an On Board Courier (Join)
- Content:
  - Invitation to join, role benefits, mission-centric messaging.
  - CTA: “Start your journey with OBC Care today.” → `/inquiry` (or dedicated join form later).
- Component: `obc-join.tsx`
- Design:
  - Left text, right image/illustration; glass card with clean background.
- Animation:
  - Reveal and light parallax only.

### 9) Final CTA
- Content:
  - Headline: “Your Urgent Shipment, Our Immediate Priority”
  - Short reassurance paragraph
  - CTA: “Get a Free Quote Today” → `/inquiry`
- Component: `obc-cta.tsx`
- Design:
  - Premium CTA card; gradient background band; two CTA buttons on desktop, single stacked on mobile.
- Animation:
  - Stagger; subtle shine on primary button.

---

## Visual/Interaction Guidelines
- Typography: Poppins (headings/buttons), Inter (paragraphs) — already configured globally.
- Colors: Primary `#194479`, Accent `#91C73E` (consistent with brand).
- Hover: No strong color flips; focus on border/shadow/lift.
- Motion: Framer Motion throughout; mild parallax via `useScroll` + `useTransform` (no rotation).
- Accessibility: Proper heading hierarchy, aria labels on interactive elements, tab order preserved.

---

## Assets
- Banner/visuals: OBC missions, FM/LM, or NFO photos.
- Paths suggested:
  - `public/obc/banner.jpg` (or `.png`)
  - `public/obc/visual-*.jpg`
  - If you share specific assets, we’ll wire exact filenames.

---

## Routing and CTAs
- All CTAs link to `/inquiry` initially.
- Optional: “Talk to Our Team” could mailto `request@obc-care.com` or link to `/inquiry` with preselected “OBC Services” type.

---

## SEO & Metadata
- Page Title: `Onboard Courier (OBC) Service | OBC Care`
- Description: `Hand-carry logistics for urgent, high‑value shipments — priority handling, continuous supervision, and real‑time updates. Global coverage, 24/7.`
- OpenGraph: Use banner image; set canonical to `/on-board-courier-services`.

---

## Acceptance Criteria
- Page renders with all nine sections in the specified order.
- Mobile-first responsive layout (cards stack, accessible spacing, readable text).
- Animations are smooth, professional, and unobtrusive.
- All CTAs navigate correctly to `/inquiry`.
- No lint/type errors; no layout shifting or overflow on mobile.

---

## Implementation Checklist
1) Scaffold page and components (files above)
2) Implement Banner (with CTAs)
3) Implement “What is OBC” (image + text)
4) Implement “Why Important” (cards grid)
5) Implement “Why Choose OBC Care” (feature list)
6) Implement “Industries We Serve” (grid)
7) Implement “How It Works” (steps)
8) Implement “OBC Network” (stats + accent)
9) Implement “Become an OBC” (join card + CTA)
10) Implement Final CTA
11) Integrate Navbar/Footer and add route
12) QA: responsiveness, contrast, animation polish
13) SEO metadata and OpenGraph

---

## Notes / Options
- If you prefer fewer sections, we can merge “Why Important” and “Why Choose” into one comprehensive features block.
- A future enhancement could add a dedicated “Join OBC” form with screening fields.


