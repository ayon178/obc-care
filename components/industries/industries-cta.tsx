"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function IndustriesCta() {
  const t = useTranslations("IndustriesCta")

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background Band */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479]" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium CTA Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden">
            {/* Shine effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              animate={{
                translateX: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center space-y-5 md:space-y-6">
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-2"
              >
                <div className="w-14 h-14 rounded-full bg-[#91c73e]/20 flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-[#91c73e]" />
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold">
                  {t("badge")}
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
              >
                {/* Primary CTA */}
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center gap-2 bg-[#91c73e] hover:bg-[#7bb033] text-white px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden whitespace-nowrap"
                >
                  {/* Shine effect on button */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    whileHover={{
                      translateX: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  />
                  <span className="relative z-10 font-semibold text-base md:text-lg whitespace-nowrap">
                    {t("primary")}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 hover:border-white/50 whitespace-nowrap"
                >
                  <span className="font-semibold text-base md:text-lg whitespace-nowrap">
                    {t("secondary")}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

