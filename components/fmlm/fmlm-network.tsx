"use client"

import { motion } from "framer-motion"
import { Globe2, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export default function FmlmNetwork() {
  const t = useTranslations("FmlmNetwork")

  const coverageKeys = ["asia", "europe", "americas"]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#194479] text-xs sm:text-sm backdrop-blur border border-[#194479]/10 shadow-sm">
            <Globe2 className="w-4 h-4" />
            {t("badge")}
          </span>
          <h2 className="headingFont mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight drop-shadow-sm">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("description1")}
          </p>
          <p className="paragraphFont mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("description2")}
          </p>
        </motion.div>

        {/* Floating Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all text-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-[#194479] mb-2 group-hover:scale-105 transition-transform">
              {t("stats.drivers.value")}
            </div>
            <div className="text-gray-600 text-sm sm:text-base font-medium">
              {t("stats.drivers.label")}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all text-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-[#91c73e] mb-2 group-hover:scale-105 transition-transform">
              {t("stats.coverage.value")}
            </div>
            <div className="text-gray-600 text-sm sm:text-base font-medium">
              {t("stats.coverage.label")}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all text-center"
          >
            <div className="text-4xl sm:text-5xl font-bold text-[#194479] mb-2 group-hover:scale-105 transition-transform">
              {t("stats.response.value")}
            </div>
            <div className="text-gray-600 text-sm sm:text-base font-medium">
              {t("stats.response.label")}
            </div>
          </motion.div>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coverageKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="relative p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin className="w-24 h-24 text-[#194479]" />
              </div>
              
              <h3 className="titleFont text-xl font-bold text-[#194479] mb-4 relative z-10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#91c73e]" />
                {t(`coverage.${key}.region`)}
              </h3>
              
              <div className="space-y-3 relative z-10">
                <div className="flex items-start gap-3 text-gray-600 text-sm">
                  <div className="mt-1 w-1 h-1 rounded-full bg-[#194479]/40" />
                  <span className="leading-relaxed">
                    {t(`coverage.${key}.cities`)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
