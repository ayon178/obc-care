"use client"

import { motion } from "framer-motion"
import { Car } from "lucide-react"
import Link from "next/link"

export default function AutomotiveBanner() {
  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/industries/auto/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gradient overlays - Stronger for better text visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,26,42,0.92),rgba(10,26,42,0.75)_40%,rgba(10,26,42,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_10%,rgba(145,199,62,0.15),transparent)]" />
      {/* Additional overlay for text area */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#0a1a2a]/60 via-transparent to-transparent" />

      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex h-full items-center justify-end pt-32 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-right ml-auto relative z-30"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold self-end border border-white/20"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              <Car className="w-3 h-3" />
              OBC Care – Automotive & Manufacturing Solutions
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="headingFont mt-2 text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}
            >
              When production lines can't afford to stop, OBC Care keeps your supply chain moving — fast, precise, and globally coordinated.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end sm:justify-end sm:self-end"
            >
              <Link
                href="/inquiry"
                className="buttonFont group relative w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-white text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #91C73E 0%, #7bb033 60%)",
                }}
              >
                <span>Request Urgent Pickup</span>
              </Link>
              <Link
                href="/inquiry"
                className="buttonFont w-full sm:w-auto py-3 px-5 rounded-xl text-sm md:text-base font-semibold text-[#194479] bg-white hover:bg-white/90 transition-colors text-center"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

