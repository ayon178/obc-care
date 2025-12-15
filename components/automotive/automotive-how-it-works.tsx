"use client"

import { motion } from "framer-motion"
import { Search, Plane, Truck, FileCheck, Radio, Factory } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AutomotiveHowItWorks() {
  const t = useTranslations("AutomotiveHowItWorks")

  const steps = [
    {
      number: "01",
      title: t("steps.0.title"),
      desc: t("steps.0.desc"),
      icon: Search,
      color: "#194479",
    },
    {
      number: "02",
      title: t("steps.1.title"),
      desc: t("steps.1.desc"),
      icon: Plane,
      color: "#91c73e",
    },
    {
      number: "03",
      title: t("steps.2.title"),
      desc: t("steps.2.desc"),
      icon: FileCheck,
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
      icon: Factory,
      color: "#194479",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
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

        {/* Steps - Zigzag Flow Layout (Unique Creative Design) */}
        <div className="relative max-w-6xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}
                >
                  {/* Icon Circle with Number */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-24 h-24 rounded-full bg-white shadow-2xl border-4 flex items-center justify-center z-20"
                      style={{ borderColor: step.color }}
                    >
                      <div className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                      <Icon className="w-10 h-10 text-white relative z-10" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center border-2"
                        style={{ borderColor: step.color }}
                      >
                        <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
                      </div>
                    </motion.div>
                    
                    {/* Arrow Connector - Desktop Only */}
                    {i < steps.length - 1 && (
                      <div className={`hidden md:block absolute top-1/2 ${isEven ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-16 z-10`}>
                        <div className="h-1 w-full"
                          style={{ backgroundColor: step.color }}
                        />
                        {isEven ? (
                          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-l-[12px] border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent"
                            style={{ borderLeftColor: step.color }}
                          />
                        ) : (
                          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-0 border-r-[12px] border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent"
                            style={{ borderRightColor: step.color }}
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 group">
                      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-4`}>
                        <div className="flex-1">
                          <h3 className="titleFont text-[#194479] font-bold text-xl md:text-2xl mb-3 group-hover:text-[#91c73e] transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Accent Corner */}
                      <div className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-20 h-20 opacity-10`}
                        style={{ 
                          background: `linear-gradient(${isEven ? '135deg' : '225deg'}, ${step.color}, transparent)`
                        }}
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

