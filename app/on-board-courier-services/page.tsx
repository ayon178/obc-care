"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import ObcBanner from "@/components/obc/obc-banner"
import ObcWhatIs from "@/components/obc/obc-what-is"
import ObcWhyImportant from "@/components/obc/obc-why-important"
import ObcWhyChoose from "@/components/obc/obc-why-choose"
import ObcIndustries from "@/components/obc/obc-industries"
import ObcHowItWorks from "@/components/obc/obc-how-it-works"

export default function OnboardCourierServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ObcBanner />
      <ObcWhatIs />
      <ObcWhyImportant />
      <ObcWhyChoose />
      <ObcIndustries />
      <ObcHowItWorks />
      <Footer />
    </main>
  )
}
