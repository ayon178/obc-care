"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import MedicalBanner from "@/components/medical/medical-banner"
import MedicalIntro from "@/components/medical/medical-intro"
import MedicalWhatWeHandle from "@/components/medical/medical-what-we-handle"
import MedicalHowWeSaveLives from "@/components/medical/medical-how-we-save-lives"
import MedicalCta from "@/components/medical/medical-cta"
import ShipmentMission from "@/components/shipment-mission"

export default function MedicalTransportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <MedicalBanner />
      <MedicalIntro />
      <MedicalWhatWeHandle />
      <MedicalHowWeSaveLives />
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <MedicalCta />
      <Footer />
    </main>
  )
}
