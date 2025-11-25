"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import IndustrialBanner from "@/components/industrial/industrial-banner"
import IndustrialIntro from "@/components/industrial/industrial-intro"
import IndustrialWhatWeHandle from "@/components/industrial/industrial-what-we-handle"
import IndustrialHowItWorks from "@/components/industrial/industrial-how-it-works"
import IndustrialWhyChoose from "@/components/industrial/industrial-why-choose"
import IndustrialMission from "@/components/industrial/industrial-mission"
import ShipmentMission from "@/components/shipment-mission"
import IndustrialCta from "@/components/industrial/industrial-cta"

export default function IndustrialMachineryEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <IndustrialBanner />
      <IndustrialIntro />
      <IndustrialWhatWeHandle />
      <IndustrialHowItWorks />
      <IndustrialWhyChoose />
      <IndustrialMission />
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <IndustrialCta />
      <Footer />
    </main>
  )
}
