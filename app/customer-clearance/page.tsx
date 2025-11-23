"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import CustomsBanner from "@/components/customs/customs-banner"
import CustomsWhatIs from "@/components/customs/customs-what-is"
import CustomsWhyImportant from "@/components/customs/customs-why-important"
import CustomsWhatWeHandle from "@/components/customs/customs-what-we-handle"
import CustomsProcess from "@/components/customs/customs-process"
import CustomsWhyChoose from "@/components/customs/customs-why-choose"
import CustomsNetwork from "@/components/customs/customs-network"
import CustomsJoin from "@/components/customs/customs-join"

export default function CustomsClearanceAssistancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CustomsBanner />
      <CustomsWhatIs />
      <CustomsWhyImportant />
      <CustomsWhatWeHandle />
      <CustomsProcess />
      <CustomsWhyChoose />
      <CustomsNetwork />
      <CustomsJoin />
      <Footer />
    </main>
  )
}
