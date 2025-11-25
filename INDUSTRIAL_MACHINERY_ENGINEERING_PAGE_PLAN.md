# Industrial Machinery & Engineering Page - Planning Document

## Overview

This document outlines the structure, content, design, and implementation plan for the Industrial Machinery & Engineering solutions page.

---

## Page Structure (8 Sections)

### 1. Banner Section

**Component:** `components/industrial/industrial-banner.tsx`

**Content:**

- Badge: "⚙️ OBC Care – Industrial Machinery & Engineering Solutions"
- Headline: "Powering productivity through precision logistics — delivering heavy-duty parts, tools, and equipment safely and on time, anywhere in the world."
- CTAs:
  - "Request Urgent Pickup" (Primary)
  - "Get a Free Quote" (Secondary)

**Design:**

- Full-screen hero section
- Background image: `/industries/industrial/banner.jpg` (to be provided)
- Dark gradient overlay for text readability
- Right-aligned text content
- Professional, industrial aesthetic

---

### 2. Intro Section

**Component:** `components/industrial/industrial-intro.tsx`

**Content:**

- Heading: "Reliable Logistics for Heavy Industries"
- Paragraph 1: "In the world of industrial manufacturing and engineering, every minute of downtime counts."
- Paragraph 2: "That's why OBC Care provides time-critical logistics for machinery, spare parts, and specialized tools — ensuring your operations stay running, no matter where you are."
- Paragraph 3: "From production lines to construction sites, our logistics experts coordinate every shipment with speed, accuracy, and full visibility — minimizing disruption and maximizing productivity."

**Design:**

- Split layout: Text left, Image right
- Image: `/industries/industrial/intro.jpg` (to be provided)
- Clean, professional typography
- Consistent text sizes with other pages

---

### 3. What We Handle Section

**Component:** `components/industrial/industrial-what-we-handle.tsx`

**Items:**

1. Heavy Machinery Parts & Equipment
2. Maintenance, Repair & Operations (MRO) Components
3. Industrial Tools & Calibration Instruments
4. Manufacturing Line Replacements
5. Oversized or Custom-Engineered Components

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

**Component:** `components/industrial/industrial-how-it-works.tsx`

**Steps:**

1. **Immediate Coordination** – Our logistics control team identifies the fastest route and optimal transport method.
2. **Specialized Packaging & Handling** – Industrial cargo is secured with vibration-resistant, moisture-proof, or custom crating as needed.
3. **Next Flight Out / Hand-Carry Option** – Urgent parts are shipped on the next available flight or escorted by an Onboard Courier (OBC).
4. **Customs & Compliance** – We handle all trade documents and ensure full compliance with import/export and safety standards.
5. **Direct Handover** – Fast and verified delivery to your plant, job site, or engineering facility.

**Design:**

- Clean horizontal flow layout with center hub
- Top row: Steps 1, 2, 3 (3-column grid)
- Center: OBC hub circle
- Bottom row: Steps 4, 5 (2-column grid with spacers)
- Connection lines from center to steps
- Professional spacing, no overlapping

---

### 5. Why Choose Section

**Component:** `components/industrial/industrial-why-choose.tsx`

**Benefits:**

1. **Zero-Delay Commitment** – We act fast to keep your production moving.
2. **Expert Handling** – Couriers trained in managing high-value industrial and engineering goods.
3. **Global Coverage** – From factory floors to construction hubs, we deliver worldwide.
4. **24/7 Tracking** – Real-time visibility at every stage of transport.
5. **Safety First** – Compliance with all handling, labeling, and safety standards.

**Design:**

- Auto-slide carousel using react-slick
- Professional card layout with:
  - Number badge (left)
  - Icon (center)
  - Title and description (right)
- Dark blue gradient background
- Fade transition
- Custom styled dots

---

### 6. Mission Statement Section

**Component:** `components/industrial/industrial-mission.tsx`

**Content:**

- Heading: "Your shipment, our mission — 24/7, across the globe."
- Image: `/industries/industrial/mission.jpg` (to be provided)
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

**Component:** `components/industrial/industrial-cta.tsx`

**Content:**

- Heading: "Keep Your Operations Running Smoothly"
- Description: "OBC Care ensures your machinery and engineering parts reach their destination — fast, safe, and ready for work."
- Sub-description: "From urgent replacements to project-critical deliveries, we deliver performance on time, every time."
- Sub-headline: "Get a Free Quote Today"
- Closing text: "Let's move your industrial parts securely and without delay."
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
- **Professionalism:** Clean, modern, corporate aesthetic
- **Responsiveness:** Mobile-first approach, fully responsive
- **Consistency:** Text sizes and spacing match other industry pages

---

## Asset Requirements

### Images Needed

1. `/public/industries/industrial/banner.jpg` - Banner background
2. `/public/industries/industrial/intro.jpg` - Intro section image
3. `/public/industries/industrial/mission.jpg` - Mission section image

**Note:** If images are not provided, use placeholder paths that match the structure.

---

## Routing

**File Path:** `app/industries/industrial-machinery-engineering/page.tsx`

**URL:** `/industries/industrial-machinery-engineering`

---

## SEO Metadata

**File:** `app/industries/industrial-machinery-engineering/layout.tsx`

**Metadata:**

- Title: "Industrial Machinery & Engineering Logistics | OBC Care"
- Description: "Time-critical logistics for heavy machinery parts, MRO components, and industrial equipment. Fast, safe delivery worldwide. 24/7 support."
- Keywords: "industrial machinery logistics, MRO parts delivery, heavy equipment shipping, engineering parts logistics"

---

## Implementation Checklist

### Phase 1: Setup

- [ ] Create layout file with SEO metadata
- [ ] Create main page file structure
- [ ] Verify image paths and create placeholder if needed

### Phase 2: Components

- [ ] Implement Banner section (`industrial-banner.tsx`)
- [ ] Implement Intro section (`industrial-intro.tsx`)
- [ ] Implement What We Handle section (`industrial-what-we-handle.tsx`) - **Clean card design**
- [ ] Implement How It Works section (`industrial-how-it-works.tsx`) - **Unique layout (no overlapping)**
- [ ] Implement Why Choose section (`industrial-why-choose.tsx`) - **Auto-slide carousel**
- [ ] Implement Mission Statement section (`industrial-mission.tsx`)
- [ ] Add Shipment Mission component
- [ ] Implement Final CTA section (`industrial-cta.tsx`)

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

1. **Design Uniqueness:** Each section must have a unique design that differs from Electronics, Automotive, and Aviation pages.

2. **Text Sizes:** All headings should use `text-xl sm:text-2xl md:text-3xl` to match other industry pages.

3. **Color Consistency:** Only use primary (#194479) and secondary (#91c73e) colors. No other colors.

4. **Responsive Design:** Ensure all sections work perfectly on mobile, tablet, and desktop.

5. **Professional Aesthetic:** Maintain a clean, corporate, professional look throughout.

---

## Component File Structure

```
components/
  industrial/
    industrial-banner.tsx
    industrial-intro.tsx
    industrial-what-we-handle.tsx
    industrial-how-it-works.tsx
    industrial-why-choose.tsx
    industrial-mission.tsx
    industrial-cta.tsx

app/
  industries/
    industrial-machinery-engineering/
      layout.tsx
      page.tsx
```

---

**End of Planning Document**
