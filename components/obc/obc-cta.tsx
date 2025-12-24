"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function ObcCta() {
  const t = useTranslations("ObcCta")

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
            <div className="relative z-10 text-center space-y-6">
              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                {t("title")}
              </motion.h2>

              {/* Reassurance Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="paragraphFont text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              >
                {t("description")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                {/* Primary CTA */}
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center gap-2 bg-[#91c73e] hover:bg-[#7bb033] text-white px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
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
                  <span className="relative z-10 font-semibold text-base md:text-lg">
                    {t("primary")}
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary CTA - Desktop only */}
                <Link
                  href="tel:+4917645922485"
                  className="hidden md:flex buttonFont items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 hover:border-white/50 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-base md:text-lg">
                    {t("secondary")}
                  </span>
                </Link>
              </motion.div>

              {/* Contact Info - Mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="md:hidden flex flex-col items-center gap-3 pt-4 border-t border-white/20"
              >
                <a
                  href="tel:+4917645922485"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+49 176 459 224 85</span>
                </a>
                <a
                  href="mailto:request@obc-care.com"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">request@obc-care.com</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

