"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ObcWhatIs() {
  const t = useTranslations("ObcWhatIs")
  const isMobile = useIsMobile()

  return (
    <section
      className="relative py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-[#194479]/10 text-[#194479] text-[10px] sm:text-[11px]">
              {t("badge")}
            </span>
            <h2 className="headingFont mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#194479] leading-tight">
              {t("title")}
            </h2>
            <div className="paragraphFont mt-3 space-y-3 text-gray-700">
              <p className="text-[13px] sm:text-sm md:text-base">
                {t("p1")}
              </p>
              <p className="text-[13px] sm:text-sm md:text-base">
                {t("p2")}
              </p>
              <p className="text-[13px] sm:text-sm md:text-base">
                {t("p3")}
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <div className="pointer-events-none absolute " />
              <Image
                src="/services/onboard_1.png"
                alt={t("imageAlt")}
                width={1200}
                height={900}
                className="h-[260px] sm:h-[320px] md:h-[380px] w-full object-cover"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
