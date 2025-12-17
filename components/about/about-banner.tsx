"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutBanner() {
  const t = useTranslations("AboutBanner")

  return (
    <section className="relative pt-20 h-[450px] w-full overflow-hidden bg-[#194479]">
      {/* Background Pattern/Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/world_map.jpg')", // Using existing map image if available, or placeholder
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#194479]/80 to-[#194479]" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-base mb-4 text-gray-300">
            <Link href="/" className="hover:text-[#91c73e] transition-colors">{t("breadcrumbHome")}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#91c73e]">{t("breadcrumbAbout")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t("title")}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light mb-3">
            {t("description")}
          </p>
          <p className="text-sm md:text-md text-gray-300 max-w-2xl mx-auto font-light">
            {t("description2")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
