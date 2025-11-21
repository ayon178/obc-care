"use client"

import Navbar from "@/components/shared/Navbar"
import ServicesBanner from "@/components/services-banner"
import CoreServices from "@/components/core-services"
import OperatingProcess from "@/components/operating-process"
import DeliveryOptions from "@/components/delivery-options"
import ShipmentMethods from "@/components/shipment-methods"
import ServicesCTA from "@/components/services-cta"
import Footer from "@/components/footer"
import ShipmentMission from "@/components/shipment-mission"

export default function ServicesPage() {
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
      <ServicesCTA />
      <Footer />
    </main>
  )
}

