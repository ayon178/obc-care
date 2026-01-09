"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Clock, ShieldCheck, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NfoIntro() {
  const t = useTranslations("NfoIntro")
  const isMobile = useIsMobile()

  const features = [
    { icon: Clock, title: t("features.0.title"), description: t("features.0.desc") },
    { icon: Globe, title: t("features.1.title"), description: t("features.1.desc") },
    { icon: ShieldCheck, title: t("features.2.title"), description: t("features.2.desc") },
    { icon: Zap, title: t("features.3.title"), description: t("features.3.desc") },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="headingFont text-2xl sm:text-3xl md:text-5xl font-bold text-[#194479] leading-tight mb-6 max-w-4xl mx-auto">
              {t("title")}
            </h2>
            <p className="paragraphFont text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Interactive Image Card */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
                <Image
                  src="/services/urgent.png"
                  alt="Next Flight Out Service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/90 via-[#194479]/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#91c73e] flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-sm font-medium">{t("card.label")}</div>
                        <div className="text-white text-xl font-bold">{t("card.value")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-[#91c73e]/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-[#194479]/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Right: Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="titleFont text-2xl md:text-3xl font-bold text-[#194479] mb-8">
                {t("subtitle")}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#194479]/10 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center mb-4 group-hover:bg-[#194479] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-[#194479] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="titleFont text-lg font-bold text-[#194479] mb-2">
                        {feature.title}
                      </h4>
                      <p className="paragraphFont text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Stats/Badge */}
              <div className="bg-[#194479] rounded-2xl p-6 md:p-8 text-white mt-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-[#91c73e] mb-1">24/7</div>
                    <div className="text-white/80 text-sm">{t("stats.support")}</div>
                  </div>
                  <div className="w-full md:w-px h-px md:h-12 bg-white/20" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-[#91c73e] mb-1">190+</div>
                    <div className="text-white/80 text-sm">{t("stats.countries")}</div>
                  </div>
                  <div className="w-full md:w-px h-px md:h-12 bg-white/20" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-[#91c73e] mb-1">99%</div>
                    <div className="text-white/80 text-sm">{t("stats.success")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
