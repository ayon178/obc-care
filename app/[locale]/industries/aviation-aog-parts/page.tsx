"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import AviationBanner from "@/components/aviation/aviation-banner"
import AviationIntro from "@/components/aviation/aviation-intro"
import AviationWhatWeHandle from "@/components/aviation/aviation-what-we-handle"
import AviationHowItWorks from "@/components/aviation/aviation-how-it-works"
import AviationWhyChoose from "@/components/aviation/aviation-why-choose"
import AviationMission from "@/components/aviation/aviation-mission"
import ShipmentMission from "@/components/shipment-mission"
import AviationCta from "@/components/aviation/aviation-cta"

export default function AviationAogPartsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AviationBanner />
      <AviationIntro />
      <AviationWhatWeHandle />
      <AviationHowItWorks />
      <AviationWhyChoose />
      {/* <AviationMission /> */}
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <AviationCta />
      <Footer />
    </main>
  )
}
