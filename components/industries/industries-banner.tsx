"use client"

import { motion } from "framer-motion"
import { Factory } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function IndustriesBanner() {
  const t = useTranslations("IndustriesBanner")

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      style={{
        backgroundImage: "url('/industries/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,26,42,0.85),rgba(10,26,42,0.4)_40%,rgba(10,26,42,0.85))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_80%_10%,rgba(145,199,62,0.18),transparent)] pointer-events-none" />

      <div className="container relative z-10 mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-end pt-32 md:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl text-right ml-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/10 text-white/90 text-[10px] sm:text-[11px] backdrop-blur self-end"
            >
              <Factory className="w-3 h-3" />
              {t("badge")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="headingFont mt-2 text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight drop-shadow-2xl"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="paragraphFont mt-3 text-white/95 text-[11px] sm:text-xs md:text-sm max-w-2xl drop-shadow-lg text-right ml-auto"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end sm:justify-end sm:self-end"
            >
              <Link
                href="#industries"
                className="buttonFont group relative w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-white text-sm md:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #91C73E 0%, #7bb033 60%)",
                }}
              >
                <span>{t("ctaExplore")}</span>
              </Link>
              <Link
                href="/inquiry"
                className="buttonFont w-full sm:w-auto py-3 px-5 rounded-xl text-sm md:text-base font-semibold text-[#194479] bg-white hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
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

