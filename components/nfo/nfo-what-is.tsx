"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Zap, Plane, Clock, CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

export default function NfoWhatIs() {
  const t = useTranslations("NfoWhatIs")

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#194479]/5 via-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#91c73e]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#194479]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge and Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-6 max-w-4xl mx-auto">
              {t("title")}
            </h2>
          </motion.div>

          {/* Creative Layout: Central Image with Floating Cards */}
          <div className="relative">
            {/* Main Central Image */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-4xl mx-auto mb-12"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/services/shipment.jpeg"
                  alt="Next Flight Out Service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-[#194479]/40 to-transparent" />
                
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center">
                          <Plane className="w-6 h-6 text-[#194479]" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#194479]">{t("stats.flight.value")}</div>
                          <div className="text-sm text-gray-600">{t("stats.flight.label")}</div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#91c73e]/10 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-[#91c73e]" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#91c73e]">{t("stats.support.value")}</div>
                          <div className="text-sm text-gray-600">{t("stats.support.label")}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* Floating Feature Cards Around Image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#194479]/20 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#194479] to-[#1a4a7f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Plane className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="titleFont text-[#194479] font-bold text-lg mb-2">
                        {t("card1.title")}
                      </h3>
                      <p className="paragraphFont text-gray-700 text-sm leading-relaxed">
                        {t("card1.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - With Image */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[200px]">
                  {/* <Image
                    src="/services/shipment.jpeg"
                    alt="Real-time Routing"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/90 via-[#194479]/60 to-[#194479]/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3 group-hover:bg-[#91c73e] transition-colors duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{t("card2.title")}</h3>
                    <p className="text-white/90 text-sm">{t("card2.desc")}</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-[#91c73e] to-[#7bb033] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="titleFont text-white font-bold text-lg mb-2">
                        {t("card3.title")}
                      </h3>
                      <p className="paragraphFont text-white/90 text-sm leading-relaxed">
                        {t("card3.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center max-w-3xl mx-auto"
            >
              <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
                {t("description1")}
              </p>
              <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                {t("description2")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

