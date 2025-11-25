# Electronics & Semiconductors Page - Planning Document

## Page Overview

- **Route**: `/industries/electronics-semiconductors`
- **Page File**: `app/industries/electronics-semiconductors/page.tsx`
- **Layout File**: `app/industries/electronics-semiconductors/layout.tsx`
- **Purpose**: Showcase OBC Care's specialized logistics services for electronics and semiconductor industries requiring precision handling and time-critical deliveries

---

## Sections Breakdown

### 1) Banner Section

- **Content**:
  - Badge: "⚡ OBC Care – Electronics & Semiconductor Solutions"
  - Title: "Precision, protection, and performance — delivering your sensitive components fast and safely, anywhere in the world."
  - CTAs: "Request Urgent Pickup" → `/inquiry`, "Get a Free Quote" → `/inquiry`
- **Component**: `electronics-banner.tsx`
- **Design**:
  - Full-screen hero with background image (electronics/semiconductor theme)
  - Gradient overlay for text readability
  - Badge with lightning/CPU icon
  - Two CTA buttons (primary and secondary)
- **Animation**:
  - Fade-in for badge and title
  - Slide-up for subtitle and buttons
  - Subtle parallax on background image

---

### 2) Intro Section

- **Content**:
  - Heading: "Precision Logistics for a High-Tech World"
  - Paragraph 1: "In the fast-moving world of electronics and semiconductors, even the smallest delay can disrupt entire production lines."
  - Paragraph 2: "That's why OBC Care specializes in time-critical logistics for sensitive, high-value, and temperature-controlled components — ensuring every delivery is handled with speed, security, and precision."
  - Paragraph 3: "From prototype chips to testing equipment and production wafers, our expert team coordinates every step — from pickup to customs to final delivery — with real-time updates and global compliance."
- **Component**: `electronics-intro.tsx`
- **Design**:
  - Split layout (text left, image right) or centered text with image below
  - Clean, professional typography
  - Optional: Stats overlay on image (e.g., "ESD-Safe", "24/7 Control")
- **Animation**:
  - Fade-in on scroll
  - Stagger for paragraphs

---

### 3) What We Handle Section

- **Content**:
  - Heading: "What We Handle"
  - Items (5):
    1. "✅ Semiconductor Wafers & Microchips"
    2. "✅ Circuit Boards & Electronic Modules"
    3. "✅ Prototypes & R&D Equipment"
    4. "✅ Cleanroom-Handled Components"
    5. "✅ Sensitive Data Carriers & Confidential Devices"
- **Component**: `electronics-what-we-handle.tsx`
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
    1. "Immediate Coordination" - "Our control tower identifies the fastest and safest route available."
    2. "Secure Packaging & Handling" - "Components are prepared in compliance with ESD and cleanroom standards."
    3. "Next Flight Out / Hand-Carry Option" - "Shipments are flown on the next available flight or escorted by an Onboard Courier (OBC)."
    4. "Customs & Compliance" - "All export documents, licenses, and declarations are managed seamlessly."
    5. "Direct Handover" - "Fast, safe, and verified delivery to your production or R&D facility."
- **Component**: `electronics-how-it-works.tsx`
- **Design**:
  - Timeline-style layout (vertical line connecting steps)
  - Numbered badges for each step
  - Alternating left/right card positioning (desktop)
  - Mobile: vertical stack
  - Unique design (different from NFO, Aviation, and Automotive How It Works)
- **Animation**:
  - Stagger for steps
  - Line drawing animation
  - Card slide-in from alternating sides

---

### 5) Why Technology Leaders Trust OBC Care Section

- **Content**:
  - Heading: "Why Technology Leaders Trust OBC Care"
  - Benefits (5):
    1. "💠 ESD-Safe Handling" - "Trained professionals manage sensitive materials under strict anti-static standards."
    2. "💠 Time-Critical Expertise" - "Designed for industries where every minute counts."
    3. "💠 Secure Chain of Custody" - "From pickup to delivery, your shipment remains fully traceable."
    4. "💠 24/7 Control" - "Global monitoring and real-time communication at every milestone."
    5. "💠 Regulatory Compliance" - "Full adherence to export, ITAR, and semiconductor logistics regulations."
- **Component**: `electronics-why-choose.tsx`
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
- **Component**: `electronics-mission.tsx`
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
  - Heading: "Your Innovation, Delivered Fast"
  - Description: "OBC Care empowers your production and R&D timelines with logistics precision you can count on."
  - Sub-description: "From lab to line, from prototype to production — your technology moves faster with us."
  - Sub-headline: "📍 Get a Free Quote Today"
  - Closing: "Let's move your sensitive electronics safely, securely, and right on time."
  - CTA: "Get a Free Quote Today" → `/inquiry`
- **Component**: `electronics-cta.tsx`
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

- Banner: Electronics/semiconductor theme (`/services/electronics-banner.jpeg` or `/services/semiconductor-manufacturing.jpeg`)
- Intro: Electronics logistics/cleanroom operations image
- What We Handle: Electronics components/chips images
- How It Works: Timeline/process visualization
- Why Choose: Electronics operations/cleanroom handling images
- Mission: OBC missions, FM/LM, or NFO operation images
- CTA: Electronics/technology operations theme

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

- Banner: `/services/electronics-banner.jpeg` or `/services/semiconductor-manufacturing.jpeg` or `/services/cleanroom-operations.jpeg`
- Intro: `/services/electronics-logistics.jpeg` or `/services/semiconductor-components.jpeg`
- What We Handle: `/services/electronics-parts.jpeg` or `/services/microchips-wafers.jpeg`
- How It Works: `/services/electronics-process.jpeg` or `/services/secure-handling.jpeg`
- Why Choose: `/services/electronics-operations.jpeg` or `/services/cleanroom-handling.jpeg`
- Mission: `/services/obc-missions.jpeg` or `/services/fmlm-nfo-operations.jpeg`
- CTA: `/services/electronics-team.jpeg` or `/services/technology-logistics.jpeg`

### Icons

- Use Lucide React icons:
  - Zap/Cpu icon for banner
  - CheckCircle or Check icon for "What We Handle"
  - Radio/Search icon for immediate coordination
  - Shield/Box icon for secure packaging
  - Plane/User icon for next flight/hand-carry
  - FileCheck icon for customs & compliance
  - Factory/Building icon for direct handover
  - Shield icon for ESD-safe handling
  - Zap icon for time-critical expertise
  - Lock icon for secure chain of custody
  - Clock icon for 24/7 control
  - FileText icon for regulatory compliance
  - MessageSquare icon for CTA

---

## Routing

### File Structure

```
app/
  industries/
    electronics-semiconductors/
      page.tsx
      layout.tsx
components/
  electronics/
    electronics-banner.tsx
    electronics-intro.tsx
    electronics-what-we-handle.tsx
    electronics-how-it-works.tsx
    electronics-why-choose.tsx
    electronics-mission.tsx
    electronics-cta.tsx
```

---

## SEO Metadata

### layout.tsx

```typescript
export const metadata: Metadata = {
  title: "Electronics & Semiconductors Logistics | OBC Care Global Logistics",
  description:
    "Precision, protection, and performance — delivering your sensitive components fast and safely, anywhere in the world. ESD-safe handling and time-critical expertise for electronics and semiconductors.",
  openGraph: {
    title: "Electronics & Semiconductors Logistics | OBC Care",
    description:
      "Time-critical logistics for electronics and semiconductors. ESD-safe handling, secure chain of custody, and regulatory compliance. From lab to line, prototype to production.",
    // ... other OG tags
  },
  // ... canonical URL
}
```

---

## Implementation Checklist

- [ ] Create page route (`app/industries/electronics-semiconductors/page.tsx`)
- [ ] Create layout file with SEO metadata
- [ ] Implement Banner section (`electronics-banner.tsx`)
- [ ] Implement Intro section (`electronics-intro.tsx`)
- [ ] Implement What We Handle section (`electronics-what-we-handle.tsx`) - **Make it unique/fancy**
- [ ] Implement How It Works section (`electronics-how-it-works.tsx`) - **Make it unique (different from other pages)**
- [ ] Implement Why Choose section (`electronics-why-choose.tsx`) - **Make it unique**
- [ ] Implement Mission Statement section (`electronics-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`electronics-cta.tsx`)
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
- Add electronics/semiconductor-specific images for visual appeal
- Make sure all sections are fully responsive
- Emphasize precision, security, and ESD-safe handling
- Highlight regulatory compliance (ITAR, export regulations)
- Ensure button texts don't break into multiple lines
- Test z-index layering for overlapping elements
- Use only primary (#194479) and secondary (#91c73e) colors

---

## Content Summary

**Page Theme**: Precision, security, sensitive component handling
**Target Audience**: Electronics manufacturers, semiconductor companies, R&D facilities, tech companies
**Key Message**: Precision, protection, and performance for sensitive electronics and semiconductors
**Unique Selling Points**: ESD-safe handling, time-critical expertise, secure chain of custody, 24/7 control, regulatory compliance

---

## Key Terminology

- **ESD**: Electrostatic Discharge — protection against static electricity that can damage sensitive electronics
- **Cleanroom**: Controlled environment with low levels of pollutants
- **ITAR**: International Traffic in Arms Regulations — U.S. export control regulations
- **Wafer**: Thin slice of semiconductor material used in chip manufacturing
- **Prototype**: Early sample or model of a product for testing

---

**Planning Complete** ✅

