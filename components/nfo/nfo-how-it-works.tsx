"use client"

import { motion } from "framer-motion"
import { Calendar, Package, Plane, Radio, Truck } from "lucide-react"
import { useTranslations } from "next-intl"

export default function NfoHowItWorks() {
  const t = useTranslations("NfoHowItWorks")

  const steps = [
    {
      number: "01",
      title: t("steps.0.title"),
      desc: t("steps.0.desc"),
      icon: Calendar,
      color: "#194479",
    },
    {
      number: "02",
      title: t("steps.1.title"),
      desc: t("steps.1.desc"),
      icon: Package,
      color: "#91c73e",
    },
    {
      number: "03",
      title: t("steps.2.title"),
      desc: t("steps.2.desc"),
      icon: Plane,
      color: "#194479",
    },
    {
      number: "04",
      title: t("steps.3.title"),
      desc: t("steps.3.desc"),
      icon: Radio,
      color: "#91c73e",
    },
    {
      number: "05",
      title: t("steps.4.title"),
      desc: t("steps.4.desc"),
      icon: Truck,
      color: "#194479",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-[#194479]/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#91c73e]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
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
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#194479]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
            {t("badge")}
          </span>
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="paragraphFont text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Steps Timeline - Responsive Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#194479]/20 via-[#91c73e]/30 to-[#194479]/20 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
                >
                  {/* Timeline Node - Desktop Only */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 shadow-xl z-30 pointer-events-none"
                    style={{ borderColor: step.color }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`relative z-10 ${
                      isLeft ? "md:col-start-2 md:pl-0" : "md:col-start-1 md:text-right"
                    }`}
                  >
                    <div className={`relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 h-full z-10 group
                       ${!isLeft ? "md:items-end" : ""}
                    `}>
                       {/* Icon Bubble - Mobile Only (or keep inline for both) */}
                       <div className={`flex items-center gap-4 mb-4 ${!isLeft ? "md:flex-row-reverse" : ""}`}>
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-300"
                            style={{ backgroundColor: `${step.color}15` }}
                          >
                            <Icon
                              className="w-7 h-7"
                              style={{ color: step.color }}
                            />
                          </div>
                          <div className={`flex-1 ${!isLeft ? "md:text-right" : ""}`}>
                            <h3 className="titleFont text-[#194479] font-bold text-xl md:text-2xl leading-tight">
                              {step.title}
                            </h3>
                          </div>
                      </div>
                      
                      <p className={`paragraphFont text-gray-700 text-base md:text-lg leading-relaxed ${!isLeft ? "md:text-right" : ""}`}>
                        {step.desc}
                      </p>

                       {/* Mobile Number Badge */}
                       <div className="md:hidden absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#194479] flex items-center justify-center shadow-lg border-2 border-white">
                          <span className="text-white font-bold text-sm">{step.number}</span>
                       </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#194479] to-[#1a4a7f] text-white shadow-lg">
            <Plane className="w-5 h-5" />
            <span className="paragraphFont font-semibold text-base md:text-lg">
              {t("cta")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

