"use client"

import { motion } from "framer-motion"
import { Truck, Package, Zap, Navigation } from "lucide-react"

const solutions = [
  {
    icon: Truck,
    title: "First Mile Delivery",
    desc: "Pickup from your facility to airport or freight partner — aligned precisely with flight schedules.",
  },
  {
    icon: Package,
    title: "Last Mile Delivery",
    desc: "From customs or airport to consignee's door — fast, secure, and fully coordinated.",
  },
  {
    icon: Zap,
    title: "Express Ground Transfers",
    desc: "Dedicated vehicles for local or regional movements that demand urgency.",
  },
  {
    icon: Navigation,
    title: "Direct Drive Options",
    desc: "Point-to-point transport — no stops, no detours, no waiting.",
  },
]

export default function FmlmSolutions() {
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
            Our FM/LM Delivery Solutions
          </span>
          <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479]">
            We understand that time is everything.
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base">
            That's why OBC Care's First Mile / Last Mile Delivery is designed for efficiency, visibility, and reliability — from pickup to delivery.
          </p>
        </motion.div>

        {/* Asymmetric layout: Left sticky stats card + Right vertical flow list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          {/* Left: Trust & stats card */}
          <motion.div className="order-2 lg:order-1 lg:sticky lg:top-28 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md p-5 md:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-[#194479]/10 p-3">
                <Truck className="w-6 h-6 text-[#194479]" />
              </div>
              <div>
                <h3 className="titleFont text-[#194479] text-sm sm:text-base md:text-lg">
                  Built for Speed & Reliability
                </h3>
                <p className="paragraphFont mt-1.5 text-gray-600 text-sm">
                  Ground transport operations with real-time tracking and proactive coordination.
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                <div className="titleFont text-[#194479] text-base ">24/7</div>
                <div className="paragraphFont text-gray-600 text-[11px]">Availability</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                <div className="titleFont text-[#194479] text-base ">Real-Time</div>
                <div className="paragraphFont text-gray-600 text-[11px]">Updates</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                <div className="titleFont text-[#194479] text-base ">100%</div>
                <div className="paragraphFont text-gray-600 text-[11px]">Accountable</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Vertical connected feature flow */}
          <motion.div className="relative order-1 lg:order-2 lg:col-span-2">
            {/* Vertical connector line */}
            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#194479]/30 via-[#194479]/20 to-transparent" />

            <div className="space-y-4 md:space-y-5">
              {solutions.map((solution, i) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className={`relative flex items-start gap-3 rounded-2xl p-4 md:p-5 bg-white/70 backdrop-blur-md border border-gray-200 hover:border-[#91c73e]/60 transition-all shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${
                      i % 2 === 0 ? "md:ml-0" : "md:ml-8"
                    }`}
                  >
                    {/* Node marker */}
                    <div className="hidden md:block absolute -left-[7px] top-5 w-3 h-3 rounded-full bg-white border border-[#194479]/40" />
                    <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                      <Icon className="w-6 h-6 text-[#194479]" />
                    </div>
                    <div>
                      <h3 className="titleFont text-[#194479] text-sm sm:text-base md:text-lg leading-snug">
                        {solution.title}
                      </h3>
                      <p className="paragraphFont mt-1.5 md:mt-2 text-gray-600 text-sm md:text-base">
                        {solution.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

