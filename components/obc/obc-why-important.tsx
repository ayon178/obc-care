"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Plane, Eye, BellRing, Timer } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Zero Room for Error",
    desc:
      "Avoid misrouting, loss, or delays common in standard air cargo with hand-carry supervision.",
  },
  {
    icon: Plane,
    title: "Immediate Availability",
    desc: "Your shipment moves on the next available flight — not in days.",
  },
  {
    icon: Eye,
    title: "Continuous Control",
    desc:
      "Courier handles customs, security, and delivery personally — no third‑party handovers.",
  },
  {
    icon: BellRing,
    title: "Peace of Mind",
    desc: "Live status updates ensure full visibility from pickup to final handover.",
  },
  {
    icon: Timer,
    title: "Critical for Urgent Industries",
    desc: "Ideal for AOG parts, prototypes, sensitive items, and confidential documents.",
  },
]

export default function ObcWhyImportant() {

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
            Why Is OBC Important?
          </span>
          <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479]">
            When every minute counts
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base">
            OBC services keep operations running in aviation, automotive, tech, and manufacturing by
            eliminating delays and maintaining custody at every step.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className="group rounded-2xl p-4 md:p-6 bg-white/70 backdrop-blur-md border border-gray-200 hover:border-[#91c73e]/60 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                    <Icon className="w-6 h-6 text-[#194479]" />
                  </div>
                  <div>
                    <h3 className="titleFont text-[#194479] text-sm sm:text-base md:text-lg leading-snug">
                      {r.title}
                    </h3>
                    <p className="paragraphFont mt-1.5 md:mt-2 text-gray-600 text-sm md:text-base">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


