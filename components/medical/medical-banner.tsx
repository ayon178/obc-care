"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ClipboardList } from "lucide-react"

const MedicalBanner = () => {
  const t = useTranslations("MedicalTransportPage.hero")

  return (
    <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-[#000]/50 z-10" />
        <img
          src="/industries/life/banner.png"
          alt="Time-Critical Medical Transport"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center text-white pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] sm:text-xs backdrop-blur mb-6 border border-white/20"
            >
              <ClipboardList className="w-3 h-3" />
              {t("badge")}
            </motion.span>
          <h1 className="headingFont text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-2xl">
            {t("titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#91C73E] to-[#b8e075]">{t("titleSuffix")}</span>
          </h1>
          <p className="paragraphFont text-sm md:text-base max-w-2xl mx-auto mb-8 text-gray-200 leading-relaxed font-light drop-shadow-md">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
                onClick={() => document.getElementById('medical-intro')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#91C73E] hover:bg-[#82b336] text-white text-sm md:text-base px-6 py-5 h-auto rounded-full shadow-[0_0_20px_rgba(145,199,62,0.3)] transition-all font-semibold"
              >
                {t("btnDetails")}
              </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MedicalBanner
