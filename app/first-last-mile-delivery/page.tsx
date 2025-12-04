"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import FmlmBanner from "@/components/fmlm/fmlm-banner"
import FmlmWhatIs from "@/components/fmlm/fmlm-what-is"
import FmlmWhyImportant from "@/components/fmlm/fmlm-why-important"
import FmlmSolutions from "@/components/fmlm/fmlm-solutions"
import FmlmHowItWorks from "@/components/fmlm/fmlm-how-it-works"
import FmlmWhyChoose from "@/components/fmlm/fmlm-why-choose"
import FmlmNetwork from "@/components/fmlm/fmlm-network"
import FmlmQuoteCta from "@/components/fmlm/fmlm-quote-cta"
import ShipmentMission from "@/components/shipment-mission"
import FmlmJoin from "@/components/fmlm/fmlm-join"
import FmlmCta from "@/components/fmlm/fmlm-cta"

export default function FirstLastMileDeliveryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FmlmBanner />
      <FmlmWhatIs />
      <FmlmWhyImportant />
      <FmlmSolutions />
      <FmlmHowItWorks />
      <FmlmWhyChoose />
      <FmlmNetwork />
      {/* <FmlmQuoteCta /> */}

      <FmlmJoin />
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <FmlmCta />
      <Footer />
    </main>
  )
}
