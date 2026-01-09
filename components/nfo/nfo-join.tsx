"use client"

import { motion } from "framer-motion"
import { UserPlus, CheckCircle2, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function NfoJoin() {
  const t = useTranslations("NfoJoin")
  const isMobile = useIsMobile()

  const benefits = [
    t("benefits.0"),
    t("benefits.1"),
    t("benefits.2"),
    t("benefits.3"),
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <UserPlus className="w-4 h-4" />
              {t("badge")}
            </span>
            <h2 className="headingFont text-xl sm:text-2xl md:text-4xl font-bold text-[#194479] leading-tight mb-4 max-w-3xl mx-auto">
              {t("title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="titleFont text-2xl md:text-3xl font-bold text-[#194479]">
                {t("subtitle")}
              </h3>
              <p className="paragraphFont text-gray-700 text-lg leading-relaxed">
                {t("description")}
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#91c73e]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#91c73e]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#91c73e]" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/register"
                  className="buttonFont inline-flex items-center gap-2 bg-[#194479] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#153a69] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {t("button")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Decorative Box */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#194479] to-[#1a4a7f] shadow-2xl p-8 flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Central Card */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-sm text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserPlus className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{t("cardTitle")}</h4>
                  <p className="text-white/80 leading-relaxed">
                    {t("cardDesc")}
                  </p>
                </div>

                {/* Floating Icon Badge */}
                <motion.div
                  className="absolute top-10 right-10 w-16 h-16 bg-[#91c73e] rounded-2xl flex items-center justify-center shadow-lg transform rotate-12"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [12, 15, 12],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

