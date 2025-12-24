"use client"

import { motion } from "framer-motion"
import { User, ArrowRight, CheckCircle2, Plane, Clock, Globe } from "lucide-react"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function NfoJoin() {
  const t = useTranslations("NfoJoin")

  const benefits = [
    { icon: Plane, text: t("benefits.0") },
    { icon: Clock, text: t("benefits.1") },
    { icon: Globe, text: t("benefits.2") },
    { icon: CheckCircle2, text: t("benefits.3") },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#91c73e]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#194479]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
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
        <div className="max-w-7xl mx-auto">
          {/* Split Layout: Text Left, Box Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold">
                <User className="w-4 h-4" />
                {t("badge")}
              </div>

              {/* Heading */}
              <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight">
                {t("title")}
              </h2>

              {/* Question */}
              <p className="paragraphFont text-gray-700 text-lg md:text-xl font-medium">
                {t("question")}
              </p>

              {/* Description */}
              <div className="space-y-4">
                <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
                  {t("description1")}
                </p>
                <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
                  {t("description2")}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-gray-100 hover:border-[#91c73e]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#194479]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#194479]" />
                      </div>
                      <p className="paragraphFont text-gray-700 text-sm md:text-base font-medium">
                        {benefit.text}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center justify-center gap-2 bg-[#91c73e] hover:bg-[#7bb033] text-white px-6 py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10 whitespace-nowrap">{t("ctaPrimary")}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#194479] border-2 border-[#194479] px-6 py-4 rounded-xl font-semibold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  <span className="relative z-10 whitespace-nowrap">{t("ctaSecondary")}</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Box with Decorative Elements (Replaces Image) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
                   <Image
                      src="/services/become_nfo.png"
                      alt={t("title")}
                      fill
                      className="object-cover"
                   />
                   <div className="absolute inset-0 bg-black/20" />

                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute top-8 left-8 right-8"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-xl border border-white/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#91c73e] to-[#7bb033] flex items-center justify-center shadow-lg">
                          <Plane className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white">{t("stats.operations.value")}</div>
                          <div className="text-sm text-white/80">{t("stats.operations.label")}</div>
                        </div>
                      </div>
                      <p className="paragraphFont text-white/90 text-sm md:text-base">
                        {t("stats.operations.desc")}
                      </p>
                    </div>
                  </motion.div>

                  {/* Icon Badge - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute bottom-6 right-6"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                      <User className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

