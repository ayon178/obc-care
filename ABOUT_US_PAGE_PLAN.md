# About Us Page - Planning Document

## Overview
This document outlines the structure, content, design, and implementation plan for the About Us page.

---

## Page Structure (7 Sections)

### 1. Banner Section
**Component:** `components/about/about-banner.tsx`

**Content:**
- Headline: "🌐 ABOUT US"
- Tagline: "Driven by Passion. Defined by Precision. Delivered with Care."
- Sub-headline: "At OBC Care, we move more than shipments — we move trust, reliability, and human dedication across borders"

**Design:**
- Full-screen hero section
- Background image: `/about/banner.jpg` (to be provided or use existing)
- Dark gradient overlay for text readability
- Centered or left-aligned text content
- Professional, warm, human-centered aesthetic

---

### 2. Company Background Section
**Component:** `components/about/about-background.tsx`

**Content:**
- Heading: "🧭 Company Background"
- Paragraph 1: "OBC Care was founded in 2018 by Eugen Reimer, who began with a simple but powerful vision — to bridge the world through dependable, human-centered logistics."
- Paragraph 2: "What started as a small, passionate team determined to deliver shipments that truly matter, has now grown into a global network trusted by industries from aviation to technology."
- Quote: "Urgent logistics isn't just about speed — it's about trust, precision, and people who care." — Eugen Reimer
- Paragraph 3: "Today, OBC Care continues that legacy, ensuring every delivery reflects the same passion and reliability that started it all."

**Design:**
- Split layout: Text left, Image right (or centered text with image below)
- Quote highlighted in a special card/box
- Timeline element showing 2018 to present
- Warm, storytelling aesthetic

---

### 3. Mission & Vision Section
**Component:** `components/about/about-mission-vision.tsx`

**Content:**
- Heading: "🎯 Mission & Vision"
- **Mission:**
  - Title: "Our Mission"
  - Text: "To deliver critical shipments with care, accuracy, and heart — ensuring businesses keep moving no matter the distance or the deadline."
- **Vision:**
  - Title: "Our Vision"
  - Text: "To be the world's most trusted partner in urgent logistics — where every hand-carry, every mile, and every moment represents excellence, integrity, and human connection."

**Design:**
- Two-column layout (Mission left, Vision right)
- Icon badges for each
- Card-based design with subtle animations
- Professional yet warm aesthetic

---

### 4. Meet the Team Section
**Component:** `components/about/about-team.tsx`

**Content:**
- Heading: "👥 Meet the Team"
- Sub-heading: "Together, our team combines international expertise and local insight to move shipments — and businesses — forward."
- **Team Members:**
  1. Eugen Reimer – CEO, Founder & General Manager
  2. Tanya Reimer - Accounting Manager
  3. Alexander Reimer - Operations Manager
  4. Cristine Acosta - Project Manager
  5. Noreleen Neypes - Project Manager
  6. Renz Abad - Project Manager

**Design:**
- Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Team member cards with:
  - Photo placeholder/avatar
  - Name
  - Title/Position
  - Optional: Brief bio or quote
- Professional headshot-style cards
- Hover effects

---

### 5. Testimonials Section
**Component:** `components/about/about-testimonials.tsx`

**Content:**
- Heading: "💬 What Our Clients Say"
- **Testimonial 1:**
  - Quote: "OBC Care handled our urgent AOG shipment flawlessly — every update was real-time, and every promise was kept."
  - Author: "— Aviation, USA Client"
- **Testimonial 2:**
  - Quote: "Fast, reliable, and always professional. The peace of mind they provide is priceless."
  - Author: "— Automotive, Electronics Client"

**Design:**
- Auto-slide carousel using react-slick
- Quote cards with:
  - Quote text (large, readable)
  - Author/company attribution
  - Optional: Star ratings or icons
- Professional testimonial card design
- Alternating or carousel layout

---

### 6. Final CTA Section
**Component:** `components/about/about-cta.tsx`

**Content:**
- Heading: "📩 Ready to Experience Our Service?"
- Description: "Let's move your shipment — fast, secure, and stress-free."
- Sub-text: "Get a free quote in just 15 minutes or contact our operations team for immediate support."
- CTAs:
  - "Get a Free Quote" (Primary)
  - "Contact Us" (Secondary)

**Design:**
- Premium card with glassmorphism effect
- Dark blue gradient background
- Shine effects and animations
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
- **Uniqueness:** Each section should have a unique design
- **Professionalism:** Clean, modern, warm, human-centered aesthetic
- **Responsiveness:** Mobile-first approach, fully responsive
- **Consistency:** Text sizes and spacing match other pages
- **Human Touch:** Emphasize the personal, caring aspect of the company

---

## Asset Requirements

### Images Needed
1. `/public/about/banner.jpg` - Banner background (or use existing)
2. `/public/about/background.jpg` - Company background section image (optional)
3. `/public/about/team/` - Team member photos (optional, can use placeholders)

**Note:** If images are not provided, use placeholder paths or existing images from other sections.

---

## Routing

**File Path:** `app/about/page.tsx`

**URL:** `/about`

---

## SEO Metadata

**File:** `app/about/layout.tsx`

**Metadata:**
- Title: "About Us | OBC Care - Our Story, Mission & Team"
- Description: "Learn about OBC Care's journey since 2018. Founded by Eugen Reimer, we deliver urgent logistics with trust, precision, and care. Meet our team."
- Keywords: "about OBC Care, logistics company history, Eugen Reimer, urgent shipping team, logistics professionals"

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Create layout file with SEO metadata
- [ ] Create main page file structure
- [ ] Verify image paths and create placeholders if needed

### Phase 2: Components
- [ ] Implement Banner section (`about-banner.tsx`)
- [ ] Implement Company Background section (`about-background.tsx`) - **Unique storytelling design**
- [ ] Implement Mission & Vision section (`about-mission-vision.tsx`) - **Two-column card layout**
- [ ] Implement Meet the Team section (`about-team.tsx`) - **Grid layout with team cards**
- [ ] Implement Testimonials section (`about-testimonials.tsx`) - **Auto-slide carousel**
- [ ] Implement Final CTA section (`about-cta.tsx`)

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
- [ ] Ensure human-centered, warm aesthetic throughout

---

## Notes

1. **Design Uniqueness:** Each section must have a unique design that differs from industry pages.

2. **Text Sizes:** All headings should use `text-xl sm:text-2xl md:text-3xl` to match other pages.

3. **Color Consistency:** Only use primary (#194479) and secondary (#91c73e) colors. No other colors.

4. **Responsive Design:** Ensure all sections work perfectly on mobile, tablet, and desktop.

5. **Human Touch:** The design should emphasize the personal, caring, human-centered approach of OBC Care.

6. **Storytelling:** The Company Background section should feel like a story, with visual elements that support the narrative.

7. **Team Section:** Team member cards should be professional but approachable, reflecting the human side of the business.

---

## Component File Structure

```
components/
  about/
    about-banner.tsx
    about-background.tsx
    about-mission-vision.tsx
    about-team.tsx
    about-testimonials.tsx
    about-cta.tsx

app/
  about/
    layout.tsx
    page.tsx
```

---

## Special Design Considerations

### Company Background Section
- Consider adding a timeline element showing key milestones
- Quote from Eugen should be prominently featured
- Use warm colors and imagery to convey the human story

### Mission & Vision Section
- Use icon badges (e.g., Target icon for Mission, Eye icon for Vision)
- Side-by-side cards with equal emphasis
- Subtle animations on scroll

### Team Section
- Professional headshot-style cards
- Optional: Add hover effects that reveal more info
- Grid layout that adapts to screen size
- Consider adding a "Join Our Team" CTA at the bottom

### Testimonials Section
- Auto-slide carousel with fade transition
- Large, readable quote text
- Professional attribution styling
- Optional: Add more testimonials if available

---

**End of Planning Document**

