"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Globe2, ShieldCheck } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutIntro() {
  const t = useTranslations("AboutIntro")

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#91c73e] font-bold tracking-wider uppercase mb-2">{t("whoWeAre")}</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#194479] mb-6 leading-tight">
              {t("title")} <br />
              <span className="text-gray-700 font-normal text-2xl">{t("subtitle")}</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p>
                {t("p1")}
              </p>
              <p>
                {t("p2")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">{t("features.globalNetwork")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">{t("features.support")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">{t("features.secureDelivery")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">{t("features.realTimeTracking")}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.png" // Using placeholder/existing image
                alt="OBC Care Logistics"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay Shape */}
            <div className="absolute bottom-0 right-0 w-3/4 bg-[#194479]/90 backdrop-blur-sm p-8 rounded-tl-[100px] text-white">
              <div className="flex flex-col gap-6 pl-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#91c73e] rounded-full">
                    <Globe2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t("imageOverlay.network.title")}</h4>
                    <p className="text-sm text-gray-300">{t("imageOverlay.network.desc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#91c73e] rounded-full">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t("imageOverlay.secure.title")}</h4>
                    <p className="text-sm text-gray-300">{t("imageOverlay.secure.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
