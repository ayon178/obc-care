"use client"

import { motion } from "framer-motion"
import {
  FileSearch,
  FileText,
  Package,
  Radio,
  CheckCircle2,
} from "lucide-react"
import { useTranslations } from "next-intl"

export default function OperatingProcess() {
  const t = useTranslations("OperatingProcess")

  const steps = [
    {
      number: "01",
      icon: FileSearch,
      title: t("steps.0.title"),
      description: t("steps.0.description"),
      color: "#194479",
    },
    {
      number: "02",
      icon: FileText,
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      color: "#91C73E",
    },
    {
      number: "03",
      icon: Package,
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      color: "#194479",
    },
    {
      number: "04",
      icon: Radio,
      title: t("steps.3.title"),
      description: t("steps.3.description"),
      color: "#91C73E",
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: t("steps.4.title"),
      description: t("steps.4.description"),
      color: "#194479",
    },
  ]

  return (
    <section id="how-we-operate" className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(25, 68, 121, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(25, 68, 121, 0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#194479]/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#91C73E]/5 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#194479]"></div>
            <span className="px-4 py-2 rounded-full bg-[#194479]/10 backdrop-blur-sm border border-[#194479]/20">
              <span className="text-sm font-semibold text-[#194479] tracking-wider uppercase">
                {t("header.label")}
              </span>
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#194479]"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight"
          >
            {t.rich("header.title", {

              gradient: (chunks) => <span className="bg-gradient-to-r from-[#194479] via-[#194479] to-[#91C73E] bg-clip-text text-transparent">{chunks}</span>
            })}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-3 md:space-y-4 px-1"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light">
              {t.rich("header.p1", {
                bold: (chunks) => <span className="font-semibold text-[#194479]">{chunks}</span>
              })}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light">
              {t("header.p2")}
            </p>
          </motion.div>
        </div>

        {/* Enhanced Steps Grid - New Structure */}
        <div className="relative">
          {/* Connecting Lines - Horizontal Flow */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#194479]/20 to-transparent -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === steps.length - 1

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group"
                >
                  {/* Connecting Arrow - Desktop Only */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className="w-8 h-8 rounded-full bg-white border-2 border-[#194479]/20 flex items-center justify-center shadow-md"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-[#91C73E]"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* Step Card - Enhanced */}
                  <div className="relative h-full">
                    <div className="relative h-full p-6 md:p-7 bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                        }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 z-10">
                        <div
                          className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                          style={{ backgroundColor: step.color }}
                        >
                          <span className="text-white font-bold text-sm">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div
                          className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{ backgroundColor: step.color }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                        className="mt-6 h-1 rounded-full shadow-sm"
                        style={{ backgroundColor: step.color }}
                      />
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
