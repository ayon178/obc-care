"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Globe, Shield, Radio } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NfoWhyChoose() {
  const t = useTranslations("NfoWhyChoose")
  const isMobile = useIsMobile()

  const features = [
    {
      icon: Zap,
      title: t("features.0.title"),
      description: t("features.0.desc"),
    },
    {
      icon: Clock,
      title: t("features.1.title"),
      description: t("features.1.desc"),
    },
    {
      icon: Globe,
      title: t("features.2.title"),
      description: t("features.2.desc"),
    },
    {
      icon: Radio,
      title: t("features.3.title"),
      description: t("features.3.desc"),
    },
    {
      icon: Shield,
      title: t("features.4.title"),
      description: t("features.4.desc"),
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
            WHY CHOOSE US
          </span>
          <h2 className="headingFont mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight">
            {t("title")}
          </h2>
          <div className="w-24 h-1.5 bg-[#91c73e] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#194479]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#194479]/10 flex items-center justify-center group-hover:bg-[#194479] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#194479] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="titleFont text-[#194479] font-bold text-xl md:text-2xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="paragraphFont text-gray-600 text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479] p-8 md:p-10 shadow-lg">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-[#91c73e]" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="headingFont text-white text-2xl md:text-3xl font-bold mb-3">
                    {t("highlightTitle")}
                  </h3>
                  <p className="paragraphFont text-white/90 text-base md:text-lg">
                    {t("highlightDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

