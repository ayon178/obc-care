"use client"

import { motion } from "framer-motion"
import { Phone, Zap, Shield, FileText, Eye } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const benefitsData = [
  { icon: Phone, color: "#194479" },
  { icon: Zap, color: "#91c73e" },
  { icon: Shield, color: "#194479" },
  { icon: FileText, color: "#91c73e" },
  { icon: Eye, color: "#194479" },
]

export default function AviationWhyChoose() {
  const t = useTranslations("AviationWhyChoose")

  const benefits = benefitsData.map((benefit, index) => ({
    ...benefit,
    title: t(`benefits.${index}.title`),
    description: t(`benefits.${index}.desc`),
  }))

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="paragraphFont text-white/90 text-sm md:text-base max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="titleFont text-white font-bold text-lg md:text-xl mb-2">
                          {benefit.title}
                        </h3>
                        <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed">
                          {benefit.description}
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

