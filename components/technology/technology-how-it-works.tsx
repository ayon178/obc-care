"use client"

import { motion } from "framer-motion"
import { Radio, Package, Plane, FileCheck, Building2 } from "lucide-react"
import { useTranslations } from "next-intl"

export default function TechnologyHowItWorks() {
  const t = useTranslations("TechnologyHowItWorks")

  const steps = [
    {
      number: "01",
      title: t("steps.0.title"),
      desc: t("steps.0.desc"),
      icon: Radio,
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
      icon: FileCheck,
      color: "#91c73e",
    },
    {
      number: "05",
      title: t("steps.4.title"),
      desc: t("steps.4.desc"),
      icon: Building2,
      color: "#194479",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #194479 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
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
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="paragraphFont text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Steps - Clean Horizontal Flow Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-white shadow-md border-4 flex items-center justify-center"
                          style={{ borderColor: step.color }}
                        >
                          <div className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: step.color }}
                          />
                          <Icon className="w-8 h-8 text-white relative z-10" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                          style={{ borderColor: step.color }}
                        >
                          <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="titleFont text-[#194479] font-bold text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="paragraphFont text-gray-700 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-[#194479]/30 to-[#91c73e]/30" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Desktop: Horizontal Flow without Center Hub */}
          <div className="hidden lg:block">
            <div className="relative space-y-6">
              {/* Top Row - Steps 1, 2, 3 */}
              <div className="grid grid-cols-3 gap-6">
                {steps.slice(0, 3).map((step, i) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="relative"
                    >
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 group h-full">
                        {/* Icon */}
                        <div className="relative mb-4 flex justify-center">
                          <div
                            className="relative w-16 h-16 rounded-full bg-white shadow-md border-4 flex items-center justify-center"
                            style={{ borderColor: step.color }}
                          >
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: step.color }}
                            />
                            <Icon className="w-8 h-8 text-white relative z-10" />
                          </div>
                          {/* Number Badge */}
                          <div
                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                            style={{ borderColor: step.color }}
                          >
                            <span
                              className="text-xs font-bold"
                              style={{ color: step.color }}
                            >
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="titleFont text-[#194479] font-bold text-base mb-2 group-hover:text-[#91c73e] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="paragraphFont text-gray-700 text-xs leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Bottom Row - Steps 4, 5 */}
              <div className="flex justify-center gap-6">
                {steps.slice(3, 5).map((step, i) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: (i + 3) * 0.15 }}
                      className="relative"
                      style={{ width: "calc((100% - 48px) / 3)" }}
                    >
                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 group h-full">
                        {/* Icon */}
                        <div className="relative mb-4 flex justify-center">
                          <div
                            className="relative w-16 h-16 rounded-full bg-white shadow-md border-4 flex items-center justify-center"
                            style={{ borderColor: step.color }}
                          >
                            <div
                              className="absolute inset-0 rounded-full"
                              style={{ backgroundColor: step.color }}
                            />
                            <Icon className="w-8 h-8 text-white relative z-10" />
                          </div>
                          {/* Number Badge */}
                          <div
                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                            style={{ borderColor: step.color }}
                          >
                            <span
                              className="text-xs font-bold"
                              style={{ color: step.color }}
                            >
                              {step.number}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="titleFont text-[#194479] font-bold text-base mb-2 group-hover:text-[#91c73e] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="paragraphFont text-gray-700 text-xs leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

