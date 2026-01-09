"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function IndustriesIntro() {
  const t = useTranslations("IndustriesIntro")
  const isMobile = useIsMobile()

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #194479 1px, transparent 0)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="paragraphFont text-gray-700 text-base md:text-xl leading-relaxed">
            {t("text")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

