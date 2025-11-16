"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ObcBanner() {
  return (
    <section
      className="relative h-[72vh] min-h-[520px] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/services/on_board_currier.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,26,42,0.65),rgba(10,26,42,0.4)_40%,rgba(10,26,42,0.65))]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_10%,rgba(145,199,62,0.18),transparent)]" />

      <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs md:text-sm backdrop-blur">
              Onboard Courier (OBC) Service
            </span>
            <h1 className="headingFont mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              From airport to doorstep — hand‑carried, monitored, and delivered with care.
            </h1>
            <p className="paragraphFont mt-4 text-white/85 text-sm sm:text-base md:text-lg max-w-2xl">
              We move your most time‑critical, high‑value shipments with priority handling and
              full visibility — 24/7, worldwide.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/inquiry"
                className="buttonFont group relative w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-white text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #91C73E 0%, #7bb033 60%)",
                }}
              >
                <span>Get a Free Quote</span>
              </Link>
              <Link
                href="/inquiry"
                className="buttonFont w-full sm:w-auto py-3 px-5 rounded-xl text-sm md:text-base font-semibold text-[#194479] bg-white hover:bg-white/90 transition-colors text-center"
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


