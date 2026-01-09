"use client"

import { motion } from "framer-motion"
import { Globe2, Users, Timer } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

const stats = [
  { label: "Active OBCs", value: "1,200+", icon: Users },
  { label: "Countries", value: "70+", icon: Globe2 },
  { label: "Quote SLA", value: "15m", icon: Timer },
]

export default function ObcNetwork() {
  const t = useTranslations("ObcNetwork")
  const isMobile = useIsMobile()

  const statsWithData = [
    { label: t("stats.activeObcs"), value: "1,200+", icon: Users },
    { label: t("stats.countries"), value: "70+", icon: Globe2 },
    { label: t("stats.quoteSla"), value: "15m", icon: Timer },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* subtle light accents for white background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
            {t("badge")}
          </span>
          <h2 className="titleFont mt-3 text-[#194479] text-xl sm:text-2xl md:text-3xl leading-tight">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base max-w-xl">
            {t("description")}
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {statsWithData.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="rounded-xl bg-[#194479]/10 p-3">
                    <Icon className="w-6 h-6 text-[#194479]" />
                  </div>
                  <div>
                    <div className="titleFont text-[#194479] text-lg md:text-xl">{s.value}</div>
                    <div className="paragraphFont text-gray-600 text-sm">{s.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Descriptor text */}
          <div className="mt-8 space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 text-gray-700 text-sm md:text-base">
            <div className="flex items-start gap-2">
               <div className="min-w-1.5 h-1.5 rounded-full bg-[#91c73e] mt-2" />
               <p>{t("bullets.0")}</p>
            </div>
            <div className="flex items-start gap-2">
               <div className="min-w-1.5 h-1.5 rounded-full bg-[#91c73e] mt-2" />
               <p>{t("bullets.1")}</p>
            </div>
            <div className="flex items-start gap-2">
               <div className="min-w-1.5 h-1.5 rounded-full bg-[#91c73e] mt-2" />
               <p>{t("bullets.2")}</p>
            </div>
          </div>
      </div>
    </section>
  )
}


