"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import NfoBanner from "@/components/nfo/nfo-banner"
import NfoIntro from "@/components/nfo/nfo-intro"

export default function NextFlightOutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <NfoBanner />
      <NfoIntro />
      <Footer />
    </main>
  )
}
