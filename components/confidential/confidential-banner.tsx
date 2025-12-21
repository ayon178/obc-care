"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function ConfidentialBanner() {
  const t = useTranslations("ConfidentialBanner")

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/industries/high_value/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlays for text visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,26,42,0.92),rgba(10,26,42,0.75)_40%,rgba(10,26,42,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_10%,rgba(145,199,62,0.15),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0a1a2a]/60 via-transparent to-transparent" />

      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex h-full items-center justify-end pt-32 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-right ml-auto relative z-30"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-white/20"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              <FileText className="w-3 h-3" />
              {t("badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="headingFont mt-2 text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="paragraphFont mt-4 text-white/90 text-sm md:text-base leading-relaxed"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end"
            >
              <Link
                href="/inquiry"
                className="buttonFont group relative w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-white text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #91C73E 0%, #7bb033 60%)",
                }}
              >
                <span>{t("ctaRequest")}</span>
              </Link>
              <Link
                href="/inquiry"
                className="buttonFont w-full sm:w-auto py-3 px-5 rounded-xl text-sm md:text-base font-semibold text-[#194479] bg-white hover:bg-white/90 transition-colors text-center"
              >
                {t("ctaQuote")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


