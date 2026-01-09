"use client"

import { motion } from "framer-motion"
import { Handshake, FileCheck, Globe, Shield, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

const benefitIcons = [
  FileCheck,
  Globe,
  Shield,
  Handshake,
]

export default function CustomsJoin() {
  const t = useTranslations("CustomsJoin")
  const isMobile = useIsMobile()

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              <Handshake className="w-4 h-4" />
              <span>{t("badge")}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="headingFont text-2xl sm:text-3xl md:text-4xl font-bold text-[#194479] leading-tight"
            >
              {t("title")}
            </motion.h2>

            {/* Question */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed font-semibold"
            >
              {t("question")}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {t("description1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {t("description2")}
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {benefitIcons.map((Icon, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#91c73e]/60 transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#194479]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#194479]" />
                    </div>
                    <div>
                      <h3 className="titleFont text-[#194479] font-semibold text-sm sm:text-base mb-1">
                        {t(`benefits.${i}.title`)}
                      </h3>
                      <p className="paragraphFont text-gray-600 text-xs sm:text-sm">
                        {t(`benefits.${i}.description`)}
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
                href="/inquiry"
                className="buttonFont inline-flex items-center gap-2 bg-[#194479] hover:bg-[#153666] text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{t("ctaApply")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="buttonFont inline-flex items-center gap-2 bg-white border-2 border-[#194479] hover:bg-[#194479] hover:text-white text-[#194479] px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{t("ctaContact")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <Image
                src="/services/become_a_customer.png"
                alt={t("imageAlt")}
                width={1200}
                height={900}
                className="h-[400px] sm:h-[500px] md:h-[600px] w-full object-cover object-right"
                priority={false}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/20 via-transparent to-transparent" />

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#91c73e]/20 backdrop-blur-sm border border-[#91c73e]/30 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-[#91c73e]" />
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <p className="titleFont text-2xl font-bold text-[#194479]">
                    {t("stats.value")}
                  </p>
                  <p className="paragraphFont text-xs text-gray-600">
                    {t("stats.label")}
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

