"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const MedicalIntro = () => {
  const t = useTranslations("MedicalTransportPage.intro")
  const isMobile = useIsMobile()

  return (
    <section id="medical-intro" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left"
            >
                <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] mb-6 leading-tight">
                    {t("title")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] rounded-full mb-8" />
                
                <div className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                    <p>{t("description1")}</p>
                    <p className="font-semibold text-[#194479]">{t("description2")}</p>
                    <p>{t("description3")}</p>
                    <div className="bg-gray-50 border-l-4 border-[#91C73E] p-4 rounded-r-lg mt-6">
                        <p className="italic text-gray-600">{t("description4")}</p>
                    </div>
                </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
                <img
                    src="/industries/life/banner.png"
                    alt="Medical Transport Courier"
                    className="w-full h-auto object-top"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-transparent to-transparent" />
                 {/* <div className="absolute top-6 left-6 right-6 text-white p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <p className="font-bold text-lg mb-1">OBC Life Care</p>
                    <p className="text-xs opacity-90">Specialized Medical Logistics</p>
                 </div> */}
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MedicalIntro
