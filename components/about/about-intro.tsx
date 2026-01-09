"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Globe2, ShieldCheck } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AboutIntro() {
  const t = useTranslations("AboutIntro")
  const isMobile = useIsMobile()

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
          >
            <h4 className="text-[#91c73e] font-bold tracking-wider uppercase mb-2">{t("whoWeAre")}</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#194479] mb-6 leading-tight">
              {t("title")} <br />
              <span className="text-gray-700 font-normal text-2xl">{t("subtitle")}</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              
              {/* Quote Block */}
              <div className="border-l-4 border-[#91c73e] pl-4 italic text-[#194479] font-medium text-lg my-6">
                {t("quote")}
              </div>

              <p>{t("p3")}</p>
            </div>

            {/* Features removed to match user content */}
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 20 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl bg-gray-50/50 border border-gray-100">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image
                  src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                  alt="OBC Care Logo"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
