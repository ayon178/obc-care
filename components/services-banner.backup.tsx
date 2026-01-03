"use client"

import { motion } from "framer-motion"
import { Truck, Zap, Shield, Clock } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ServicesBanner() {
  const t = useTranslations("ServicesBanner")

  const features = [
    { icon: Zap, text: t("features.fast") },
    { icon: Shield, text: t("features.secure") },
    { icon: Clock, text: t("features.reliable") },
  ]

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/services/banner.jpg')",
          }}
        >
          {/* Gradient Overlays - Slightly darker for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#194479]/65 via-[#194479]/55 to-[#194479]/65"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#194479]/40"></div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#91C73E]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-32 md:pt-36">
        <motion.div
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-2xl"
          >
            {t.rich("title", {
              br: () => <br />,
              green: (chunks) => <span className="bg-gradient-to-r from-[#91C73E] to-white bg-clip-text text-transparent drop-shadow-lg">{chunks}</span>
            })}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-white/95 mb-5 leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
          >
            {t("description")}
          </motion.p>

          {/* Tagline with Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#91C73E]" />
                  <span className="text-white font-semibold text-xs sm:text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              )
            })}
            <span className="text-white/80 font-medium text-xs sm:text-sm">
              {t("features.alwaysOnTime")}
            </span>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#91C73E]"></div>
            <div className="w-2 h-2 rounded-full bg-[#91C73E]"></div>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-[#91C73E] to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-sm">{t("scroll")}</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/60"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
