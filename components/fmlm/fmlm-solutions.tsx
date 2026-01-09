"use client"

import { motion } from "framer-motion"
import { Truck, Package, Zap, Navigation } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

const solutions = [
  {
    icon: Truck,
  },
  {
    icon: Package,
  },
  {
    icon: Zap,
  },
  {
    icon: Navigation,
  },
]

export default function FmlmSolutions() {
  const t = useTranslations("FmlmSolutions")
  const isMobile = useIsMobile()

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
            {t("badge")}
          </span>
          <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479]">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base">
            {t("description")}
          </p>
        </motion.div>

        {/* Asymmetric layout: Left sticky stats card + Right vertical flow list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14 max-w-6xl mx-auto items-start">
          {/* Left: Trust & stats card */}
          <motion.div className="order-2 lg:order-1 lg:sticky lg:top-28 rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md p-5 md:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-[#91c73e]/10 p-3">
                <Truck className="w-6 h-6 text-[#91c73e]" />
              </div>
              <div>
                <h3 className="titleFont text-[#194479] text-sm sm:text-base md:text-lg">
                  {t("builtForSpeed.title")}
                </h3>
                <p className="paragraphFont mt-1.5 text-gray-600 text-sm">
                  {t("builtForSpeed.subtitle")}
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                <div className="titleFont text-[#194479] text-sm ">24/7</div>
                <div className="paragraphFont text-gray-600 text-[11px]">{t("stats.availability")}</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                <div className="titleFont text-[#194479] whitespace-nowrap text-sm ">Real-Time</div>
                <div className="paragraphFont text-gray-600 text-[11px]">{t("stats.updates")}</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                <div className="titleFont text-[#194479] text-sm ">100%</div>
                <div className="paragraphFont text-gray-600 text-[11px]">{t("stats.accountable")}</div>
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
                    key={i}
                    initial={{ opacity: 0, y: isMobile ? 10 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className={`group relative flex items-start gap-3 rounded-2xl p-4 md:p-5 bg-white/70 backdrop-blur-md border border-gray-200 hover:border-[#91c73e]/60 transition-all shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] ${
                      i % 2 === 0 ? "md:ml-0" : "md:ml-8"
                    }`}
                  >
                    {/* Node marker */}
                    <div className="hidden md:block absolute -left-[7px] top-5 w-3 h-3 rounded-full bg-white border border-[#91c73e]/40 transition-colors duration-300 group-hover:bg-[#91c73e] group-hover:border-[#91c73e]" />
                    <div className="flex-shrink-0 rounded-xl bg-[#91c73e]/10 p-3 transition-colors duration-300 group-hover:bg-[#91c73e]">
                      <Icon className="w-6 h-6 text-[#91c73e] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="titleFont text-[#194479] text-sm sm:text-base md:text-lg leading-snug">
                        {t(`items.${i}.title`)}
                      </h3>
                      <p className="paragraphFont mt-1.5 md:mt-2 text-gray-600 text-sm md:text-base">
                        {t(`items.${i}.description`)}
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

