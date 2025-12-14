"use client"

import { motion } from "framer-motion"
import { Plane, Car, Cpu, Factory, FileText } from "lucide-react"
import { useTranslations } from "next-intl"

const industries = [
  { icon: Plane, title: "Aviation & AOG", desc: "Urgent aircraft parts, tools, and documents to keep operations flying." },
  { icon: Car, title: "Automotive", desc: "Critical components and prototypes delivered to production lines." },
  { icon: Cpu, title: "Technology & Electronics", desc: "Secure movement of chips, prototypes, and sensitive data carriers." },
  { icon: Factory, title: "Industrial & Manufacturing", desc: "Avoid downtime with fast delivery of essential machinery parts." },
  { icon: FileText, title: "Documents & Confidential", desc: "Legal, diplomatic, or business‑sensitive items — safely hand‑carried." },
]

// Span map for mosaic layout (desktop unique structure)
const spans = [
  "lg:col-span-3 lg:row-span-2", // big hero tile
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
]

export default function ObcIndustries() {
  const t = useTranslations("ObcIndustries")

  const industriesWithData = industries.map((it, i) => ({
    ...it,
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.description`),
  }))

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Mosaic grid: unique structure (hero + supporting tiles) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 auto-rows-[minmax(120px,auto)] gap-3 md:gap-4 lg:gap-5 max-w-6xl mx-auto"
        >
          {industriesWithData.map((it, i) => {
            const Icon = it.icon
            const isHero = i === 0
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className={`group relative rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all ${spans[i] || ""} overflow-hidden`}
              >
                {/* angled shine */}
                <div className="pointer-events-none absolute -top-1/2 right-0 h-[140%] w-1/2 bg-[linear-gradient(160deg,transparent,rgba(145,199,62,0.12)_30%,transparent_70%)]" />
                {/* corner ribbon icon */}
                <div className="absolute -top-3 -left-3 rotate-[-12deg]">
                  <div className="bg-[#194479] text-white/90 rounded-md px-2 py-1 text-[10px] shadow">
                    OBC
                  </div>
                </div>

                <div className={`relative z-10 h-full ${isHero ? "p-6 md:p-8" : "p-4 md:p-5"}`}>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                      <Icon className="w-6 h-6 text-[#194479]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`titleFont text-[#194479] ${isHero ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base"}`}>
                        {it.title}
                      </h3>
                      <p className={`paragraphFont mt-1.5 text-gray-600 ${isHero ? "text-sm md:text-base" : "text-sm"}`}>
                        {it.desc}
                      </p>
                    </div>
                  </div>

                  {isHero && (
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                        <div className="titleFont text-[#194479] text-lg">{t("stats.dispatch.value")}</div>
                        <div className="paragraphFont text-gray-600 text-[11px]">{t("stats.dispatch.label")}</div>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                        <div className="titleFont text-[#194479] text-lg">{t("stats.handling.value")}</div>
                        <div className="paragraphFont text-gray-600 text-[11px]">{t("stats.handling.label")}</div>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-white/60 p-3 text-center">
                        <div className="titleFont text-[#194479] text-lg">{t("stats.custody.value")}</div>
                        <div className="paragraphFont text-gray-600 text-[11px]">{t("stats.custody.label")}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


