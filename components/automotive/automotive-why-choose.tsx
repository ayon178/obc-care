"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Clock, Eye } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function AutomotiveWhyChoose() {
  const t = useTranslations("AutomotiveWhyChoose")

  const benefits = [
    {
      icon: Shield,
      title: t("benefits.0.title"),
      description: t("benefits.0.desc"),
      color: "#194479",
    },
    {
      icon: Zap,
      title: t("benefits.1.title"),
      description: t("benefits.1.desc"),
      color: "#91c73e",
    },
    {
      icon: Clock,
      title: t("benefits.2.title"),
      description: t("benefits.2.desc"),
      color: "#194479",
    },
    {
      icon: Eye,
      title: t("benefits.3.title"),
      description: t("benefits.3.desc"),
      color: "#91c73e",
    },
  ]

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

          {/* Benefits - Creative Overlapping Cards Layout */}
          <div className="relative mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                const isEven = index % 2 === 0
                
                return (
                  <motion.div
                    key={index} // Changed key to index
                    initial={{ opacity: 0, y: 40, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group relative"
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Main Card */}
                    <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                      {/* Animated Background Gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}05)`
                        }}
                      />
                      
                      {/* Icon with Glow Effect */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="relative inline-block"
                        >
                          <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
                            style={{ backgroundColor: `${benefit.color}30` }}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          {/* Glow Effect */}
                          <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ backgroundColor: benefit.color }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="titleFont text-white font-bold text-xl md:text-2xl mb-3 group-hover:text-[#91c73e] transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{ backgroundColor: benefit.color }}
                      />
                    </div>
                    
                    {/* Floating Number Badge */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#91c73e] flex items-center justify-center shadow-xl border-4 border-[#194479] z-20">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Bottom Image Card */}
         
        </div>
      </div>
    </section>
  )
}

