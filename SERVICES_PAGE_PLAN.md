# OBC Care Services Page - Development Plan

## Page Structure Overview

```
Services Page (app/services/page.tsx)
├── Navbar (Already exists)
├── Banner Section - NEW
├── Section 1: Our Core Services (4 services) - NEW
├── Section 2: How We Operate (5-step process) - NEW
├── Section 3: Flexible Delivery Options (4 options) - NEW
├── Section 4: How We Move Your Shipments - NEW
├── Section 5: CTA Section - NEW
└── Footer (Already exists)
```

---

## Banner Section - TO BUILD

**Component:** `components/services-banner.tsx` or inline in page

**Content:**
- Icon: 🚚
- Title: "OBC Care – Services"
- Description: "Delivering precision-driven logistics for time-critical shipments across the globe — from AOG and automotive parts to electronics and industrial components."
- Tagline: "Fast. Secure. Reliable. Always on time."

**Design Requirements:**
- Hero banner style
- Background image or gradient
- Professional typography
- Scroll animations
- Brand colors

---

## Section 1: Our Core Services - TO BUILD

**Component:** `components/core-services.tsx`

**Layout:** 2x2 Grid (Desktop) / 1x4 Stack (Mobile)

**Services (with ✅ checkmark):**

1. **First Mile / Last Mile (FM/LM) Delivery**
   - Description: "Seamless pickup and delivery from origin to final destination."

2. **Onboard Courier (OBC) Service**
   - Description: "When every second counts, our professional couriers personally escort your shipment on the next available flight."

3. **Customs Clearance Assistance**
   - Description: "We simplify the complex. Our experts handle every detail of international customs coordination."

4. **Next Flight Out (NFO) Solutions**
   - Description: "When speed is everything, NFO ensures your shipment takes off on the next available flight."

**Intro Text:**
- "At OBC Care, we understand that downtime costs money. That's why we provide priority logistics solutions tailored for industries that demand speed, security, and global reach."
- "Our expertise ensures that every shipment — big or small — arrives safely, swiftly, and seamlessly."

**Design Requirements:**
- Card-based design
- Checkmark icons (✅)
- Icons for each service
- Parallax scroll animations
- Hover effects
- Professional styling

---

## Section 2: How We Operate (5-Step Process) - TO BUILD

**Component:** `components/operating-process.tsx`

**Layout:** Vertical timeline or horizontal steps

**Steps:**

1. **Request & Assessment**
   - "Submit your shipment details — our operations team will evaluate the fastest route and provide a quote within 15 minutes."

2. **Booking & Documentation**
   - "We prepare all required paperwork and coordinate with carriers, airports, and customs to prevent delays."

3. **Collection & Handover**
   - "A trained courier picks up your shipment and prepares it for departure."

4. **Real-Time Updates**
   - "From pickup to delivery, we send live status updates at every milestone."

5. **Final Delivery Confirmation**
   - "Once your shipment arrives, you'll receive instant proof of delivery — safely and on time."

**Intro Text:**
- "At OBC Care, every minute matters. That's why our process is designed to be efficient, transparent, and fully customized for your shipment's urgency, route, and industry."
- "Here's how we make it happen:"

**Design Requirements:**
- Timeline/step design
- Numbered steps (1️⃣, 2️⃣, etc.)
- Icons for each step
- Scroll animations
- Progress indicator
- Professional layout

---

## Section 3: Flexible Delivery Options - TO BUILD

**Component:** `components/delivery-options.tsx`

**Layout:** 2x2 Grid or 1x4 Stack

**Options:**

1. **🚪 Door-to-Door**
   - "Complete pickup and delivery from sender to receiver — full convenience, zero hassle."

2. **🛫 Airport-to-Airport**
   - "Ideal for international freight — we coordinate from origin to destination airports efficiently."

3. **🚪➡️🛫 Door-to-Airport**
   - "Perfect for shippers sending goods abroad — we handle local pickup, packaging, and airline dispatch."

4. **🛬➡️🚪 Airport-to-Door**
   - "We take over once your shipment lands — handling customs and fast last-mile delivery to your receiver."

**Intro Text:**
- "We tailor each transport solution to fit your operation's needs — whether it's time-critical, sensitive, or high-value cargo."

**Design Requirements:**
- Card design with icons
- Visual flow indicators (arrows)
- Hover effects
- Parallax animations
- Professional styling

---

## Section 4: How We Move Your Shipments - TO BUILD

**Component:** `components/shipment-methods.tsx`

**Layout:** Image + Text (similar to About section)

**Content:**

**✈️ Air Transport (Onboard & Cargo Flights)**
- "Our couriers travel with or coordinate your shipment via the fastest route available, ensuring priority handling and zero delays."

**🚚 Ground Transport**
- "For short or regional routes, we provide direct, door-to-door ground delivery with GPS tracking and standby drivers for continuous movement."

**🔒 Tracking & Security Measures**
- "Your shipment's safety is our top priority."
  - End-to-end monitoring with real-time updates
  - Secure handling and custody at every transfer point
  - Verified couriers and partner checks for full accountability

**Closing:**
- "Your shipment, our mission — 24/7, across the globe."

**Image:**
- OBC missions, FM/LM or NFO pictures

**Design Requirements:**
- Image on one side, text on other
- Parallax effects
- Professional layout
- Security features highlighted

---

## Section 5: CTA Section - TO BUILD

**Component:** `components/services-cta.tsx`

**Content:**
- Heading: "💬 Need a Time-Critical Delivery?"
- Description: "Whether it's an urgent aircraft part or a last-minute production component, we've got you covered."
- CTA: "👉 Get a Free Quote today and experience logistics made simple, smart, and swift."
- Button: "Get a Free Quote" (links to /inquiry)

**Design Requirements:**
- Prominent CTA
- Professional styling
- Scroll animations
- Brand colors

---

## Implementation Order

1. ⏳ Create Services Page (`app/services/page.tsx`)
2. ⏳ Banner Section
3. ⏳ Section 1: Core Services
4. ⏳ Section 2: Operating Process
5. ⏳ Section 3: Delivery Options
6. ⏳ Section 4: Shipment Methods
7. ⏳ Section 5: CTA Section
8. ⏳ Integration: Add all sections to page
9. ⏳ Add parallax animations
10. ⏳ Final polish

---

## Design Guidelines

### Colors:
- Primary: #194479 (Dark Blue)
- Accent: #91C73E (Green)
- Text: Gray shades
- Background: White/Light gray gradients

### Animations:
- Use Framer Motion for all animations
- Scroll trigger animations (whileInView)
- Parallax effects where appropriate
- Stagger effects for multiple items
- Hover effects on interactive elements

### Typography:
- Headings: Bold, large
- Body: Medium, readable
- Consistent spacing
- Professional hierarchy

### Icons:
- Use lucide-react icons
- Emoji icons where specified (🚚, ✅, 1️⃣, etc.)
- Consistent icon styling

### Responsive:
- Mobile-first approach
- Breakpoints: sm, md, lg
- Grid layouts adapt to screen size
- Proper spacing on all devices

---

## File Structure

```
components/
├── services-banner.tsx (NEW)
├── core-services.tsx (NEW)
├── operating-process.tsx (NEW)
├── delivery-options.tsx (NEW)
├── shipment-methods.tsx (NEW)
└── services-cta.tsx (NEW)

app/
└── services/
    └── page.tsx (NEW)
```

---

## Section Details

### Banner Section:
- Hero-style banner
- Background with gradient or image
- Large title and description
- Tagline
- Scroll animations

### Section 1: Core Services:
- 4 service cards
- Checkmark indicators
- Icons for each service
- Grid layout
- Parallax effects

### Section 2: Operating Process:
- 5-step process
- Timeline or step design
- Numbered indicators
- Icons
- Progress visualization

### Section 3: Delivery Options:
- 4 delivery option cards
- Icon indicators
- Flow arrows (visual)
- Grid layout
- Hover effects

### Section 4: Shipment Methods:
- Image + Text layout
- 3 methods (Air, Ground, Security)
- Image with parallax
- Feature list
- Professional styling

### Section 5: CTA:
- Call-to-action section
- Quote button
- Professional messaging
- Link to inquiry page

---

## Next Steps

1. Create Services Page route
2. Build Banner Section
3. Build Section 1: Core Services
4. Build Section 2: Operating Process
5. Build Section 3: Delivery Options
6. Build Section 4: Shipment Methods
7. Build Section 5: CTA
8. Integrate all sections
9. Add parallax animations
10. Test and polish

