"use client"

import { motion } from "framer-motion"
import { Clock, Shield, Zap, Package } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const reasonIcons = [
  {
    icon: Clock,
    color: "#194479",
    gradient: "from-[#194479] to-[#1a4a7f]",
  },
  {
    icon: Shield,
    color: "#91c73e",
    gradient: "from-[#91c73e] to-[#7bb033]",
  },
  {
    icon: Zap,
    color: "#194479",
    gradient: "from-[#194479] to-[#1a4a7f]",
  },
  {
    icon: Package,
    color: "#91c73e",
    gradient: "from-[#91c73e] to-[#7bb033]",
  },
]

export default function CustomsWhyImportant() {
  const t = useTranslations("CustomsWhyImportant")
  
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #194479 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#91c73e]/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#194479]/10 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#194479]/10 to-[#194479]/5 text-[#194479] text-xs sm:text-sm font-semibold border border-[#194479]/20"
          >
            {t("badge")}
          </motion.span>
          <h2 className="headingFont mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight">
            {t("title")}
          </h2>
        </motion.div>

        {/* Fancy Grid Layout with Overlapping Cards */}
        <div className="relative max-w-7xl mx-auto">
          {/* Mobile: Simple Grid, Desktop: Complex Layout */}
          <div className="relative">
            {/* Mobile: Show Image First */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative mb-12 md:hidden w-full h-[300px]"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/services/complience.png"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#194479] mb-1">100%</div>
                      <div className="text-xs text-gray-600">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop: Central Image with Absolute Positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[400px] h-[400px] pointer-events-none"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/services/complience.png"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#194479] mb-1">100%</div>
                      <div className="text-xs text-gray-600">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative md:min-h-[700px] md:py-24 md:px-8">
              {reasonIcons.map((r, i) => {
                const Icon = r.icon
                // Desktop positions with proper margins to avoid image overlap
                const desktopPositions = [
                  "md:justify-self-start md:self-start md:mr-auto md:mb-auto md:mt-0 md:ml-0",
                  "md:justify-self-end md:self-start md:ml-auto md:mb-auto md:mt-0 md:mr-0",
                  "md:justify-self-start md:self-end md:mr-auto md:mt-auto md:mb-0 md:ml-0",
                  "md:justify-self-end md:self-end md:ml-auto md:mt-auto md:mb-0 md:mr-0",
                ]
                const desktopPos = desktopPositions[i] || desktopPositions[0]

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: i % 2 === 0 ? 2 : -2,
                      transition: { duration: 0.3 },
                    }}
                    className={`relative ${desktopPos} max-w-[280px] w-full z-30`}
                  >
                    {/* Card with Gradient Border */}
                    <div className="relative group">
                      {/* Gradient Border Effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${r.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Card Content */}
                      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-500">
                        {/* Icon with Gradient Background */}
                        <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                          {/* Shine effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <h3 className="titleFont text-[#194479] font-bold text-base md:text-lg mb-2">
                          {t(`reasons.${i}.title`)}
                        </h3>
                        <p className="paragraphFont text-gray-700 text-sm leading-relaxed">
                          {t(`reasons.${i}.desc`)}
                        </p>

                        {/* Decorative Element */}
                        <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${r.gradient} opacity-5 rounded-tl-full`} />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

