"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import ObcBanner from "@/components/obc/obc-banner"
import ObcWhatIs from "@/components/obc/obc-what-is"

export default function OnboardCourierServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ObcBanner />
      <ObcWhatIs />
      <Footer />
    </main>
  )
}
