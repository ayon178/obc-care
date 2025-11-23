"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import CustomsBanner from "@/components/customs/customs-banner"
import CustomsWhatIs from "@/components/customs/customs-what-is"
import CustomsWhyImportant from "@/components/customs/customs-why-important"

export default function CustomsClearanceAssistancePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CustomsBanner />
      <CustomsWhatIs />
      <CustomsWhyImportant />
      <Footer />
    </main>
  )
}
