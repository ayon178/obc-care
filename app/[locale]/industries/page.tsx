"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import IndustriesBanner from "@/components/industries/industries-banner"
import IndustriesIntro from "@/components/industries/industries-intro"
import IndustriesSupported from "@/components/industries/industries-supported"
import IndustriesWhyPartner from "@/components/industries/industries-why-partner"
import IndustriesMission from "@/components/industries/industries-mission"
import ShipmentMission from "@/components/shipment-mission"
import IndustriesCta from "@/components/industries/industries-cta"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <IndustriesBanner />
      <IndustriesIntro />
      <IndustriesSupported />
      <IndustriesWhyPartner />
      {/* <IndustriesMission /> */}
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <IndustriesCta />
      <Footer />
    </main>
  )
}

