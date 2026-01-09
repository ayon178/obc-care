"use client"

import { motion } from "framer-motion"
import { Globe, Clock, Radio, Target } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

const benefitsData = [
  { icon: Globe, color: "#194479" },
  { icon: Clock, color: "#91c73e" },
  { icon: Radio, color: "#194479" },
  { icon: Target, color: "#91c73e" },
]

export default function IndustriesWhyPartner() {
  const t = useTranslations("IndustriesWhyPartner")
  const isMobile = useIsMobile()

  const benefits = benefitsData.map((benefit, index) => ({
    ...benefit,
    title: t(`benefits.${index}.title`),
  }))

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #194479 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
              {t("title")}
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#91c73e]/30 h-full">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 mb-2"
                        style={{ backgroundColor: `${benefit.color}15` }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: benefit.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#194479] mb-2 hidden">
                          {/* Title if needed */}
                        </h3>
                        <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                          {benefit.title}
                        </p>
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

