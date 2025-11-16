"use client"

import Image from "next/image"
import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Plane, Truck, ShieldCheck, CheckCircle2 } from "lucide-react"

export default function ShipmentMethods() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  })

  const yContent = useSpring(useTransform(scrollYProgress, [0, 1], [24, -24]), {
    stiffness: 140,
    damping: 22,
  })
  // Vertical-only parallax for image (no rotation or scaling)
  const yImage = useSpring(useTransform(scrollYProgress, [0, 1], [-12, 12]), {
    stiffness: 140,
    damping: 24,
  })

  return (
    <section ref={sectionRef} className="relative py-14 md:py-24 bg-white overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 -right-24 w-80 h-80 rounded-full bg-[#194479]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div style={{ y: yContent }} className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194479]/10 text-[#194479] text-xs md:text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#91c73e]" />
              How We Move Your Shipments
            </span>
            <h2 className="headingFont mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194479]">
              Fast. Secure. Global.
            </h2>
            <p className="paragraphFont mt-3 md:mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
              Every delivery is different — that’s why we customize our logistics approach for
              efficiency and precision.
            </p>

            {/* Methods */}
            <div className="mt-8 space-y-6">
              <div className="group flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                  <Plane className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <h3 className="titleFont text-[#194479] text-base sm:text-lg md:text-xl">
                    Air Transport (Onboard & Cargo Flights)
                  </h3>
                  <p className="paragraphFont mt-1 text-gray-600 text-sm md:text-base">
                    Our couriers travel with or coordinate your shipment via the fastest route
                    available, ensuring priority handling and zero delays.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                  <Truck className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <h3 className="titleFont text-[#194479] text-base sm:text-lg md:text-xl">Ground Transport</h3>
                  <p className="paragraphFont mt-1 text-gray-600 text-sm md:text-base">
                    For short or regional routes, we provide direct, door-to-door ground delivery
                    with GPS tracking and standby drivers for continuous movement.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                  <ShieldCheck className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <h3 className="titleFont text-[#194479] text-base sm:text-lg md:text-xl">
                    Tracking & Security Measures
                  </h3>
                  <ul className="mt-1 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#91c73e]" />
                      <p className="paragraphFont text-gray-600 text-sm md:text-base">
                        End-to-end monitoring with real-time updates
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#91c73e]" />
                      <p className="paragraphFont text-gray-600 text-sm md:text-base">
                        Secure handling and custody at every transfer point
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#91c73e]" />
                      <p className="paragraphFont text-gray-600 text-sm md:text-base">
                        Verified couriers and partner checks for full accountability
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div style={{ y: yImage }} className="relative z-0">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              {/* Decorative grid overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
              {/* Image */}
              <Image
                src="/services/sec_4.png"
                alt="Shipment methods visual"
                width={1200}
                height={900}
                className="h-[280px] sm:h-[360px] md:h-[420px] w-full object-cover"
                priority={false}
              />
              {/* Shine on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-20 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12" />
              </div>
              {/* Bottom caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="paragraphFont text-white/90 text-sm sm:text-base">
                  OBC missions, FM/LM or NFO in action — priority handling worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


