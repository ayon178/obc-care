"use client"

import Navbar from "@/components/shared/Navbar"
import ServicesBanner from "@/components/services-banner"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesBanner />
      <Footer />
    </main>
  )
}

