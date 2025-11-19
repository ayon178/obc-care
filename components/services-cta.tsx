"use client"

import {
  motion,
  type Variants,
} from "framer-motion"
import Link from "next/link"
import { Send, Phone } from "lucide-react"
import React from "react"

export default function ServicesCTA() {

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  const staggerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" as const },
    }),
  }

  return (
    <section className="relative z-0 py-16 md:py-24 overflow-hidden">
      {/* background gradient base */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f2744] via-[#153a62] to-[#0a1a2a]"
      />
      {/* accent layers */}
      <div
        aria-hidden
        className="absolute z-0 -top-40 -left-40 h-96 w-96 rounded-full bg-[#91c73e]/14 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute z-0 -bottom-44 -right-40 h-[28rem] w-[28rem] rounded-full bg-white/8 blur-3xl"
      />
      {/* faint grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px]"
      />

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-12 overflow-hidden"
        >
          {/* Decorative angled shine */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 right-0 h-[140%] w-1/2 bg-[linear-gradient(160deg,transparent,rgba(255,255,255,0.08)_30%,transparent_70%)]"
          />
          {/* Top-right badge */}
          <motion.div
            variants={staggerVariants}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-md"
          >
            24/7 Priority Support
          </motion.div>

          {/* Left: Content */}
          <div className="max-w-xl">
            <motion.h2
              variants={staggerVariants}
              className="titleFont text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight"
            >
              Need a Time‑Critical Delivery?
            </motion.h2>
            <motion.p
              variants={staggerVariants}
              className="paragraphFont text-white/80 mt-4 text-sm sm:text-base md:text-lg"
            >
              Whether it’s an urgent aircraft part or a last‑minute production
              component, we deliver with speed, precision, and full visibility —
              around the clock.
            </motion.p>

            <motion.div
              variants={staggerVariants}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/inquiry"
                className="buttonFont group relative w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-white text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #91C73E 0%, #7bb033 60%)",
                }}
              >
                {/* Shine sweep */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0"
                  whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                <Send className="w-4 h-4" />
                <span>Get a Free Quote</span>
              </Link>
              <Link
                href="/inquiry"
                className="buttonFont w-full sm:w-auto py-3 px-5 rounded-xl text-sm md:text-base font-semibold text-[#194479] bg-white hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual Accent Card */}
          <motion.div
            variants={staggerVariants}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
          >
            {/* subtle grid */}
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(600px_200px_at_70%_0%,rgba(145,199,62,0.12),transparent)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]"
            />
            {/* animated connectors - hidden to avoid stray vertical line */}
            <div className="relative hidden">
              <div className="absolute left-6 top-10 h-2 w-2 rounded-full bg-[#91c73e]" />
              <div className="absolute left-6 top-10 h-28 w-px bg-white/30" />
              <motion.div
                aria-hidden
                className="absolute left-6 top-10 h-28 w-px bg-[#91c73e]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ originY: 0 }}
              />

              <div className="absolute left-6 top-40 h-2 w-2 rounded-full bg-[#91c73e]" />
              <div className="absolute left-6 top-40 h-16 w-px bg-white/30" />
              <motion.div
                aria-hidden
                className="absolute left-6 top-40 h-16 w-px bg-[#91c73e]"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                style={{ originY: 0 }}
              />

              <div className="absolute left-6 top-56 h-2 w-2 rounded-full bg-[#91c73e]" />
            </div>

            {/* copy on right card */}
            <div className="relative">
              <h3 className="titleFont text-white text-lg md:text-xl">
                Precision Logistics, Delivered
              </h3>
              <p className="paragraphFont text-white/80 mt-2 text-sm md:text-base">
                Priority handling, real‑time updates, and dedicated experts for
                your most critical moves — anywhere in the world.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
