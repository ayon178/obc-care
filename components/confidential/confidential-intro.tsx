"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ConfidentialIntro() {
  const t = useTranslations("ConfidentialIntro")
  const isMobile = useIsMobile()

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.6 : 0.8 }}
              className="space-y-6"
            >
              <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight">
                {t("title")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] rounded-full" />
              
              <div className="space-y-4">
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  {t("p1")}
                </p>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  {t("p2")}
                </p>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  {t("p3")}
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src="/industries/high_value/1.png"
                    alt="Confidential Document Delivery"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/40 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

