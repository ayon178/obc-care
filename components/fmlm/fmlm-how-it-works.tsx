"use client"

import { motion } from "framer-motion"
import { Route, Radio, ShieldCheck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Pickup Coordination",
    desc: "Our operations team identifies the fastest route and dispatches a driver immediately.",
    icon: Route,
  },
  {
    title: "Live Communication",
    desc: "You receive updates at every stage, from pickup to delivery.",
    icon: Radio,
  },
  {
    title: "Secure Transit",
    desc: "All vehicles are GPS-tracked, and all drivers are trained in time-critical handling.",
    icon: ShieldCheck,
  },
  {
    title: "Delivery Confirmation",
    desc: "Instant proof of delivery is provided once your shipment arrives.",
    icon: CheckCircle2,
  },
]

export default function FmlmHowItWorks() {
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
            How It Works
          </span>
          <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479]">
            From Pickup to Delivery — Seamless Coordination
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base">
            A streamlined process ensuring your shipment moves efficiently from origin to destination.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#194479]/30 via-[#194479]/20 to-transparent -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-6 md:space-y-8">
            {steps.map((s, i) => {
              const Icon = s.icon
              const isLeft = i % 2 === 0
              const cardCols = isLeft
                ? "md:col-start-1 md:col-end-2 md:pr-10"
                : "md:col-start-2 md:col-end-3 md:pl-10"
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-3 pl-14 md:pl-0"
                >
                  {/* Node - positioned relative to the whole row, centered on desktop, aligned to left track on mobile */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 w-8 h-8 rounded-full bg-white border border-[#194479]/40 shadow flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#194479]" />
                  </div>

                  {/* Card */}
                  <div className={cardCols}>
                    <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-4 md:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all">
                      <h3 className="titleFont text-[#194479] text-sm sm:text-base leading-snug">
                        {s.title}
                      </h3>
                      <p className="paragraphFont mt-1.5 text-gray-600 text-sm md:text-base">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

