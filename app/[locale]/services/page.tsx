"use client"

import { useEffect } from "react"
import Navbar from "@/components/shared/Navbar"
import ServicesBanner from "@/components/services-banner"
import CoreServices from "@/components/core-services"
import OperatingProcess from "@/components/operating-process"
import DeliveryOptions from "@/components/delivery-options"
import ShipmentMethods from "@/components/shipment-methods"
import ServicesCTA from "@/components/services-cta"
import Footer from "@/components/footer"
import ShipmentMission from "@/components/shipment-mission"
import UrgentSupportCTA from "@/components/urgent-support-cta"

export default function ServicesPage() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 100)
        }
      }
    }

    handleScroll()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ServicesBanner />
      <CoreServices />
      <OperatingProcess />
      <DeliveryOptions />
      <ShipmentMethods />
      {/* Shipment Mission Section */}
      <ShipmentMission />
      {/* Urgent Support CTA Section */}
      {/* <UrgentSupportCTA /> */}
      <ServicesCTA />
      <Footer />
    </main>
  )
}

