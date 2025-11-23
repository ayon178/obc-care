# Customs Clearance Assistance Page — Planning Document

## Route and File Structure
- Route: `/customs-clearance-assistance`
- Files:
  - `app/customs-clearance-assistance/page.tsx` — page entry
  - `components/customs/customs-banner.tsx` — Hero/Banner
  - `components/customs/customs-what-is.tsx` — What is Customs Clearance Assistance
  - `components/customs/customs-why-important.tsx` — Why Is Customs Clearance Important
  - `components/customs/customs-what-we-handle.tsx` — What We Handle (Services)
  - `components/customs/customs-process.tsx` — Our Process (Steps)
  - `components/customs/customs-why-choose.tsx` — Why Choose OBC Care for Customs Clearance
  - `components/customs/customs-network.tsx` — Customs Network
  - `components/customs/customs-join.tsx` — Become a Customs Liaison Partner
  - `components/customs/customs-cta.tsx` — Final CTA

Notes:
- Reuse global `components/shared/Navbar.tsx` and `components/footer.tsx`.
- Reuse `components/shipment-mission.tsx` component.
- Reuse form routing to `/inquiry` for CTAs.

---

## Section Breakdown (Content → Component → Design/Animation)

### 1) Banner (Hero)
- Content:
  - Badge: "🌍 Customs Clearance Assistance"
  - Title: "Fast. Compliant. Stress-free."
  - Subtitle: "We handle the paperwork so your shipment crosses borders without a hitch."
  - CTAs: [Get a Free Quote] → `/inquiry`, [Talk to Our Team] → `/inquiry`
  - Icon: globe/document icon (no emojis in final UI)
- Component: `customs-banner.tsx`
- Design:
  - Full-width, dark gradient hero with glassy content card.
  - Background image (customs/airport/border imagery). Path configurable via prop.
  - Mobile: centered content, buttons full-width with gap.
- Animation:
  - Framer Motion fade+slide for headline/desc.
  - Subtle parallax on background using `useScroll` + `useTransform`.

### 2) Intro Section
- Content:
  - Heading: "Clearing Borders, Simplifying Logistics"
  - Paragraph 1: "International trade can be complex — but with OBC Care, customs clearance becomes simple, swift, and worry-free."
  - Paragraph 2: "Our dedicated team handles all import and export requirements with precision and full compliance, ensuring your shipments move seamlessly from one country to the next without costly delays or document errors."
  - Paragraph 3: "We work directly with customs authorities and freight partners worldwide, making sure your cargo clears fast and arrives right on time."
- Component: `customs-intro.tsx` (optional, can merge with What Is section)
- Design:
  - Two-column (image right) on desktop; stacked on mobile.
  - Neutral background with soft grid; readable typography.
- Animation:
  - Staggered reveal; image vertical parallax.

### 3) What Is Customs Clearance Assistance?
- Content:
  - Heading: "💼 What Is Customs Clearance Assistance?"
  - Description: "Customs Clearance Assistance is a full-service solution that manages the legal and administrative steps required to move goods across international borders."
  - Details: "Our team prepares and files documentation, coordinates with customs authorities, and ensures shipments meet all import/export regulations so they can be released quickly and legally."
- Component: `customs-what-is.tsx`
- Design:
  - Two-column (image right) on desktop; stacked on mobile.
  - Neutral background with soft grid; readable typography.
- Animation:
  - Staggered reveal; image vertical parallax.

### 4) Why Is Customs Clearance Important?
- Content:
  - Heading: "🚨 Why Is Customs Clearance Important?"
  - Intro: "Customs clearance is critical because it:"
  - Bullet points:
    - Prevents costly delays and demurrage fees.
    - Ensures legal compliance to avoid fines or seizure.
    - Speeds up release so time-critical shipments can proceed to delivery.
    - Protects high-value and sensitive cargo through proper classification and handling.
- Component: `customs-why-important.tsx`
- Design:
  - 2x2 card grid (desktop); 1x stack (mobile).
  - Icons from `lucide-react` (no emojis).
  - Cards: glass, border accent on hover, no color flip.
- Animation:
  - `whileInView` reveals and grid parallax.

### 5) What We Handle (Services)
- Content:
  - Heading: "What We Handle"
  - Services:
    - ✅ Import & Export Declarations — Meticulous filing and documentation to avoid clearance issues.
    - ✅ Duties, Taxes & Tariff Guidance — We calculate and communicate all applicable charges upfront — no surprises.
    - ✅ Permit & License Coordination — We manage everything from commercial invoices to special import permits.
    - ✅ Airport & Border Handling — Our team coordinates with airport customs and ground handlers for swift release.
    - ✅ Special Cargo Clearance — Expert handling of restricted, high-value, or temperature-sensitive shipments.
- Component: `customs-what-we-handle.tsx`
- Design:
  - Vertical feature list with icons and short descriptions; optional image accent.
  - Background gradient band to separate section.
- Animation:
  - Staggered features; light parallax on accent.

### 6) Our Process (Steps)
- Steps:
  1. Document Verification – We pre-check all paperwork before dispatch to avoid any clearance rejection.
  2. Customs Submission – Our licensed agents handle filing, coordination, and customs communication.
  3. Real-Time Updates – Receive instant status updates every step of the way.
  4. Final Release & Delivery – Once cleared, we arrange immediate transport to your destination.
- Component: `customs-process.tsx`
- Design:
  - 4-step horizontal on desktop; vertical stack on mobile.
  - Numbered badges top-right of each card; connecting line (desktop only).
- Animation:
  - Staggered step cards; gentle parallax on the line.

### 7) Why Choose OBC Care for Customs Clearance
- Content blocks:
  - 💠 Global Expertise, Local Compliance — Our knowledge of both international and country-specific customs ensures fast and lawful clearance.
  - 💠 24/7 Monitoring & Updates — Stay informed with live progress reports and milestone updates.
  - 💠 Zero Delay Commitment — We act fast to prevent demurrage fees and storage penalties.
  - 💠 All-in-One Logistics Partner — From pickup to final handover — OBC Care manages it all with precision and transparency.
- Component: `customs-why-choose.tsx`
- Design:
  - Vertical feature list with icons and short descriptions; optional image accent.
  - Background gradient band to separate section.
- Animation:
  - Staggered features; light parallax on accent.

### 8) Customs Network
- Content:
  - Heading: "🔗 Customs Network"
  - Description: "Our customs partners and licensed agents operate across major trade lanes and key airports worldwide — ensuring fast, compliant clearance across regions."
  - Closing: "We coordinate local expertise with global oversight so your shipment doesn't stop at the border."
- Component: `customs-network.tsx`
- Design:
  - Statistic highlights; map or abstract globe accent showing regions.
- Animation:
  - Count-up effects for stats; parallax backdrop.

### 9) Become a Customs Liaison Partner (Join)
- Content:
  - Heading: "🤝 Become a Customs Liaison Partner"
  - Question: "Are you a licensed customs broker or clearance specialist?"
  - Invitation: "Join OBC Care's network to support time-critical shipments globally."
  - Benefits: "Help us deliver faster, compliant, and more reliable solutions to our clients."
  - CTAs: [Apply as a Partner] → `/inquiry`, [Contact Our Operations Team] → `/inquiry`
- Component: `customs-join.tsx`
- Design:
  - Left text, right image/illustration; glass card with clean background.
- Animation:
  - Reveal and light parallax only.

### 10) Shipment Mission Section
- Component: `components/shipment-mission.tsx` (reuse existing)
- Design:
  - Same as used in other pages.
- Animation:
  - Existing animations.

### 11) Final CTA
- Content:
  - Headline: "💬 Simplify Your Global Deliveries"
  - Description: "Avoid the hassle, save time, and stay compliant. With OBC Care, you get a customs clearance partner that works as fast as your business moves."
  - Sub-headline: "📍 Get a Free Quote Today"
  - Closing: "Let us handle your customs — you focus on what matters most."
  - CTA: "Get a Free Quote Today" → `/inquiry`
- Component: `customs-cta.tsx`
- Design:
  - Premium CTA card; gradient background band; single prominent CTA button.
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
- Banner/visuals: Customs clearance, airport, border, documentation imagery.
- Paths suggested:
  - `public/customs/banner.jpg` (or `.png`)
  - `public/customs/visual-*.jpg`
  - If you share specific assets, we'll wire exact filenames.

---

## Routing and CTAs
- All CTAs link to `/inquiry` initially.
- Optional: "Talk to Our Team" could mailto `request@obc-care.com` or link to `/inquiry` with preselected "Customs Clearance" type.
- "Contact Our Operations Team" can link to `/inquiry` or mailto.

---

## SEO & Metadata
- Page Title: `Customs Clearance Assistance | OBC Care`
- Description: `Fast, compliant customs clearance for international shipments. Expert handling of import/export documentation, duties, permits, and border coordination. 24/7 support.`
- OpenGraph: Use banner image; set canonical to `/customs-clearance-assistance`.

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
3) Implement Intro section (optional, can merge with What Is)
4) Implement "What is Customs Clearance" (image + text)
5) Implement "Why Important" (cards grid)
6) Implement "What We Handle" (feature list)
7) Implement "Our Process" (steps)
8) Implement "Why Choose OBC Care" (feature list)
9) Implement "Customs Network" (stats + accent)
10) Implement "Become a Customs Liaison Partner" (join card + CTA)
11) Add Shipment Mission component
12) Implement Final CTA
13) Integrate Navbar/Footer and add route
14) QA: responsiveness, contrast, animation polish
15) SEO metadata and OpenGraph

---

## Notes / Options
- The intro section can be merged with "What Is" section if preferred for a cleaner flow.
- A future enhancement could add a dedicated "Join as Customs Partner" form with screening fields.
- The page structure closely mirrors the OBC and FM/LM pages for consistency in user experience.
- Consider adding a "Countries We Serve" or "Ports & Airports" section if needed.

