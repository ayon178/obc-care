# Automotive & Manufacturing Page - Planning Document

## Page Overview

- **Route**: `/industries/automotive-manufacturing`
- **Page File**: `app/industries/automotive-manufacturing/page.tsx`
- **Layout File**: `app/industries/automotive-manufacturing/layout.tsx`
- **Purpose**: Showcase OBC Care's specialized logistics services for automotive and manufacturing industries requiring just-in-time deliveries

---

## Sections Breakdown

### 1) Banner Section

- **Content**:
  - Badge: "🚗 OBC Care – Automotive & Manufacturing Solutions"
  - Title: "When production lines can't afford to stop, OBC Care keeps your supply chain moving — fast, precise, and globally coordinated."
  - CTAs: "Request Urgent Pickup" → `/inquiry`, "Get a Free Quote" → `/inquiry`
- **Component**: `automotive-banner.tsx`
- **Design**:
  - Full-screen hero with background image (automotive/manufacturing theme)
  - Gradient overlay for text readability
  - Badge with car icon
  - Two CTA buttons (primary and secondary)
- **Animation**:
  - Fade-in for badge and title
  - Slide-up for subtitle and buttons
  - Subtle parallax on background image

---

### 2) Intro Section

- **Content**:
  - Heading: "Driving Efficiency, Delivering Performance"
  - Paragraph 1: "In automotive and manufacturing, every delay costs time, money, and customer trust."
  - Paragraph 2: "That's why OBC Care provides time-critical logistics designed for just-in-time operations — ensuring parts, tools, and prototypes arrive exactly when and where they're needed."
  - Paragraph 3: "From factory to assembly line, or supplier to OEM, our experts handle each shipment with precision and real-time coordination, reducing downtime and keeping your production running seamlessly."
- **Component**: `automotive-intro.tsx`
- **Design**:
  - Split layout (text left, image right) or centered text with image below
  - Clean, professional typography
  - Optional: Stats overlay on image (e.g., "Zero Downtime", "24/7 Control")
- **Animation**:
  - Fade-in on scroll
  - Stagger for paragraphs

---

### 3) What We Handle Section

- **Content**:
  - Heading: "What We Handle"
  - Items (5):
    1. "✅ Automotive Spare Parts & Components"
    2. "✅ Tools, Dies, and Molds"
    3. "✅ Prototype Materials & Test Units"
    4. "✅ Assembly Line Equipment"
    5. "✅ Urgent Technical Documents"
- **Component**: `automotive-what-we-handle.tsx`
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
    1. "Rapid Assessment" - "We analyze your route, flight options, and delivery window within minutes."
    2. "Next Flight or Direct Drive" - "Your shipment moves immediately — by air or dedicated ground vehicle."
    3. "Customs & Documentation" - "We handle all import/export formalities for smooth transitions."
    4. "Real Time Updates" - "Get updated with every milestone from dispatch to delivery."
    5. "Direct Handover" - "Shipment is personally delivered to your plant or technician."
- **Component**: `automotive-how-it-works.tsx`
- **Design**:
  - Timeline-style layout (vertical line connecting steps)
  - Numbered badges for each step
  - Alternating left/right card positioning (desktop)
  - Mobile: vertical stack
  - Unique design (different from NFO and Aviation How It Works)
- **Animation**:
  - Stagger for steps
  - Line drawing animation
  - Card slide-in from alternating sides

---

### 5) Why Automotive Leaders Choose OBC Care Section

- **Content**:
  - Heading: "Why Automotive Leaders Choose OBC Care"
  - Benefits (4):
    1. "💠 Zero Downtime Commitment" - "We ensure no production halt due to logistics delay."
    2. "💠 Multi-Modal Flexibility" - "Air, road, and OBC hand-carry options for maximum speed."
    3. "💠 24/7 Control" - "Continuous global coordination and updates."
    4. "💠 Full Transparency" - "Real-time visibility and delivery confirmation."
- **Component**: `automotive-why-choose.tsx`
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
- **Component**: `automotive-mission.tsx`
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
  - Heading: "Keeping Your Production on Track"
  - Description: "In manufacturing, every minute matters — and we make sure none are lost."
  - Sub-description: "With OBC Care, your critical materials arrive on time, every time — ensuring smooth operations, reduced costs, and uninterrupted workflow."
  - Sub-headline: "📍 Get a Free Quote Today"
  - Closing: "Let's keep your lines running and your commitments on schedule."
  - CTA: "Get a Free Quote Today" → `/inquiry`
- **Component**: `automotive-cta.tsx`
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

- Banner: Automotive/manufacturing theme (`/services/automotive-banner.jpeg` or `/services/manufacturing-production.jpeg`)
- Intro: Automotive logistics/factory operations image
- What We Handle: Automotive parts/components images
- How It Works: Timeline/process visualization
- Why Choose: Automotive operations/factory handling images
- Mission: OBC missions, FM/LM, or NFO operation images
- CTA: Automotive/manufacturing operations theme

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

- Banner: `/services/automotive-banner.jpeg` or `/services/manufacturing-production.jpeg` or `/services/factory-operations.jpeg`
- Intro: `/services/automotive-logistics.jpeg` or `/services/assembly-line.jpeg`
- What We Handle: `/services/automotive-parts.jpeg` or `/services/manufacturing-components.jpeg`
- How It Works: `/services/automotive-process.jpeg` or `/services/supply-chain.jpeg`
- Why Choose: `/services/automotive-operations.jpeg` or `/services/factory-handling.jpeg`
- Mission: `/services/obc-missions.jpeg` or `/services/fmlm-nfo-operations.jpeg`
- CTA: `/services/automotive-team.jpeg` or `/services/manufacturing-logistics.jpeg`

### Icons

- Use Lucide React icons:
  - Car icon for banner
  - CheckCircle or Check icon for "What We Handle"
  - Search/Zap icon for rapid assessment
  - Plane/Truck icon for next flight or direct drive
  - FileCheck icon for customs & documentation
  - Radio icon for real-time updates
  - Truck/Factory icon for direct handover
  - Shield/CheckCircle icon for zero downtime
  - Zap icon for multi-modal flexibility
  - Clock icon for 24/7 control
  - Eye icon for full transparency
  - MessageSquare icon for CTA

---

## Routing

### File Structure

```
app/
  industries/
    automotive-manufacturing/
      page.tsx
      layout.tsx
components/
  automotive/
    automotive-banner.tsx
    automotive-intro.tsx
    automotive-what-we-handle.tsx
    automotive-how-it-works.tsx
    automotive-why-choose.tsx
    automotive-mission.tsx
    automotive-cta.tsx
```

---

## SEO Metadata

### layout.tsx

```typescript
export const metadata: Metadata = {
  title: "Automotive & Manufacturing Logistics | OBC Care Global Logistics",
  description:
    "When production lines can't afford to stop, OBC Care keeps your supply chain moving — fast, precise, and globally coordinated. Zero downtime commitment for just-in-time operations.",
  openGraph: {
    title: "Automotive & Manufacturing Logistics | OBC Care",
    description:
      "Time-critical logistics for automotive and manufacturing. Keep your production lines running with zero downtime commitment. Multi-modal flexibility and 24/7 control.",
    // ... other OG tags
  },
  // ... canonical URL
}
```

---

## Implementation Checklist

- [ ] Create page route (`app/industries/automotive-manufacturing/page.tsx`)
- [ ] Create layout file with SEO metadata
- [ ] Implement Banner section (`automotive-banner.tsx`)
- [ ] Implement Intro section (`automotive-intro.tsx`)
- [ ] Implement What We Handle section (`automotive-what-we-handle.tsx`) - **Make it unique/fancy**
- [ ] Implement How It Works section (`automotive-how-it-works.tsx`) - **Make it unique (different from NFO and Aviation)**
- [ ] Implement Why Choose section (`automotive-why-choose.tsx`) - **Make it unique**
- [ ] Implement Mission Statement section (`automotive-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`automotive-cta.tsx`)
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
- Add automotive/manufacturing-specific images for visual appeal
- Make sure all sections are fully responsive
- Emphasize just-in-time delivery and zero downtime
- Highlight multi-modal flexibility (air, road, hand-carry)
- Ensure button texts don't break into multiple lines
- Test z-index layering for overlapping elements
- Use only primary (#194479) and secondary (#91c73e) colors

---

## Content Summary

**Page Theme**: Just-in-time delivery, zero downtime, production efficiency
**Target Audience**: Automotive manufacturers, OEMs, suppliers, manufacturing facilities
**Key Message**: When production lines can't afford to stop, we keep your supply chain moving
**Unique Selling Points**: Zero downtime commitment, multi-modal flexibility, 24/7 control, full transparency

---

## Key Terminology

- **JIT**: Just-In-Time — manufacturing strategy where materials arrive exactly when needed
- **OEM**: Original Equipment Manufacturer
- **Dies and Molds**: Tools used in manufacturing for shaping materials
- **Assembly Line**: Production process where products move through stations
- **Multi-Modal**: Using multiple transportation methods (air, road, hand-carry)

---

**Planning Complete** ✅

