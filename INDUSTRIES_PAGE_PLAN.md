# Industries Page - Planning Document

## Page Overview

- **Route**: `/industries`
- **Page File**: `app/industries/page.tsx`
- **Layout File**: `app/industries/layout.tsx`
- **Purpose**: Showcase OBC Care's industry-specific logistics solutions across various sectors requiring time-critical shipments

---

## Sections Breakdown

### 1) Banner Section

- **Content**:
  - Badge: "🏭 Industries"
  - Title: "Delivering reliability across every sector — from aircraft engines to microchips, OBC Care ensures time-critical shipments reach their destination safely and on time."
  - Tagline: "When speed meets precision, every industry moves forward."
  - CTAs: "Explore Our Industries" → `#industries`, "Get a Free Quote" → `/inquiry`
- **Component**: `industries-banner.tsx`
- **Design**:
  - Full-screen hero with background image (industrial/manufacturing theme)
  - Gradient overlay for text readability
  - Badge with factory/industry icon
  - Two CTA buttons (primary and secondary)
- **Animation**:
  - Fade-in for badge and title
  - Slide-up for tagline and buttons
  - Subtle parallax on background image

---

### 2) Intro Section

- **Content**:
  - Paragraph: "At OBC Care, we specialise in moving mission-critical shipments for industries where speed, precision and reliability are non-negotiable. Whether it's an aircraft on ground, a factory line waiting for parts, or sensitive data that can't be delayed – our global network delivers."
- **Component**: `industries-intro.tsx`
- **Design**:
  - Centered text layout with optional background pattern
  - Clean, professional typography
  - Max-width container for readability
- **Animation**:
  - Fade-in on scroll
  - Text reveal animation

---

### 3) Industries We Support Section

- **Content**:
  - Badge: "🛫 Industry We Support"
  - Industries (6):
    1. **Aviation & AOG Parts**
       - Description: "Urgent spare parts, tools, and components dispatched instantly to keep aircraft airborne and operations uninterrupted."
    2. **Automotive & Manufacturing**
       - Description: "Just-in-time deliveries of parts, moulds and tools that power production lines and prevent costly stoppages."
    3. **Electronics & Semiconductors**
       - Description: "Secure, high-priority logistics for fragile, high-value components in tech hubs and manufacturing centres."
    4. **Industrial Machinery & Engineering**
       - Description: "Heavy or specialised machinery parts transported with precision so your plant keeps running without disruption."
    5. **Technology & Data Equipment**
       - Description: "From servers to prototypes, we protect your high-value hardware with discrete, timed delivery and full visibility."
    6. **High-Value / Confidential Documents**
       - Description: "Critical contracts, prototypes and sensitive documents handled discreetly through secure hand-carry and direct delivery."
- **Component**: `industries-supported.tsx`
- **Design**:
  - Grid layout (3 columns desktop, 2 columns tablet, 1 column mobile)
  - Each industry as a card with icon, title, and description
  - Hover effects with subtle lift and border highlight
  - Industry-specific icons and color accents
  - Consider: Image cards, icon badges, or feature cards with gradients
- **Animation**:
  - Stagger animations for cards
  - Hover effects on cards
  - Icon animations on hover

---

### 4) Why Partner with OBC Care Section

- **Content**:
  - Badge: "🎯 Why Partner with OBC Care in These Industries"
  - Benefits (4):
    1. "Global presence with dedicated logistics experts in key industrial zones"
    2. "24/7 operations and immediate response for urgent scenarios"
    3. "Real-time updates and full transparency at every milestone"
    4. "Tailored solutions built for industries with zero margin for error"
- **Component**: `industries-why-partner.tsx`
- **Design**:
  - Unique layout (avoid copying previous "Why Choose" sections)
  - Consider: Feature grid with icons, split layout with image, or asymmetric cards
  - Professional, clean design
  - Each benefit with icon and description
- **Animation**:
  - Stagger animations
  - Hover effects
  - Icon animations

---

### 5) Mission Statement Section

- **Content**:
  - Tagline: "Your shipment, our mission — 24/7, across the globe."
  - Image: OBC missions, FM/LM or NFO pictures
- **Component**: `industries-mission.tsx`
- **Design**:
  - Split layout (text left, image right) or full-width image with overlay text
  - Image gallery or single hero image
  - Optional: Stats overlay on image
- **Animation**:
  - Fade-in for content
  - Image parallax or zoom effect
  - Text overlay animation

---

### 6) Shipment Mission Section

- **Component**: `components/shipment-mission.tsx` (reuse existing)
- **Design**:
  - Same as used in other pages.
- **Animation**:
  - Existing animations.

---

### 7) Final CTA Section

- **Content**:
  - Badge: "📣 Ready to talk about your industry's logistics needs?"
  - CTAs: "Get a Free Quote" → `/inquiry`, "Contact Our Industry Team" → `/inquiry`
- **Component**: `industries-cta.tsx`
- **Design**:
  - Premium CTA card; gradient background band; two CTA buttons (desktop), stacked (mobile)
- **Animation**:
  - Stagger; subtle shine on primary button.

---

## Visual & Interaction Guidelines

### Color Scheme

- Primary: `#194479` (dark blue)
- Accent: `#91c73e` (green)
- Background: White with gradient overlays
- Text: Dark gray/black on light, white on dark
- Industry-specific accent colors (optional):
  - Aviation: Blue tones
  - Automotive: Red/orange tones
  - Electronics: Purple/blue tones
  - Industrial: Gray/steel tones
  - Technology: Cyan/blue tones
  - Documents: Gold/amber tones

### Typography

- Headings: `text-xl sm:text-2xl md:text-3xl` (consistent with other pages)
- Body: Regular, readable sizes (`text-sm md:text-base`)
- CTAs: Semibold, prominent

### Images

- Banner: Industrial/manufacturing theme (`/services/industries-banner.jpeg` or similar)
- Intro: Global logistics/network image
- Industries: Industry-specific images for each sector
- Mission: OBC missions, FM/LM, or NFO operation images
- CTA: Professional logistics/industry theme

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Touch-friendly buttons and interactions
- Optimized image sizes
- Grid adapts: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)

### Animations

- Use Framer Motion for smooth animations
- `whileInView` for scroll-triggered animations
- Stagger children for sequential reveals
- Subtle hover effects on interactive elements
- Industry cards: Lift on hover with shadow increase

---

## Asset Paths

### Images

- Banner: `/services/industries-banner.jpeg` or `/services/manufacturing.jpeg`
- Intro: `/services/global-logistics.jpeg` or `/services/industry-network.jpeg`
- Industries:
  - Aviation: `/services/aviation-aog.jpeg` or `/services/aircraft-parts.jpeg`
  - Automotive: `/services/automotive-manufacturing.jpeg` or `/services/production-line.jpeg`
  - Electronics: `/services/electronics-semiconductors.jpeg` or `/services/tech-components.jpeg`
  - Industrial: `/services/industrial-machinery.jpeg` or `/services/engineering-parts.jpeg`
  - Technology: `/services/technology-data.jpeg` or `/services/servers-hardware.jpeg`
  - Documents: `/services/confidential-documents.jpeg` or `/services/secure-delivery.jpeg`
- Mission: `/services/obc-missions.jpeg` or `/services/fmlm-nfo-operations.jpeg`
- CTA: `/services/industry-logistics.jpeg` or `/services/professional-team.jpeg`

### Icons

- Use Lucide React icons:
  - Factory icon for banner
  - Plane icon for Aviation
  - Car/Wrench icon for Automotive
  - Cpu/Chip icon for Electronics
  - Cog/Gear icon for Industrial
  - Server/Computer icon for Technology
  - FileText/Shield icon for Documents
  - Globe icon for global presence
  - Clock icon for 24/7 operations
  - Radio icon for real-time updates
  - Target icon for tailored solutions
  - MessageSquare icon for CTA

---

## Routing

### File Structure

```
app/
  industries/
    page.tsx
    layout.tsx
components/
  industries/
    industries-banner.tsx
    industries-intro.tsx
    industries-supported.tsx
    industries-why-partner.tsx
    industries-mission.tsx
    industries-cta.tsx
```

---

## SEO Metadata

### layout.tsx

```typescript
export const metadata: Metadata = {
  title: "Industry-Specific Logistics Solutions | OBC Care Global Logistics",
  description:
    "Delivering reliability across every sector — from aircraft engines to microchips. OBC Care ensures time-critical shipments reach their destination safely and on time for aviation, automotive, electronics, and more.",
  openGraph: {
    title: "Industry-Specific Logistics Solutions | OBC Care",
    description:
      "Mission-critical shipments for industries where speed, precision and reliability are non-negotiable. Global network delivering 24/7.",
    // ... other OG tags
  },
  // ... canonical URL
}
```

---

## Implementation Checklist

- [ ] Create page route (`app/industries/page.tsx`)
- [ ] Create layout file with SEO metadata
- [ ] Implement Banner section (`industries-banner.tsx`)
- [ ] Implement Intro section (`industries-intro.tsx`)
- [ ] Implement Industries We Support section (`industries-supported.tsx`) - **Make it unique/fancy**
- [ ] Implement Why Partner section (`industries-why-partner.tsx`) - **Make it unique**
- [ ] Implement Mission Statement section (`industries-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`industries-cta.tsx`)
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
- Add industry-specific images for visual appeal
- Make sure all sections are fully responsive
- Industry cards should be visually distinct but cohesive
- Consider using industry-specific color accents for each card
- Ensure button texts don't break into multiple lines
- Test z-index layering for overlapping elements

---

## Content Summary

**Page Theme**: Industry-specific, mission-critical logistics
**Target Audience**: Businesses across various industries needing time-critical shipments
**Key Message**: Delivering reliability across every sector with speed, precision, and reliability
**Unique Selling Points**: Industry expertise, global presence, 24/7 operations, real-time updates, tailored solutions

---

## Industry Details

### Industry Cards Structure

Each industry card should include:
- **Icon**: Industry-specific icon from Lucide React
- **Title**: Industry name
- **Description**: Brief explanation of how OBC Care serves this industry
- **Visual**: Optional image or gradient background
- **Hover Effect**: Subtle lift, shadow increase, or border highlight

### Industry-Specific Considerations

1. **Aviation & AOG Parts**
   - Emphasis on urgency (AOG = Aircraft On Ground)
   - Speed and reliability critical
   - Icon: Plane, Wrench, or AlertCircle

2. **Automotive & Manufacturing**
   - Just-in-time delivery focus
   - Production line continuity
   - Icon: Car, Factory, or Cog

3. **Electronics & Semiconductors**
   - Fragile, high-value items
   - Security and precision
   - Icon: Cpu, Chip, or CircuitBoard

4. **Industrial Machinery & Engineering**
   - Heavy/specialized equipment
   - Precision handling
   - Icon: Cog, Wrench, or Settings

5. **Technology & Data Equipment**
   - High-value hardware
   - Discrete delivery
   - Icon: Server, Computer, or HardDrive

6. **High-Value / Confidential Documents**
   - Security and discretion
   - Secure hand-carry
   - Icon: FileText, Shield, or Lock

---

**Planning Complete** ✅

