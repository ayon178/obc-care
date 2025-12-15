"use client"

import { motion } from "framer-motion"
import { Globe2, FileCheck, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const statsConfig = [
  { key: "agents", icon: FileCheck },
  { key: "coverage", icon: Globe2 },
  { key: "time", icon: Clock },
]

const coverageKeys = ["asia", "europe", "americas"]

export default function CustomsNetwork() {
  const t = useTranslations("CustomsNetwork")

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              {t("badge")}
            </span>

            <h2 className="headingFont text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight">
              {t("title")}
            </h2>

            <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
              {t("description1")}
            </p>

            <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
              {t("description2")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {statsConfig.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-lg bg-[#194479]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#194479]" />
                      </div>
                    </div>
                    <div className="titleFont text-[#194479] text-xl md:text-2xl font-bold mb-1">
                      {t(`stats.${stat.key}.value`)}
                    </div>
                    <div className="paragraphFont text-gray-600 text-xs md:text-sm">
                      {t(`stats.${stat.key}.label`)}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Coverage Areas with Image */}
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
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Coverage Cards Overlay */}
                <div className="absolute inset-0 flex items-center justify-end pr-0 md:pr-0">
                  <div className="space-y-2 max-w-[200px] md:max-w-[240px]">
                    {coverageKeys.map((key, index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="bg-black/60 backdrop-blur-sm rounded-l-lg rounded-r-none p-2 md:p-2.5 shadow-lg border border-white/20 border-r-0"
                      >
                        <h3 className="titleFont text-white font-bold text-xs md:text-sm mb-0.5">
                          {t(`coverage.${key}.region`)}
                        </h3>
                        <p className="paragraphFont text-white/90 text-[10px] md:text-xs leading-tight">
                          {t(`coverage.${key}.cities`)}
                        </p>
                      </motion.div>
                    ))}
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

