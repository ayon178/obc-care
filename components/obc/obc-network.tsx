"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Globe2, Users, Timer } from "lucide-react"
import { useRef } from "react"

const stats = [
  { label: "Active OBCs", value: "1,200+", icon: Users },
  { label: "Countries", value: "70+", icon: Globe2 },
  { label: "Quote SLA", value: "15m", icon: Timer },
]

export default function ObcNetwork() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] })
  const yHeader = useSpring(useTransform(scrollYProgress, [0, 1], [20, -10]), { stiffness: 120, damping: 20 })
  const yPanel = useSpring(useTransform(scrollYProgress, [0, 1], [30, -20]), { stiffness: 120, damping: 24 })

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* subtle light accents for white background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      {/* Abstract globe made of animated rings and dots (unique accent) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full border border-[#194479]/30"
        style={{ y: yPanel }}
      >
        {/* Primary orbits */}
        <div className="absolute inset-6 rounded-full border border-[#194479]/25" />
        <div className="absolute inset-14 rounded-full border border-[#194479]/20" />
        <div className="absolute inset-24 rounded-full border border-[#194479]/15" />

        {/* Rotating dots for multiple orbits (one dot per orbit, same direction, varied speed) */}
        <motion.div
          className="absolute inset-6 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-[#194479]" />
        </motion.div>
        <motion.div
          className="absolute inset-14 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#194479]" />
        </motion.div>
        <motion.div
          className="absolute inset-24 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-[#194479]" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div style={{ y: yHeader }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
            OBC Network
          </span>
          <h2 className="titleFont mt-3 text-[#194479] text-2xl sm:text-3xl md:text-4xl leading-tight">
            A global hand‑carry network on standby
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base max-w-xl">
            With trained couriers stationed across major hubs, we dispatch the nearest OBC within
            minutes — ensuring priority handling and continuous custody.
          </p>
        </motion.div>

        {/* Panel with stats */}
        <motion.div
          style={{ y: yPanel }}
          className="mt-8 md:mt-12 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4"
                >
                  <div className="rounded-xl bg-[#194479]/10 p-3">
                    <Icon className="w-6 h-6 text-[#194479]" />
                  </div>
                  <div>
                    <div className="titleFont text-[#194479] text-xl md:text-2xl">{s.value}</div>
                    <div className="paragraphFont text-gray-600 text-sm">{s.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Descriptor bullets */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-gray-700 text-sm">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              Nearest‑courier dispatch for time‑critical missions
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              Continuous supervision through customs and handover
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              Live status updates from pickup to delivery
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


