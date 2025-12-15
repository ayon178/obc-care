"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Shield, Eye, Globe2, CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

export default function NfoWhyImportant() {
  const t = useTranslations("NfoWhyImportant")

  const benefits = [
    {
      icon: Clock,
      title: t("benefits.0.title"),
      description: t("benefits.0.desc"),
      image: "/services/shipment.jpeg",
      color: "#194479",
    },
    {
      icon: Shield,
      title: t("benefits.1.title"),
      description: t("benefits.1.desc"),
      image: "/services/shipment.jpeg",
      color: "#91c73e",
    },
    {
      icon: Eye,
      title: t("benefits.2.title"),
      description: t("benefits.2.desc"),
      image: "/services/shipment.jpeg",
      color: "#194479",
    },
    {
      icon: Globe2,
      title: t("benefits.3.title"),
      description: t("benefits.3.desc"),
      image: "/services/shipment.jpeg",
      color: "#91c73e",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#194479 1px, transparent 1px),
              linear-gradient(90deg, #194479 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#91c73e]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#194479]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-6 max-w-4xl mx-auto">
              {t("title")}
            </h2>
            <p className="paragraphFont text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Benefits Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                    {/* Image Section */}
                    <div className="relative h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, ${benefit.color}00, ${benefit.color}E6)`,
                        }}
                      />
                      
                      {/* Icon Badge - Top Right */}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>

                      {/* Checkmark Badge - Top Left */}
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-full bg-[#91c73e] flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 md:p-6 bg-white">
                      <h3 className="titleFont text-[#194479] font-bold text-lg md:text-xl mb-3 group-hover:text-[#91c73e] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Accent Border Bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: benefit.color }}
                    />
                  </div>

                  {/* Floating Decorative Element */}
                  <motion.div
                    className="absolute -z-10 -top-2 -right-2 w-24 h-24 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: benefit.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 md:mt-16 max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#194479] to-[#1a4a7f] p-8 md:p-10 shadow-2xl">
              <div className="absolute inset-0 bg-[url('/services/shipment.jpeg')] opacity-10 bg-cover bg-center" />
              <div className="relative z-10 text-center text-white">
                <h3 className="headingFont text-2xl md:text-3xl font-bold mb-4">
                  {t("ctaTitle")}
                </h3>
                <p className="paragraphFont text-white/90 text-base md:text-lg max-w-2xl mx-auto">
                  {t("ctaDesc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

