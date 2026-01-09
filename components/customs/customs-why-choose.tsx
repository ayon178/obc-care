"use client"

import { motion } from "framer-motion"
import { Globe, Clock, Zap, Package } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

const featureIcons = [
  Globe,
  Clock,
  Zap,
  Package,
]

const featureImages = [
  "/services/global_experties.png",
  "/services/monitoring.png",
  "/services/zero_delay.png",
  "/services/all_in_one.png",
]

export default function CustomsWhyChoose() {
  const t = useTranslations("CustomsWhyChoose")
  const isMobile = useIsMobile()

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.6 : 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
            {t("badge")}
          </span>
          <h2 className="headingFont mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-4 text-gray-700 text-base md:text-lg">
            {t("description")}
          </p>
        </motion.div>

        {/* Features Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {featureIcons.map((Icon, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image Background */}
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={featureImages[index]}
                    alt={t(`features.${index}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/90 via-[#194479]/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[#91c73e] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="relative bg-white p-6 border-t-4 border-[#194479] group-hover:border-[#91c73e] transition-colors duration-300">
                  <h3 className="titleFont text-[#194479] font-bold text-lg md:text-xl mb-2">
                    {t(`features.${index}.title`)}
                  </h3>
                  <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                    {t(`features.${index}.desc`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

