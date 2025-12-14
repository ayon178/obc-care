"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import ConfidentialBanner from "@/components/confidential/confidential-banner"
import ConfidentialIntro from "@/components/confidential/confidential-intro"
import ConfidentialWhatWeHandle from "@/components/confidential/confidential-what-we-handle"
import ConfidentialHowItWorks from "@/components/confidential/confidential-how-it-works"
import ConfidentialWhyChoose from "@/components/confidential/confidential-why-choose"
import ConfidentialMission from "@/components/confidential/confidential-mission"
import ShipmentMission from "@/components/shipment-mission"
import ConfidentialCta from "@/components/confidential/confidential-cta"

export default function HighValueConfidentialDocumentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ConfidentialBanner />
      <ConfidentialIntro />
      <ConfidentialWhatWeHandle />
      <ConfidentialHowItWorks />
      <ConfidentialWhyChoose />
      {/* <ConfidentialMission /> */}
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <ConfidentialCta />
      <Footer />
    </main>
  )
}
