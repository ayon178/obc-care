"use client"

import { motion } from "framer-motion"
import { Users, Truck, Clock, Globe, Shield, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"

const benefits = [
  {
    icon: Truck,
  },
  {
    icon: Clock,
  },
  {
    icon: Clock,
  },
  {
    icon: Globe,
  },
]

export default function FmlmJoin() {
  const t = useTranslations("FmlmJoin")
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold"
            >
              <Truck className="w-4 h-4" />
              <span>Join Our Team</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight"
            >
              Become a First & Last Mile Driver
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="paragraphFont text-blue-50/90 text-sm md:text-lg leading-relaxed"
            >
              {t("description1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="paragraphFont text-blue-50/90 text-sm md:text-lg leading-relaxed"
            >
              {t("description2")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="paragraphFont text-blue-50/90 text-sm md:text-lg leading-relaxed"
            >
              {t("description3")}
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#91c73e]" />
                    </div>
                    <div>
                      <h3 className="titleFont text-white font-semibold text-sm sm:text-base mb-1">
                        {t(`benefits.${index}.title`)}
                      </h3>
                      <p className="paragraphFont text-blue-100/70 text-xs sm:text-sm">
                        {t(`benefits.${index}.description`)}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfWC80Mi-efCNpZFLBif3nK_Bzt5QoFAVct2bTk04lakDk8JQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="buttonFont inline-flex items-center gap-2 bg-[#91c73e] hover:bg-[#86b83a] text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                <span>{t("ctaApply")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="buttonFont inline-flex items-center gap-2 bg-white border-2 border-[#194479] hover:bg-[#194479] hover:text-white text-[#194479] px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                <span>{t("ctaContact")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/10 backdrop-blur-md">
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <Image
                  src="/services/join-team.jpeg"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  priority={false}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/20 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#91c73e]/20 backdrop-blur-sm border border-[#91c73e]/30 flex items-center justify-center">
                <Truck className="w-8 h-8 text-[#91c73e]" />
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <p className="titleFont text-2xl font-bold text-[#194479]">
                    500+
                  </p>
                  <p className="paragraphFont text-xs text-gray-600">
                    Active Drivers
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

