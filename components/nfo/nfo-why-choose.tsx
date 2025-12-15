"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Zap, Clock, Globe, Shield, Radio } from "lucide-react"
import { useTranslations } from "next-intl"

export default function NfoWhyChoose() {
  const t = useTranslations("NfoWhyChoose")

  const features = [
    {
      icon: Zap,
      title: t("features.0.title"),
      description: t("features.0.desc"),
      image: "/services/shipment.jpeg",
      color: "#194479",
      gradient: "from-[#194479] to-[#1a4a7f]",
    },
    {
      icon: Clock,
      title: t("features.1.title"),
      description: t("features.1.desc"),
      image: "/services/shipment.jpeg",
      color: "#91c73e",
      gradient: "from-[#91c73e] to-[#7bb033]",
    },
    {
      icon: Globe,
      title: t("features.2.title"),
      description: t("features.2.desc"),
      image: "/services/shipment.jpeg",
      color: "#194479",
      gradient: "from-[#194479] to-[#1a4a7f]",
    },
    {
      icon: Radio,
      title: t("features.3.title"),
      description: t("features.3.desc"),
      image: "/services/shipment.jpeg",
      color: "#91c73e",
      gradient: "from-[#91c73e] to-[#7bb033]",
    },
    {
      icon: Shield,
      title: t("features.4.title"),
      description: t("features.4.desc"),
      image: "/services/shipment.jpeg",
      color: "#194479",
      gradient: "from-[#194479] to-[#1a4a7f]",
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
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#194479]/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 18,
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
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-6">
            {t("title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] mx-auto rounded-full" />
        </motion.div>

        {/* Features Grid - Creative Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 2 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Background */}
                  <div className="relative h-[300px] md:h-[350px] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`} />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      {/* Icon Badge */}
                      <div className="flex justify-between items-start">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div>
                        <h3 className="titleFont text-white font-bold text-2xl md:text-3xl mb-3 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="paragraphFont text-white/90 text-base md:text-lg leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.slice(2).map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#91c73e]/30"
                >
                  {/* Image Section */}
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 md:p-6">
                    <h3 className="titleFont text-[#194479] font-bold text-lg md:text-xl mb-3 group-hover:text-[#91c73e] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Accent Border */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: feature.color }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479] p-8 md:p-10 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/services/shipment.jpeg')] opacity-10 bg-cover bg-center" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="headingFont text-white text-2xl md:text-3xl font-bold mb-3">
                    {t("highlightTitle")}
                  </h3>
                  <p className="paragraphFont text-white/90 text-base md:text-lg">
                    {t("highlightDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

