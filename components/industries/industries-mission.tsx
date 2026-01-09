"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"

export default function IndustriesMission() {
  const isMobile = useIsMobile()
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-6">
                Your shipment, our mission — 24/7, across the globe.
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-white rounded-full mb-6" />
              <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed">
                Every industry relies on timely delivery. We ensure your mission-critical shipments reach their destination when it matters most, with full transparency and dedicated support every step of the way.
              </p>
            </motion.div>

            {/* Right: Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/services/shipment.jpeg"
                    alt="OBC Mission"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/services/shipment.jpeg"
                    alt="FM/LM Operations"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/services/shipment.jpeg"
                    alt="NFO Operations"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/services/shipment.jpeg"
                    alt="Global Logistics"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

