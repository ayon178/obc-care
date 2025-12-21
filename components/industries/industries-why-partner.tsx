"use client"

import { motion } from "framer-motion"
import { Globe, Clock, Radio, Target } from "lucide-react"
import { useTranslations } from "next-intl"

const benefitsData = [
  { icon: Globe, color: "#194479" },
  { icon: Clock, color: "#91c73e" },
  { icon: Radio, color: "#194479" },
  { icon: Target, color: "#91c73e" },
]

export default function IndustriesWhyPartner() {
  const t = useTranslations("IndustriesWhyPartner")

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
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#91c73e]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
              {t("title")}
            </h2>
          </motion.div>

          {/* Split Layout: Benefits Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Benefits Grid */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#91c73e]/30">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${benefit.color}15` }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: benefit.color }}
                          />
                        </div>
                        <div className="flex-1">
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

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-[500px] md:h-[600px]">
                  <div className="absolute inset-0 bg-[#194479] overflow-hidden">
                    {/* Gradient Mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#194479] via-[#1e528f] to-[#12335b]" />
                    
                    {/* Grid Pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.08]" 
                      style={{ 
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                      }} 
                    />

                    {/* Abstract Shapes */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#91c73e]/20 rounded-full blur-3xl mix-blend-soft-light" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl mix-blend-soft-light" />
                    
                    {/* Decorative Concentric Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-white/5 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/10 rounded-full" />
                    
                    {/* Floating Particles (Static representation) */}
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#91c73e]/60 rounded-full shadow-[0_0_10px_rgba(145,199,62,0.5)]" />
                    <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/40 rounded-full blur-[1px]" />
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-3xl font-bold text-[#194479] mb-1">
                            24/7
                          </div>
                          <div className="text-xs text-gray-600">
                            {t("stats.operations")}
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#91c73e] mb-1">
                            100%
                          </div>
                          <div className="text-xs text-gray-600">
                            {t("stats.visibility")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

