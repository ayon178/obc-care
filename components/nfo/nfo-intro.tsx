"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Zap, Shield } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"

export default function NfoIntro() {
  const t = useTranslations("NfoIntro")

  const features = [
    {
      icon: Clock,
      title: t("features.0.title"),
    },
    {
      icon: Globe,
      title: t("features.1.title"),
    },
    {
      icon: Zap,
      title: t("features.2.title"),
    },
    {
      icon: Shield,
      title: t("features.3.title"),
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#91c73e]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#194479]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-6">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] mx-auto rounded-full" />
        </motion.div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Large Box Card - Left Side (Replaces Image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/services/next_flight_first.png" 
                alt={t("title")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Floating Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10">
                  <p className="paragraphFont text-white text-sm md:text-base leading-relaxed mb-4">
                    {t("imageCardText1")}
                  </p>
                  <p className="paragraphFont text-white text-sm md:text-base leading-relaxed">
                    {t("imageCardText2")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text and Feature Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Text Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100"
            >
              <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                {t("textCard1")}
              </p>
              <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                {t("textCard2")}
              </p>
            </motion.div>

            {/* Feature Cards Grid (Replaces Feature Images) */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-[110px] md:h-[120px] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] group-hover:from-[#194479] group-hover:to-[#1a4a7f] transition-colors duration-500">
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#194479] group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="headingFont text-[#194479] text-base font-bold group-hover:text-white transition-colors duration-300">
                          {feature.title}
                        </h3>
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
