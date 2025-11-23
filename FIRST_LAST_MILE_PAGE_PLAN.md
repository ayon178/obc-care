# First Mile / Last Mile Delivery Page — Planning Document

## Route and File Structure
- Route: `/first-last-mile-delivery`
- Files:
  - `app/first-last-mile-delivery/page.tsx` — page entry
  - `components/fmlm/fmlm-banner.tsx` — Hero/Banner
  - `components/fmlm/fmlm-what-is.tsx` — What is FM/LM Delivery
  - `components/fmlm/fmlm-why-important.tsx` — Why FM/LM is Important
  - `components/fmlm/fmlm-solutions.tsx` — Our FM/LM Delivery Solutions
  - `components/fmlm/fmlm-how-it-works.tsx` — How It Works (steps)
  - `components/fmlm/fmlm-why-choose.tsx` — Why Choose OBC Care FM/LM Solutions
  - `components/fmlm/fmlm-network.tsx` — FM/LM Network
  - `components/fmlm/fmlm-quote-cta.tsx` — Get a Free Quote CTA
  - `components/fmlm/fmlm-join.tsx` — Become a First & Last Mile Driver
  - `components/fmlm/fmlm-cta.tsx` — Final CTA

Notes:
- Reuse global `components/shared/Navbar.tsx` and `components/footer.tsx`.
- Reuse `components/shipment-mission.tsx` component.
- Reuse form routing to `/inquiry` for CTAs.

---

## Section Breakdown (Content → Component → Design/Animation)

### 1) Banner (Hero)
- Content:
  - Title: "🚚 First Mile / Last Mile Delivery"
  - Subtitle: "Bridging every mile — from pickup to delivery, with no delays."
  - CTAs: [Get a Free Quote] → `/inquiry`, [Talk to Our Team] → `/inquiry`
  - Icon: truck/vehicle icon (no emojis in final UI)
- Component: `fmlm-banner.tsx`
- Design:
  - Full-width, dark gradient hero with glassy content card.
  - Background image/video optional (FM/LM delivery missions). Path configurable via prop.
  - Mobile: centered content, buttons full-width with gap.
- Animation:
  - Framer Motion fade+slide for headline/desc.
  - Subtle parallax on background using `useScroll` + `useTransform`.

### 2) What Is First Mile / Last Mile Delivery?
- Content:
  - "Every shipment begins with a first mile and ends with a last mile — and both are critical."
  - First Mile Delivery definition: transporting goods from shipper's location to next logistics point (airport/freight forwarder).
  - Last Mile Delivery definition: final stretch from airport/customs/terminal to consignee's doorstep.
  - Closing: "At OBC Care, we ensure both ends of the journey are handled with speed, precision, and care — connecting your cargo from origin to destination seamlessly."
- Component: `fmlm-what-is.tsx`
- Design:
  - Two-column (image right) on desktop; stacked on mobile.
  - Neutral background with soft grid; readable typography (Inter), headings (Poppins).
- Animation:
  - Staggered reveal; image vertical parallax (no tilt).

### 3) Why Is First & Last Mile Delivery Important?
- Content:
  - Intro: "Even the fastest flight is only as efficient as the ground transport that supports it."
  - Context: "Delays, mishandling, or poor coordination during the first or last mile can jeopardize entire operations, especially in time-critical industries."
  - Bullet points:
    - ✅ Prevents Costly Delays — Proper timing ensures your shipment catches the next flight or reaches your client on time.
    - ✅ Ensures Shipment Integrity — Secure ground handling minimizes damage, loss, or misrouting.
    - ✅ Bridges Global Gaps — FM/LM services connect airports, warehouses, and destinations in one smooth flow.
    - ✅ Supports 24/7 Operations — Perfect for urgent AOG, automotive, or electronic shipments that can't wait.
    - ✅ Guarantees Accountability — Every handover and movement is tracked and reported.
- Component: `fmlm-why-important.tsx`
- Design:
  - 2x3 card grid (desktop); 1x stack (mobile).
  - Icons from `lucide-react` (no emojis).
  - Cards: glass, border accent on hover, no color flip.
- Animation:
  - `whileInView` reveals and grid parallax.

### 4) Our FM/LM Delivery Solutions
- Content:
  - Intro: "We understand that time is everything. That's why OBC Care's First Mile / Last Mile Delivery is designed for efficiency, visibility, and reliability — from pickup to delivery."
  - Solutions:
    - ✅ First Mile Delivery — Pickup from your facility to airport or freight partner — aligned precisely with flight schedules.
    - ✅ Last Mile Delivery — From customs or airport to consignee's door — fast, secure, and fully coordinated.
    - ✅ Express Ground Transfers — Dedicated vehicles for local or regional movements that demand urgency.
    - ✅ Direct Drive Options — Point-to-point transport — no stops, no detours, no waiting.
- Component: `fmlm-solutions.tsx`
- Design:
  - Vertical feature list with icons and short descriptions; optional image accent.
  - Background gradient band to separate section.
- Animation:
  - Staggered features; light parallax on accent.

### 5) How It Works (Steps)
- Steps:
  1. Pickup Coordination — Our operations team identifies the fastest route and dispatches a driver immediately.
  2. Live Communication — You receive updates at every stage, from pickup to delivery.
  3. Secure Transit — All vehicles are GPS-tracked, and all drivers are trained in time-critical handling.
  4. Delivery Confirmation — Instant proof of delivery is provided once your shipment arrives.
- Component: `fmlm-how-it-works.tsx`
- Design:
  - 4-step horizontal on desktop; vertical stack on mobile.
  - Numbered badges top-right of each card; connecting line (desktop only).
- Animation:
  - Staggered step cards; gentle parallax on the line.

### 6) Why Choose OBC Care FM/LM Solutions
- Content blocks:
  - 💠 24/7 Availability — Always operational, across time zones and weekends.
  - 💠 Trained, Verified Drivers — Professionals with logistics expertise and security clearance.
  - 💠 Real-Time Updates — Stay informed at every milestone — no uncertainty.
  - 💠 Global Coordination — Door-to-door, airport-to-airport, or mixed modes — we connect every link.
  - 💠 Flexible Fleet Options — From motorcycles to trucks — tailored to your shipment's size, type, and urgency.
- Component: `fmlm-why-choose.tsx`
- Design:
  - Vertical feature list with icons and short descriptions; optional image accent.
  - Background gradient band to separate section.
- Animation:
  - Staggered features; light parallax on accent.

### 7) FM/LM Network
- Content:
  - "With hundreds of professional drivers and logistics partners across Asia, Europe, and the Americas, OBC Care guarantees seamless global ground coordination."
  - "Whether it's door-to-door, airport-to-door, door-to-airport, or airport-to-airport, our FM/LM network is built to move your cargo efficiently — anytime, anywhere."
- Component: `fmlm-network.tsx`
- Design:
  - Statistic highlights; map or abstract globe accent showing regions.
- Animation:
  - Count-up effects for stats; parallax backdrop.

### 8) Get a Free Quote CTA
- Content:
  - Headline: "📞 Get a Free Quote in Just 15 Minutes!"
  - Description: "Our team is on standby 24/7 to provide a customized solution for your shipment."
  - CTAs: [Request a Quote] → `/inquiry`, [Contact Control Tower] → `/inquiry` or mailto
- Component: `fmlm-quote-cta.tsx`
- Design:
  - Premium CTA card; gradient background band; two CTA buttons on desktop, single stacked on mobile.
- Animation:
  - Stagger; subtle shine on primary button.

### 9) Shipment Mission Section
- Component: `components/shipment-mission.tsx` (reuse existing)
- Design:
  - Same as used in other pages.
- Animation:
  - Existing animations.

### 10) Become a First & Last Mile Driver (Join)
- Content:
  - Invitation: "Want to join our fast-moving logistics team?"
  - Description: "Every mile you drive makes a difference — ensuring critical shipments reach their destinations on time."
  - Benefits: "As part of OBC Care's global network, you'll be trusted with high-value and time-sensitive deliveries, backed by our 24/7 support team."
  - Call to action: "Whether you're an experienced courier or a professional driver looking to enter time-critical logistics, we're always looking for reliable partners worldwide to grow our network."
  - Closing: "🚚 Start your journey with OBC Care today — and drive the miles that matter."
  - CTAs: [Apply Now] → `/inquiry`, [Get in Touch] → `/inquiry`
- Component: `fmlm-join.tsx`
- Design:
  - Left text, right image/illustration; glass card with clean background.
- Animation:
  - Reveal and light parallax only.

### 11) Final CTA
- Content:
  - Headline: "💬 Your Shipment, Moved with Precision"
  - Description: "From the first pickup to the last handover, OBC Care ensures your shipment never loses momentum. We deliver speed, accuracy, and accountability — so your operations run smoothly without interruption."
  - Sub-headline: "📍 Get a Free Quote Today"
  - Closing: "Let's move your shipment — faster, safer, and smarter."
  - CTA: "Get a Free Quote Today" → `/inquiry`
- Component: `fmlm-cta.tsx`
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
- Banner/visuals: FM/LM delivery missions, trucks, vehicles, or logistics photos.
- Paths suggested:
  - `public/fmlm/banner.jpg` (or `.png`)
  - `public/fmlm/visual-*.jpg`
  - If you share specific assets, we'll wire exact filenames.

---

## Routing and CTAs
- All CTAs link to `/inquiry` initially.
- Optional: "Talk to Our Team" could mailto `request@obc-care.com` or link to `/inquiry` with preselected "FM/LM Services" type.
- "Contact Control Tower" can link to `/inquiry` or mailto.

---

## SEO & Metadata
- Page Title: `First Mile / Last Mile Delivery | OBC Care`
- Description: `Seamless ground transport from pickup to delivery — connecting airports, warehouses, and destinations with speed, precision, and 24/7 availability. Global FM/LM network.`
- OpenGraph: Use banner image; set canonical to `/first-last-mile-delivery`.

---

## Acceptance Criteria
- Page renders with all eleven sections in the specified order.
- Mobile-first responsive layout (cards stack, accessible spacing, readable text).
- Animations are smooth, professional, and unobtrusive.
- All CTAs navigate correctly to `/inquiry`.
- No lint/type errors; no layout shifting or overflow on mobile.
- Reuses `ShipmentMission` component consistently with other pages.

---

## Implementation Checklist
1) Scaffold page and components (files above)
2) Implement Banner (with CTAs)
3) Implement "What is FM/LM" (image + text)
4) Implement "Why Important" (cards grid)
5) Implement "Our FM/LM Solutions" (feature list)
6) Implement "How It Works" (steps)
7) Implement "Why Choose OBC Care FM/LM" (feature list)
8) Implement "FM/LM Network" (stats + accent)
9) Implement "Get a Free Quote CTA"
10) Add Shipment Mission component
11) Implement "Become a FM/LM Driver" (join card + CTA)
12) Implement Final CTA
13) Integrate Navbar/Footer and add route
14) QA: responsiveness, contrast, animation polish
15) SEO metadata and OpenGraph

---

## Notes / Options
- If you prefer fewer sections, we can merge "Why Important" and "Why Choose" into one comprehensive features block.
- A future enhancement could add a dedicated "Join FM/LM Driver" form with screening fields.
- The page structure closely mirrors the OBC page for consistency in user experience.

