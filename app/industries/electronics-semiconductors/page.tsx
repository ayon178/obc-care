"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import ElectronicsBanner from "@/components/electronics/electronics-banner"
import ElectronicsIntro from "@/components/electronics/electronics-intro"
import ElectronicsWhatWeHandle from "@/components/electronics/electronics-what-we-handle"
import ElectronicsHowItWorks from "@/components/electronics/electronics-how-it-works"
import ElectronicsWhyChoose from "@/components/electronics/electronics-why-choose"
import ElectronicsMission from "@/components/electronics/electronics-mission"
import ShipmentMission from "@/components/shipment-mission"
import ElectronicsCta from "@/components/electronics/electronics-cta"

export default function ElectronicsSemiconductorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ElectronicsBanner />
      <ElectronicsIntro />
      <ElectronicsWhatWeHandle />
      <ElectronicsHowItWorks />
      <ElectronicsWhyChoose />
      <ElectronicsMission />
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <ElectronicsCta />
      <Footer />
    </main>
  )
}
