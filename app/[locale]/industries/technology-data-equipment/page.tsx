"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import TechnologyBanner from "@/components/technology/technology-banner"
import TechnologyIntro from "@/components/technology/technology-intro"
import TechnologyWhatWeHandle from "@/components/technology/technology-what-we-handle"
import TechnologyHowItWorks from "@/components/technology/technology-how-it-works"
import TechnologyWhyChoose from "@/components/technology/technology-why-choose"
import TechnologyMission from "@/components/technology/technology-mission"
import ShipmentMission from "@/components/shipment-mission"
import TechnologyCta from "@/components/technology/technology-cta"

export default function TechnologyDataEquipmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TechnologyBanner />
      <TechnologyIntro />
      <TechnologyWhatWeHandle />
      <TechnologyHowItWorks />
      <TechnologyWhyChoose />
      {/* <TechnologyMission /> */}
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <TechnologyCta />
      <Footer />
    </main>
  )
}
