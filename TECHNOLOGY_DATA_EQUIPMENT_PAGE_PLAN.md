# Technology & Data Equipment Page - Planning Document

## Overview
This document outlines the structure, content, design, and implementation plan for the Technology & Data Equipment solutions page.

---

## Page Structure (8 Sections)

### 1. Banner Section
**Component:** `components/technology/technology-banner.tsx`

**Content:**
- Badge: "💻 OBC Care – Technology & Data Equipment Logistics"
- Headline: "Speed, security, and precision — delivering your high-value tech and IT equipment safely, wherever innovation happens."
- CTAs:
  - "Request Urgent Pickup" (Primary)
  - "Get a Free Quote" (Secondary)

**Design:**
- Full-screen hero section
- Background image: `/industries/technology/1.png` (to be provided)
- Dark gradient overlay for text readability
- Right-aligned text content
- Professional, tech-focused aesthetic

---

### 2. Intro Section
**Component:** `components/technology/technology-intro.tsx`

**Content:**
- Heading: "Secure and Swift Logistics for the Digital Age"
- Paragraph 1: "In today's connected world, data-driven operations can't afford downtime."
- Paragraph 2: "That's why OBC Care specializes in time-critical logistics for servers, networking devices, storage systems, and high-performance computing equipment — ensuring your technology moves fast, safe, and without compromise."
- Paragraph 3: "From IT infrastructure for data centers to field-deployed tech gear, we deliver end-to-end transport with care, security, and full traceability."

**Design:**
- Split layout: Text left, Image right
- Image: `/industries/technology/2.png` (to be provided)
- Clean, professional typography
- Consistent text sizes with other pages

---

### 3. What We Handle Section
**Component:** `components/technology/technology-what-we-handle.tsx`

**Items:**
1. Servers, Networking & Storage Devices
2. Laptops, Workstations, and High-Value IT Hardware
3. Data Backup Drives & Sensitive Digital Equipment
4. Testing, Calibration & Research Instruments
5. Confidential or Encrypted Technology Assets

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
**Component:** `components/technology/technology-how-it-works.tsx`

**Steps:**
1. **Rapid Response & Coordination** – Our 24/7 control center arranges immediate pickup and fastest routing worldwide.
2. **Secure Handling & Packaging** – ESD-safe, shock-proof, and moisture-protected packaging for sensitive electronics.
3. **Next Flight Out / Hand-Carry Service** – Urgent deliveries escorted by trained Onboard Couriers (OBCs) for maximum security.
4. **Customs & ITAR Compliance** – We manage all regulatory and documentation requirements for international tech shipments.
5. **Verified Handover** – Door-to-door delivery with proof of receipt and chain-of-custody tracking.

**Design:**
- Clean horizontal flow layout with center hub
- Top row: Steps 1, 2, 3 (3-column grid)
- Center: OBC hub circle
- Bottom row: Steps 4, 5 (2-column grid with spacers)
- Connection lines from center to steps
- Professional spacing, no overlapping

---

### 5. Why Choose Section
**Component:** `components/technology/technology-why-choose.tsx`

**Benefits:**
1. **Zero Data Compromise** – Strict confidentiality and sealed transfers for sensitive IT assets.
2. **Fast Deployment Support** – Ideal for urgent tech rollouts or equipment replacements.
3. **Real-Time Tracking** – Transparent monitoring from origin to destination.
4. **Global Reach** – Expertise across tech hubs, data centers, and R&D facilities worldwide.
5. **Specialized Couriers** – Professionals trained in handling and securing digital and high-value electronics.

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
**Component:** `components/technology/technology-mission.tsx`

**Content:**
- Heading: "Your shipment, our mission — 24/7, across the globe."
- Image: `/industries/technology/2.png` (to be provided)
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
**Component:** `components/technology/technology-cta.tsx`

**Content:**
- Heading: "Your Technology, Our Priority"
- Description: "We understand the urgency of modern tech operations."
- Sub-description: "Whether it's a server migration, prototype delivery, or data recovery mission — OBC Care delivers peace of mind with every shipment."
- Sub-headline: "Get a Free Quote Today"
- Closing text: "Let's move your technology with precision, protection, and speed."
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
- **Professionalism:** Clean, modern, tech-focused aesthetic
- **Responsiveness:** Mobile-first approach, fully responsive
- **Consistency:** Text sizes and spacing match other industry pages

---

## Asset Requirements

### Images Needed
1. `/public/industries/technology/1.png` - Banner background
2. `/public/industries/technology/2.png` - Intro and Mission section images

**Note:** If images are not provided, use placeholder paths that match the structure.

---

## Routing

**File Path:** `app/industries/technology-data-equipment/page.tsx`

**URL:** `/industries/technology-data-equipment`

---

## SEO Metadata

**File:** `app/industries/technology-data-equipment/layout.tsx`

**Metadata:**
- Title: "Technology & Data Equipment Logistics | OBC Care"
- Description: "Secure, fast logistics for servers, IT hardware, and data equipment. ESD-safe handling, ITAR compliance. 24/7 support."
- Keywords: "technology logistics, IT equipment shipping, server transport, data equipment delivery, tech hardware logistics"

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Create layout file with SEO metadata
- [ ] Create main page file structure
- [ ] Verify image paths and create placeholder if needed

### Phase 2: Components
- [ ] Implement Banner section (`technology-banner.tsx`)
- [ ] Implement Intro section (`technology-intro.tsx`)
- [ ] Implement What We Handle section (`technology-what-we-handle.tsx`) - **Clean card design**
- [ ] Implement How It Works section (`technology-how-it-works.tsx`) - **Unique layout (no overlapping)**
- [ ] Implement Why Choose section (`technology-why-choose.tsx`) - **Auto-slide carousel**
- [ ] Implement Mission Statement section (`technology-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`technology-cta.tsx`)

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

1. **Design Uniqueness:** Each section must have a unique design that differs from Electronics, Automotive, Aviation, and Industrial pages.

2. **Text Sizes:** All headings should use `text-xl sm:text-2xl md:text-3xl` to match other industry pages.

3. **Color Consistency:** Only use primary (#194479) and secondary (#91c73e) colors. No other colors.

4. **Responsive Design:** Ensure all sections work perfectly on mobile, tablet, and desktop.

5. **Professional Aesthetic:** Maintain a clean, tech-focused, professional look throughout.

---

## Component File Structure

```
components/
  technology/
    technology-banner.tsx
    technology-intro.tsx
    technology-what-we-handle.tsx
    technology-how-it-works.tsx
    technology-why-choose.tsx
    technology-mission.tsx
    technology-cta.tsx

app/
  industries/
    technology-data-equipment/
      layout.tsx
      page.tsx
```

---

**End of Planning Document**

