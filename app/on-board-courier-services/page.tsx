"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import ObcBanner from "@/components/obc/obc-banner"
import ObcWhatIs from "@/components/obc/obc-what-is"
import ObcWhyImportant from "@/components/obc/obc-why-important"

export default function OnboardCourierServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ObcBanner />
      <ObcWhatIs />
      <ObcWhyImportant />
      <Footer />
    </main>
  )
}
