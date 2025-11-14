# OBC Care Home Page - Development Plan

## Page Structure Overview

```
Home Page (app/page.tsx)
├── Hero Banner (Already exists)
├── Section 1: About OBC Care (Already exists - components/about-section.tsx)
├── Section 2: Key Highlights (4 boxes) - NEW
├── Section 3: Logistics Advantage (Text + Image) - NEW
├── Section 5: Urgent Delivery Support CTA - NEW
└── Footer (if exists)

Inquiry Form Page (app/inquiry/page.tsx) - NEW
└── Form with all fields
```

---

## Section 1: About OBC Care ✅ (Already Complete)

**Component:** `components/about-section.tsx`

**Content:**
- Title: "About OBC Care"
- Subtitle: "Your Global Partner in Time-Critical Logistics"
- Description paragraphs (2)
- Image on left side

**Status:** ✅ Complete with advanced animations

---

## Section 2: Key Highlights (4 Boxes) - TO BUILD

**Component:** `components/key-highlights.tsx`

**Layout:** 2x2 Grid (Desktop) / 1x4 Stack (Mobile)

**Boxes:**

1. **AOG & Spare Parts Expertise**
   - Icon: ✈️ (or Plane icon from lucide-react)
   - Title: "AOG & Spare Parts Expertise"
   - Description: "We specialize in mission-critical deliveries for grounded aircraft and essential aviation components."

2. **Complete Door-to-Door Service**
   - Icon: 🚚 (or Truck icon)
   - Title: "Complete Door-to-Door Service"
   - Description: "From pickup to handover, every stage is managed by our professional team with care and accuracy."

3. **Global Reach, Local Expertise**
   - Icon: 🌍 (or Globe icon)
   - Title: "Global Reach, Local Expertise"
   - Description: "With a worldwide network of trusted partners, we deliver seamlessly across continents and time zones."

4. **Real-Time Updates**
   - Icon: 📩 (or Bell/Notification icon)
   - Title: "Real-Time Updates"
   - Description: "Stay informed at every milestone — our OBC team keeps you updated in real time, from pick-up to final delivery."

**Design Requirements:**
- Card-based design with hover effects
- Icons with animations
- Scroll trigger animations (stagger effect)
- Responsive grid layout
- Brand colors (#194479, #91C73E)

---

## Section 3: Logistics Advantage - TO BUILD

**Component:** `components/logistics-advantage.tsx`

**Layout:** Image on one side, Text on other side (opposite of About section)

**Content:**
- Title: "Fast, Secure, and Global — Our Logistics Advantage"
- Subtitle: "Your deadlines drive us."
- Paragraph 1: "OBC Care provides end-to-end logistics solutions designed for industries that can't afford delays — aviation, automotive, and electronics."
- Paragraph 2: "We coordinate first and last mile deliveries, onboard couriers, customs clearance, and next-flight-out (NFO) arrangements to ensure every shipment arrives when it's needed most."
- Paragraph 3: "Whether it's across the city or across the world, we move faster, think smarter, and deliver with care."
- Closing: "Your shipment, our mission — 24/7, across the globe."
- Image: OBC missions, FM/LM or NFO pictures

**Design Requirements:**
- Similar to About section but reversed layout
- Advanced scroll animations
- Image with parallax effect
- Professional typography

---

## Section 5: Urgent Delivery Support CTA - TO BUILD

**Component:** `components/urgent-support-cta.tsx`

**Content:**
- Heading: "Need Urgent Delivery Support?"
- Description: "We're available 24/7 to handle your urgent shipments — anywhere in the world."
- Sub-description: "Expect a response within minutes once your inquiry is submitted."
- Buttons:
  - "Get a Free Quote" (links to /inquiry)
  - "Contact Us" (links to /inquiry)

**Design Requirements:**
- Prominent CTA section
- Two action buttons
- 24/7 badge/indicator
- Scroll animations
- Brand colors

---

## Inquiry Form Page - TO BUILD

**Route:** `app/inquiry/page.tsx`

**Component:** `components/inquiry-form.tsx`

**Form Fields:**

1. **Your Name** (Text Input - Required)
2. **Email** (Email Input - Required)
3. **Contact Number** (Tel Input - Required)
4. **Select Your Inquiry Type** (Dropdown/Select - Required)
   - Options:
     - Get a Free Quote
     - Request a Copy of an Invoice
     - Ask About Our Services
     - Partner or Vendor Inquiry
     - General Question / Other
5. **Message Box** (Textarea - Optional)

**Form Requirements:**
- Form validation
- Error handling
- Success message
- Loading states
- Responsive design
- Brand styling
- Submit button

**Form Handling:**
- Client-side validation
- Form submission (can integrate with API later)
- Success/error states

---

## Implementation Order

1. ✅ Section 1: About OBC Care (Already done)
2. ⏳ Section 2: Key Highlights (4 boxes)
3. ⏳ Section 3: Logistics Advantage
4. ⏳ Section 5: Urgent Support CTA
5. ⏳ Inquiry Form Page
6. ⏳ Integration: Add all sections to home page
7. ⏳ Routing: Link CTA buttons to inquiry page

---

## Design Guidelines

### Colors:
- Primary: #194479 (Dark Blue)
- Accent: #91C73E (Green)
- Text: Gray shades
- Background: White/Light gray

### Animations:
- Use Framer Motion for all animations
- Scroll trigger animations (whileInView)
- Stagger effects for multiple items
- Parallax effects where appropriate
- Hover effects on interactive elements

### Typography:
- Headings: Bold, large
- Body: Medium, readable
- Consistent spacing

### Responsive:
- Mobile-first approach
- Breakpoints: sm, md, lg
- Grid layouts adapt to screen size

---

## File Structure

```
components/
├── about-section.tsx ✅
├── key-highlights.tsx (NEW)
├── logistics-advantage.tsx (NEW)
├── urgent-support-cta.tsx (NEW)
└── inquiry-form.tsx (NEW)

app/
├── page.tsx (Update with all sections)
└── inquiry/
    └── page.tsx (NEW)
```

---

## Next Steps

1. Create Section 2: Key Highlights component
2. Create Section 3: Logistics Advantage component
3. Create Section 5: Urgent Support CTA component
4. Create Inquiry Form page and component
5. Integrate all sections into home page
6. Add routing and navigation
7. Test all animations and interactions
8. Final polish and optimization

