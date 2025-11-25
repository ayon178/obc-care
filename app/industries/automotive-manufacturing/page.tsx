"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import AutomotiveBanner from "@/components/automotive/automotive-banner"
import AutomotiveIntro from "@/components/automotive/automotive-intro"
import AutomotiveWhatWeHandle from "@/components/automotive/automotive-what-we-handle"
import AutomotiveHowItWorks from "@/components/automotive/automotive-how-it-works"
import AutomotiveWhyChoose from "@/components/automotive/automotive-why-choose"
import AutomotiveMission from "@/components/automotive/automotive-mission"
import ShipmentMission from "@/components/shipment-mission"
import AutomotiveCta from "@/components/automotive/automotive-cta"

export default function AutomotiveManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AutomotiveBanner />
      <AutomotiveIntro />
      <AutomotiveWhatWeHandle />
      <AutomotiveHowItWorks />
      <AutomotiveWhyChoose />
      <AutomotiveMission />
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <AutomotiveCta />
      <Footer />
    </main>
  )
}
