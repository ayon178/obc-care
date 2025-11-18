"use client"

import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ObcWhatIs() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  })

  const yText = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), {
    stiffness: 120,
    damping: 22,
  })
  const yImage = useSpring(useTransform(scrollYProgress, [0, 1], [-14, 14]), {
    stiffness: 120,
    damping: 24,
  })

  return (
    <section
      ref={ref}
      className="relative py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div style={{ y: yText }}>
            <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
              What Is an Onboard Courier Service?
            </span>
            <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479] leading-tight">
              Fastest and most secure way to move urgent shipments worldwide
            </h2>
            <div className="paragraphFont mt-3 space-y-3 text-gray-700">
              <p className="text-[13px] sm:text-sm md:text-base">
                An Onboard Courier (OBC) service is the fastest and most secure
                way to move urgent shipments across the globe.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base">
                A professional courier personally carries your shipment as hand
                luggage on a commercial flight, ensuring it is never left
                unattended or delayed in cargo.
              </p>
              <p className="text-[13px] sm:text-sm md:text-base">
                This hand‑carry method is used for time‑critical, high‑value, or
                sensitive shipments, guaranteeing priority handling, direct
                supervision, and the shortest possible delivery time.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div style={{ y: yImage }} className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
              <Image
                src="/services/shipment.jpeg"
                alt="Onboard Courier hand-carry"
                width={1200}
                height={900}
                className="h-[260px] sm:h-[320px] md:h-[380px] w-full object-cover"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
