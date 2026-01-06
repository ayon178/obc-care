"use client"

import { motion } from "framer-motion"
import { FileText, Calculator, FileCheck, Plane, Package } from "lucide-react"
import { useTranslations } from "next-intl"

const serviceIcons = [
  FileText,
  Calculator,
  FileCheck,
  Plane,
  Package,
]

export default function CustomsWhatWeHandle() {
  const t = useTranslations("CustomsWhatWeHandle")
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
            {t("badge")}
          </span>
          <h2 className="headingFont mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight">
            {t("title")}
          </h2>
        </motion.div>

        {/* Vertical Feature List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-5">
            {serviceIcons.map((Icon, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-start gap-4 rounded-2xl p-5 md:p-6 bg-white/70 backdrop-blur-md border border-gray-200 hover:border-[#91c73e]/60 transition-all shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#91c73e]/10 flex items-center justify-center group-hover:bg-[#91c73e] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#91c73e] group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="titleFont text-[#194479] font-bold text-base md:text-lg mb-2">
                        {t(`services.${i}.title`)}
                      </h3>
                      <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                        {t(`services.${i}.desc`)}
                      </p>
                    </div>

                    {/* Checkmark indicator */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 rounded-full bg-[#91c73e]/20 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-[#91c73e]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

