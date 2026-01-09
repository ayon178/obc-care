"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Plane, Clock, MapPin, Radio } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NfoNetwork() {
  const t = useTranslations("NfoNetwork")
  const isMobile = useIsMobile()

  const stats = [
    { icon: Plane, value: t("stats.flights.value"), label: t("stats.flights.label") },
    { icon: Globe, value: t("stats.tower.value"), label: t("stats.tower.label") },
    { icon: Clock, value: t("stats.coverage.value"), label: t("stats.coverage.label") },
  ]

  const coverageAreas = [
    {
      region: t("coverage.asia.region"),
      cities: t("coverage.asia.cities").split(", "),
      color: "#91c73e",
    },
    {
      region: t("coverage.europe.region"),
      cities: t("coverage.europe.cities").split(", "),
      color: "#194479",
    },
    {
      region: t("coverage.americas.region"),
      cities: t("coverage.americas.cities").split(", "),
      color: "#91c73e",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-6 max-w-4xl mx-auto">
              {t("title")}
            </h2>
            <p className="paragraphFont text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
              {t("description")}
            </p>
          </motion.div>

          {/* Split Layout: Content Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-transparent hover:border-[#91c73e]/30"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-[#194479]" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-[#194479] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Description Cards */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-[#194479] to-[#1a4a7f] rounded-2xl p-6 md:p-8 text-white shadow-xl"
                >
                  <h3 className="titleFont text-xl md:text-2xl font-bold mb-3">
                    {t("card1Title")}
                  </h3>
                  <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed">
                    {t("card1Desc")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#91c73e]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#91c73e]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#91c73e]" />
                    </div>
                    <div>
                      <h3 className="titleFont text-[#194479] font-bold text-lg md:text-xl mb-2">
                        {t("card2Title")}
                      </h3>
                      <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                        {t("card2Desc")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Image with Coverage Cards */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-[500px] md:h-[600px]">
                  <Image
                    src="/services/global_network.png"
                    alt="Global NFO Network"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-[#194479]/40 to-transparent" />
                  
                  {/* Coverage Area Cards - Aligned to Right Edge */}
                  <div className="absolute bottom-0 right-0 top-0 flex flex-col justify-end p-4 md:p-6 gap-3">
                    {coverageAreas.map((area, index) => (
                      <motion.div
                        key={area.region}
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="bg-black/70 backdrop-blur-md rounded-l-lg rounded-r-none p-3 md:p-4 border-l-4 border-[#91c73e] shadow-xl max-w-[280px]"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-[#91c73e] flex-shrink-0" />
                          <h4 className="text-white font-bold text-sm md:text-base">
                            {area.region}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {area.cities.map((city, cityIndex) => (
                            <span
                              key={cityIndex}
                              className="text-white/90 text-xs md:text-sm bg-white/10 px-2 py-1 rounded"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#194479] via-[#1a4a7f] to-[#194479] p-8 md:p-10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/services/shipment.jpeg')] opacity-10 bg-cover bg-center" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="headingFont text-white text-2xl md:text-3xl font-bold mb-2">
                    {t("footerTitle")}
                  </h3>
                  <p className="paragraphFont text-white/90 text-base md:text-lg">
                    {t("footerDesc")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
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

