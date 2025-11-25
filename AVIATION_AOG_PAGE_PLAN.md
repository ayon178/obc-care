# Aviation & AOG Parts Page - Planning Document

## Page Overview

- **Route**: `/industries/aviation-aog-parts`
- **Page File**: `app/industries/aviation-aog-parts/page.tsx`
- **Layout File**: `app/industries/aviation-aog-parts/layout.tsx`
- **Purpose**: Showcase OBC Care's specialized AOG (Aircraft on Ground) logistics services for critical aviation parts and materials

---

## Sections Breakdown

### 1) Banner Section

- **Content**:
  - Badge: "✈️ OBC Care – Aviation & AOG Logistics"
  - Title: "When an aircraft is grounded, every second counts."
  - Subtitle: "OBC Care delivers critical AOG (Aircraft on Ground) parts and aviation materials — fast, secure, and globally coordinated."
  - CTAs: "Request Immediate Support" → `/inquiry`, "Get a Free Quote" → `/inquiry`
- **Component**: `aviation-banner.tsx`
- **Design**:
  - Full-screen hero with background image (aviation/aircraft theme)
  - Gradient overlay for text readability
  - Badge with plane icon
  - Two CTA buttons (primary and secondary)
- **Animation**:
  - Fade-in for badge and title
  - Slide-up for subtitle and buttons
  - Subtle parallax on background image

---

### 2) Intro Section

- **Content**:
  - Heading: "Keeping Aircraft in Motion, One Delivery at a Time"
  - Paragraph 1: "An AOG situation can cost thousands per hour — but with OBC Care, downtime is minimized."
  - Paragraph 2: "Our dedicated aviation logistics team specializes in rapid response shipments, ensuring your critical components, spare parts, or documents reach their destination on the very next flight out."
  - Paragraph 3: "We understand the aviation industry's precision demands — from customs clearance to airside access — and deliver your parts safely, efficiently, and without delay."
- **Component**: `aviation-intro.tsx`
- **Design**:
  - Split layout (text left, image right) or centered text with image below
  - Clean, professional typography
  - Optional: Stats overlay on image (e.g., "24/7 AOG Desk", "Next Flight Priority")
- **Animation**:
  - Fade-in on scroll
  - Stagger for paragraphs

---

### 3) What We Handle Section

- **Content**:
  - Heading: "What We Handle"
  - Items (5):
    1. "✅ AOG Parts & Tools"
    2. "✅ Engine Components & Avionics"
    3. "✅ Aircraft Documents & Certificates"
    4. "✅ Maintenance, Repair & Overhaul (MRO) Supplies"
    5. "✅ Ground Support Equipment & Accessories"
- **Component**: `aviation-what-we-handle.tsx`
- **Design**:
  - Grid layout (2-3 columns desktop, 1 column mobile)
  - Each item as a card with checkmark icon
  - Clean, professional design
  - Consider: Icon cards, feature list with checkmarks, or grid with images
- **Animation**:
  - Stagger animations for items
  - Hover effects on cards
  - Icon animations

---

### 4) How It Works Section

- **Content**:
  - Heading: "How It Works"
  - Steps (5):
    1. "Immediate Response" - "Once we receive your AOG alert, our operations team mobilizes within minutes."
    2. "Next Flight Booking" - "Your shipment is prioritized on the fastest available route."
    3. "Customs & Airport Coordination" - "We handle all airport and customs procedures for quick clearance."
    4. "In-Transit Monitoring" - "Receive real-time updates from pickup to delivery."
    5. "Final Handover" - "Shipment is personally delivered to your hangar, technician, or operations team."
- **Component**: `aviation-how-it-works.tsx`
- **Design**:
  - Timeline-style layout (vertical line connecting steps)
  - Numbered badges for each step
  - Alternating left/right card positioning (desktop)
  - Mobile: vertical stack
  - Unique design (different from NFO How It Works)
- **Animation**:
  - Stagger for steps
  - Line drawing animation
  - Card slide-in from alternating sides

---

### 5) Why Aviation Leaders Choose OBC Care Section

- **Content**:
  - Heading: "Why Aviation Leaders Choose OBC Care"
  - Benefits (5):
    1. "💠 24/7 AOG Desk" - "Always on call for critical aviation emergencies."
    2. "💠 Next Flight & Onboard Options" - "We choose the fastest route available — NFO or hand-carry."
    3. "💠 Airline-Approved Couriers" - "Our team is trained in handling aviation cargo and airside operations."
    4. "💠 Full Compliance & Documentation" - "We ensure all airway bills, certificates, and customs papers are correct and ready."
    5. "💠 End-to-End Visibility" - "Track every movement with real-time communication."
- **Component**: `aviation-why-choose.tsx`
- **Design**:
  - Unique layout (avoid copying previous "Why Choose" sections)
  - Consider: Grid with image cards, feature list with icons, or asymmetric layout
  - Professional, clean design
  - Each benefit with icon and description
- **Animation**:
  - Stagger animations
  - Hover effects
  - Icon animations

---

### 6) Mission Statement Section

- **Content**:
  - Tagline: "Your shipment, our mission — 24/7, across the globe."
  - Image: OBC missions, FM/LM or NFO pictures
- **Component**: `aviation-mission.tsx`
- **Design**:
  - Split layout (text left, image right) or full-width image with overlay text
  - Image gallery or single hero image
  - Optional: Stats overlay on image
- **Animation**:
  - Fade-in for content
  - Image parallax or zoom effect
  - Text overlay animation

---

### 7) Shipment Mission Section

- **Component**: `components/shipment-mission.tsx` (reuse existing)
- **Design**:
  - Same as used in other pages.
- **Animation**:
  - Existing animations.

---

### 8) Final CTA Section

- **Content**:
  - Heading: "Your AOG, Our Priority"
  - Description: "When your aircraft can't move, we do — across borders, airports, and time zones."
  - Sub-description: "With OBC Care, your operations stay airborne, your schedule intact, and your confidence secure."
  - Sub-headline: "📍 Get a Free Quote Today"
  - Closing: "Let's get your aircraft back in the sky — fast, safe, and without compromise."
  - CTA: "Get a Free Quote Today" → `/inquiry`
- **Component**: `aviation-cta.tsx`
- **Design**:
  - Premium CTA card; gradient background band; single prominent CTA button.
- **Animation**:
  - Stagger; subtle shine on primary button.

---

## Visual & Interaction Guidelines

### Color Scheme

- Primary: `#194479` (dark blue)
- Accent: `#91c73e` (green)
- Background: White with gradient overlays
- Text: Dark gray/black on light, white on dark

### Typography

- Headings: `text-xl sm:text-2xl md:text-3xl` (consistent with other pages)
- Body: Regular, readable sizes (`text-sm md:text-base`)
- CTAs: Semibold, prominent

### Images

- Banner: Aviation/aircraft theme (`/services/aviation-banner.jpeg` or `/services/aircraft-aog.jpeg`)
- Intro: Aviation logistics/airport operations image
- What We Handle: Aviation parts/components images
- How It Works: Timeline/process visualization
- Why Choose: Aviation operations/airport handling images
- Mission: OBC missions, FM/LM, or NFO operation images
- CTA: Aviation/airport operations theme

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Touch-friendly buttons and interactions
- Optimized image sizes

### Animations

- Use Framer Motion for smooth animations
- `whileInView` for scroll-triggered animations
- Stagger children for sequential reveals
- Subtle hover effects on interactive elements

---

## Asset Paths

### Images

- Banner: `/services/aviation-banner.jpeg` or `/services/aircraft-aog.jpeg` or `/services/airport-operations.jpeg`
- Intro: `/services/aviation-logistics.jpeg` or `/services/aircraft-parts.jpeg`
- What We Handle: `/services/aog-parts.jpeg` or `/services/aviation-components.jpeg`
- How It Works: `/services/aviation-process.jpeg` or `/services/airport-handling.jpeg`
- Why Choose: `/services/aviation-operations.jpeg` or `/services/airside-operations.jpeg`
- Mission: `/services/obc-missions.jpeg` or `/services/fmlm-nfo-operations.jpeg`
- CTA: `/services/aviation-team.jpeg` or `/services/airport-logistics.jpeg`

### Icons

- Use Lucide React icons:
  - Plane icon for banner
  - CheckCircle or Check icon for "What We Handle"
  - Clock icon for immediate response
  - Plane icon for next flight booking
  - FileCheck icon for customs coordination
  - Radio icon for monitoring
  - Truck/Plane icon for handover
  - Phone icon for 24/7 AOG Desk
  - Zap icon for next flight options
  - Shield icon for approved couriers
  - FileText icon for compliance
  - Eye icon for visibility
  - MessageSquare icon for CTA

---

## Routing

### File Structure

```
app/
  industries/
    aviation-aog-parts/
      page.tsx
      layout.tsx
components/
  aviation/
    aviation-banner.tsx
    aviation-intro.tsx
    aviation-what-we-handle.tsx
    aviation-how-it-works.tsx
    aviation-why-choose.tsx
    aviation-mission.tsx
    aviation-cta.tsx
```

---

## SEO Metadata

### layout.tsx

```typescript
export const metadata: Metadata = {
  title: "Aviation & AOG Parts Logistics | OBC Care Global Logistics",
  description:
    "When an aircraft is grounded, every second counts. OBC Care delivers critical AOG parts and aviation materials — fast, secure, and globally coordinated. 24/7 AOG desk available.",
  openGraph: {
    title: "Aviation & AOG Parts Logistics | OBC Care",
    description:
      "Rapid response AOG logistics. Get your aircraft back in the sky — fast, safe, and without compromise. Next flight booking and 24/7 support.",
    // ... other OG tags
  },
  // ... canonical URL
}
```

---

## Implementation Checklist

- [ ] Create page route (`app/industries/aviation-aog-parts/page.tsx`)
- [ ] Create layout file with SEO metadata
- [ ] Implement Banner section (`aviation-banner.tsx`)
- [ ] Implement Intro section (`aviation-intro.tsx`)
- [ ] Implement What We Handle section (`aviation-what-we-handle.tsx`) - **Make it unique/fancy**
- [ ] Implement How It Works section (`aviation-how-it-works.tsx`) - **Make it unique (different from NFO)**
- [ ] Implement Why Choose section (`aviation-why-choose.tsx`) - **Make it unique**
- [ ] Implement Mission Statement section (`aviation-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`aviation-cta.tsx`)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify all images load correctly
- [ ] Test all CTA links
- [ ] Review animations and interactions
- [ ] Final design review for uniqueness and professionalism

---

## Notes

- Ensure each section has a unique design to avoid repetition
- Follow text sizes from other pages for consistency (`text-xl sm:text-2xl md:text-3xl` for headings)
- Use professional, clean designs
- Add aviation-specific images for visual appeal
- Make sure all sections are fully responsive
- Emphasize urgency and speed (AOG = critical situation)
- Highlight 24/7 availability and rapid response
- Ensure button texts don't break into multiple lines
- Test z-index layering for overlapping elements
- Use only primary (#194479) and secondary (#91c73e) colors

---

## Content Summary

**Page Theme**: Urgency, speed, critical aviation logistics
**Target Audience**: Aviation companies, airlines, MRO facilities, aircraft operators
**Key Message**: When an aircraft is grounded, every second counts — we deliver AOG parts fast and secure
**Unique Selling Points**: 24/7 AOG desk, next flight booking, airline-approved couriers, full compliance, end-to-end visibility

---

## Key Terminology

- **AOG**: Aircraft on Ground — when an aircraft is grounded and cannot operate
- **MRO**: Maintenance, Repair & Overhaul
- **Avionics**: Electronic systems used in aircraft
- **Airside**: The secure area of an airport beyond security checkpoints
- **Airway Bill**: Document used for air freight shipments

---

**Planning Complete** ✅

