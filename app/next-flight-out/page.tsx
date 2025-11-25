"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import NfoBanner from "@/components/nfo/nfo-banner"
import NfoIntro from "@/components/nfo/nfo-intro"
import NfoWhatIs from "@/components/nfo/nfo-what-is"
import NfoWhyImportant from "@/components/nfo/nfo-why-important"
import NfoHowItWorks from "@/components/nfo/nfo-how-it-works"
import NfoWhyChoose from "@/components/nfo/nfo-why-choose"
import NfoNetwork from "@/components/nfo/nfo-network"
import NfoJoin from "@/components/nfo/nfo-join"
import ShipmentMission from "@/components/shipment-mission"
import NfoCta from "@/components/nfo/nfo-cta"

export default function NextFlightOutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <NfoBanner />
      <NfoIntro />
      <NfoWhatIs />
      <NfoWhyImportant />
      <NfoHowItWorks />
      <NfoWhyChoose />
      <NfoNetwork />
      <NfoJoin />
      <div className="mt-10">
        <ShipmentMission />
      </div>
      <NfoCta />
      <Footer />
    </main>
  )
}
