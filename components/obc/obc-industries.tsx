"use client"

import { motion } from "framer-motion"
import { Plane, Car, Cpu, Factory, FileText, Laptop, HeartPulse } from "lucide-react"
import { useTranslations } from "next-intl"

const industries = [
  { icon: Plane, id: "aviation" },
  { icon: Car, id: "automotive" },
  { icon: Cpu, id: "electronics" },
  { icon: Factory, id: "industrial" },
  { icon: Laptop, id: "technology" },
  { icon: FileText, id: "documents" },
  { icon: HeartPulse, id: "medical" },
]

export default function ObcIndustries() {
  const t = useTranslations("ObcIndustries")

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#91c73e]/10 text-[#91c73e] text-[10px] sm:text-[11px]">
            {t("badge")}
          </span>
          <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479]">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-3 text-gray-600 text-sm md:text-base">
            {t("description")}
          </p>
        </motion.div>

        {/* Grid layout */}
        <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {industries.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className={`group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all overflow-hidden flex flex-col items-center justify-center text-center p-6 hover:border-[#91c73e]/60 hover:scale-[1.02] ${
                    i === industries.length - 1 ? "lg:col-span-2 col-span-2" : "col-span-1"
                }`}
              >
                {/* angled shine */}
                <div className="pointer-events-none absolute -top-1/2 right-0 h-[140%] w-1/2 bg-[linear-gradient(160deg,transparent,rgba(145,199,62,0.12)_30%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="flex-shrink-0 rounded-xl bg-[#91c73e]/10 p-3 group-hover:bg-[#91c73e] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#91c73e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="titleFont text-[#194479] text-sm sm:text-base font-medium group-hover:text-[#91c73e] transition-colors duration-300">
                    {t(`items.${it.id}`)}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


