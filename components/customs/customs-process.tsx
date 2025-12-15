"use client"

import { motion } from "framer-motion"
import { FileCheck, Send, Radio, CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

const stepIcons = [
  FileCheck,
  Send,
  Radio,
  CheckCircle2,
]

export default function CustomsProcess() {
  const t = useTranslations("CustomsProcess")
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
            {t("badge")}
          </span>
          <h2 className="headingFont mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-3 text-gray-700 text-sm md:text-base">
            {t("description")}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="relative max-w-4xl mx-auto">
          {/* Vertical line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#194479]/30 via-[#194479]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {stepIcons.map((Icon, i) => {
              const isLeft = i % 2 === 0
              const cardCols = isLeft
                ? "md:col-start-1 md:col-end-2 md:pr-10"
                : "md:col-start-2 md:col-end-3 md:pl-10"
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-3 pl-14 md:pl-0"
                >
                  {/* Node - positioned relative to the whole row, centered on desktop, aligned to left track on mobile */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 w-8 h-8 rounded-full bg-white border-2 border-[#194479]/40 shadow flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-[#194479]" />
                  </div>

                  {/* Numbered Badge - Top Right */}
                  <div className="absolute top-0 right-0 md:right-auto md:left-full md:ml-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#194479] to-[#1a4a7f] text-white flex items-center justify-center text-sm font-bold shadow-lg z-20">
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className={cardCols}>
                    <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md p-4 md:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:border-[#91c73e]/60 transition-all">
                      <h3 className="titleFont text-[#194479] text-sm sm:text-base md:text-lg font-bold leading-snug mb-2">
                        {t(`steps.${i}.title`)}
                      </h3>
                      <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                        {t(`steps.${i}.desc`)}
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

