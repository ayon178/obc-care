"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function ObcWhatIs() {
  const t = useTranslations("ObcWhatIs")

  return (
    <section
      className="relative py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
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
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
              <Image
                src="/services/onboard_1.png"
                alt={t("imageAlt")}
                width={1200}
                height={900}
                className="h-[260px] sm:h-[320px] md:h-[380px] w-full object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
