"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FileText, CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

export default function CustomsWhatIs() {
  const t = useTranslations("CustomsWhatIs")
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-[#194479]/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
              <FileText className="w-4 h-4" />
              {t("badge")}
            </div>
            
            <h2 className="headingFont text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight">
              {t("title")}
            </h2>

            <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
              {t("description1")}
            </p>

            <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
              {t("description2")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 rounded-2xl bg-white border-2 border-[#194479]/20 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <h3 className="titleFont text-[#194479] font-bold text-lg mb-2">
                    {t("solutionTitle")}
                  </h3>
                  <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                    {t("solutionDesc")}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-[#91c73e]/5 border border-[#91c73e]/20"
            >
              <CheckCircle2 className="w-5 h-5 text-[#91c73e] flex-shrink-0 mt-0.5" />
              <p className="paragraphFont text-gray-700 text-sm md:text-base">
                {t("checkText")}
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src="/services/shipment.jpeg"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  priority={false}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-[#194479]/40 to-transparent" />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-[#194479]">24/7</div>
                        <div className="text-sm text-gray-600">{t("stats.support")}</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#91c73e]">100%</div>
                        <div className="text-sm text-gray-600">{t("stats.compliant")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

