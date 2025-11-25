# High-Value & Confidential Documents Page - Planning Document

## Overview
This document outlines the structure, content, design, and implementation plan for the High-Value & Confidential Documents solutions page.

---

## Page Structure (8 Sections)

### 1. Banner Section
**Component:** `components/confidential/confidential-banner.tsx`

**Content:**
- Badge: "🗂️ OBC Care – High-Value & Confidential Document Delivery"
- Headline: "Discretion. Precision. Speed."
- Sub-headline: "Your sensitive documents and secure data are delivered hand-to-hand — trusted by global clients who require absolute confidentiality."
- CTAs:
  - "Request Urgent Pickup" (Primary)
  - "Get a Free Quote" (Secondary)

**Design:**
- Full-screen hero section
- Background image: `/industries/confidential/1.png` (to be provided)
- Dark gradient overlay for text readability
- Right-aligned text content
- Professional, secure, confidential aesthetic

---

### 2. Intro Section
**Component:** `components/confidential/confidential-intro.tsx`

**Content:**
- Heading: "Trusted Hand-Carry Delivery for Confidential Shipments"
- Paragraph 1: "When it comes to high-value or confidential documents, security and trust are non-negotiable."
- Paragraph 2: "OBC Care provides hand-carry courier services for time-critical, confidential, and sensitive materials — ensuring that your documents are never out of sight, never at risk, and always delivered on time."
- Paragraph 3: "From legal contracts to financial records and government papers, we protect your information with complete chain-of-custody control and real-time transparency."

**Design:**
- Split layout: Text left, Image right
- Image: `/industries/confidential/2.png` (to be provided)
- Clean, professional typography
- Consistent text sizes with other pages

---

### 3. What We Handle Section
**Component:** `components/confidential/confidential-what-we-handle.tsx`

**Items:**
1. Legal and Corporate Documents
2. Banking, Financial & Audit Files
3. Diplomatic or Government Papers
4. Intellectual Property & Trade Secrets
5. Academic, Scientific & Research Records
6. Sealed or Notarized Physical Data Media

**Design:**
- Clean 3-column grid layout (responsive)
- Simple card design with:
  - Top accent bar (color-coded)
  - Icon badge
  - Title
  - Accent line with dot
- Use primary (#194479) and secondary (#91c73e) colors only
- Professional, minimal styling

---

### 4. How It Works Section
**Component:** `components/confidential/confidential-how-it-works.tsx`

**Steps:**
1. **Immediate Response** – Upon inquiry, our operations team arranges a hand-carry courier within minutes.
2. **Verified Pickup** – Documents are personally collected and sealed for direct transit.
3. **Hand-Carry Escort** – A dedicated Onboard Courier (OBC) travels with your documents at all times — no third-party handling.
4. **Real-Time Tracking** – You receive milestone updates from pickup to delivery confirmation.
5. **Proof of Delivery** – Signed, timestamped handover confirmation ensures complete accountability.

**Design:**
- Clean horizontal flow layout with center hub
- Top row: Steps 1, 2, 3 (3-column grid)
- Center: OBC hub circle
- Bottom row: Steps 4, 5 (2-column grid with spacers)
- Connection lines from center to steps
- Professional spacing, no overlapping

---

### 5. Why Choose Section
**Component:** `components/confidential/confidential-why-choose.tsx`

**Benefits:**
1. **Absolute Discretion** – Your shipment's details remain confidential at every stage.
2. **Direct Hand-Carry Only** – No cargo holds or shared logistics — only person-to-person delivery.
3. **24/7 Availability** – Global coordination for urgent legal, financial, or diplomatic shipments.
4. **Full Chain-of-Custody** – Every handover is documented and verified.
5. **Trusted by Professionals** – Chosen by law firms, financial institutions, and corporations worldwide.

**Design:**
- Auto-slide carousel using react-slick
- Professional card layout with:
  - Number badge (left)
  - Icon (center)
  - Title and description (right)
- Dark blue gradient background
- Fade transition
- Custom styled dots
- Separate section for image card (white background)

---

### 6. Mission Statement Section
**Component:** `components/confidential/confidential-mission.tsx`

**Content:**
- Heading: "Your shipment, our mission — 24/7, across the globe."
- Image: `/industries/confidential/2.png` (to be provided)
- Split layout: Text left, Image right

**Design:**
- Clean split layout
- Professional typography
- Consistent with other pages

---

### 7. Shipment Mission Component
**Component:** `components/shipment-mission.tsx` (Shared component)

**Note:** This is a shared component used across multiple industry pages.

---

### 8. Final CTA Section
**Component:** `components/confidential/confidential-cta.tsx`

**Content:**
- Heading: "Your Confidential Delivery Partner"
- Description: "From confidential contracts to government tenders, OBC Care delivers with integrity, speed, and unmatched reliability."
- Sub-headline: "Get a Free Quote Today"
- Closing text: "Let's secure your most important documents — with the precision and privacy they deserve."
- CTA Button: "Get a Free Quote Today"

**Design:**
- Premium card with glassmorphism effect
- Dark blue gradient background
- Shine effect on button
- Professional spacing and typography

---

## Visual Guidelines

### Color Palette
- **Primary:** `#194479` (Dark Blue)
- **Secondary:** `#91c73e` (Green)
- **No other colors** - Only primary and secondary colors throughout

### Typography
- **Headings:** `text-xl sm:text-2xl md:text-3xl` (consistent with other pages)
- **Body Text:** `text-sm md:text-base`
- **Fonts:** Use existing headingFont, titleFont, paragraphFont, buttonFont

### Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl` or `max-w-6xl` as appropriate
- Card gaps: `gap-6 md:gap-8`

### Design Principles
- **Uniqueness:** Each section should have a unique design different from other industry pages
- **Professionalism:** Clean, modern, secure, confidential aesthetic
- **Responsiveness:** Mobile-first approach, fully responsive
- **Consistency:** Text sizes and spacing match other industry pages

---

## Asset Requirements

### Images Needed
1. `/public/industries/confidential/1.png` - Banner background
2. `/public/industries/confidential/2.png` - Intro and Mission section images

**Note:** If images are not provided, use placeholder paths that match the structure.

---

## Routing

**File Path:** `app/industries/high-value-confidential-documents/page.tsx`

**URL:** `/industries/high-value-confidential-documents`

---

## SEO Metadata

**File:** `app/industries/high-value-confidential-documents/layout.tsx`

**Metadata:**
- Title: "High-Value & Confidential Document Delivery | OBC Care"
- Description: "Secure hand-carry delivery for confidential documents. Legal, financial, diplomatic papers. Absolute discretion, 24/7 support."
- Keywords: "confidential document delivery, hand-carry courier, secure document shipping, legal document delivery, diplomatic courier"

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Create layout file with SEO metadata
- [ ] Create main page file structure
- [ ] Verify image paths and create placeholder if needed

### Phase 2: Components
- [ ] Implement Banner section (`confidential-banner.tsx`)
- [ ] Implement Intro section (`confidential-intro.tsx`)
- [ ] Implement What We Handle section (`confidential-what-we-handle.tsx`) - **Clean card design**
- [ ] Implement How It Works section (`confidential-how-it-works.tsx`) - **Unique layout (no overlapping)**
- [ ] Implement Why Choose section (`confidential-why-choose.tsx`) - **Auto-slide carousel**
- [ ] Implement Mission Statement section (`confidential-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`confidential-cta.tsx`)

### Phase 3: Integration
- [ ] Integrate all components in main page file
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify all images load correctly
- [ ] Test all CTA links

### Phase 4: Polish
- [ ] Review animations and interactions
- [ ] Ensure text sizes match other pages
- [ ] Verify color usage (only primary and secondary)
- [ ] Final design review for uniqueness and professionalism

---

## Notes

1. **Design Uniqueness:** Each section must have a unique design that differs from Electronics, Automotive, Aviation, Industrial, and Technology pages.

2. **Text Sizes:** All headings should use `text-xl sm:text-2xl md:text-3xl` to match other industry pages.

3. **Color Consistency:** Only use primary (#194479) and secondary (#91c73e) colors. No other colors.

4. **Responsive Design:** Ensure all sections work perfectly on mobile, tablet, and desktop.

5. **Professional Aesthetic:** Maintain a clean, secure, confidential, professional look throughout.

6. **Security Focus:** The design should emphasize security, discretion, and trust.

---

## Component File Structure

```
components/
  confidential/
    confidential-banner.tsx
    confidential-intro.tsx
    confidential-what-we-handle.tsx
    confidential-how-it-works.tsx
    confidential-why-choose.tsx
    confidential-mission.tsx
    confidential-cta.tsx

app/
  industries/
    high-value-confidential-documents/
      layout.tsx
      page.tsx
```

---

**End of Planning Document**

