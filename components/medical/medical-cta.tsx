"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "@/i18n/routing"

const MedicalCta = () => {
  const t = useTranslations("MedicalTransportPage.cta")
  const router = useRouter()

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#91C73E]/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#194479]/5 rounded-tr-full -ml-12 -mb-12" />
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="headingFont text-2xl md:text-4xl font-bold text-[#194479] mb-4"
            >
              {t("title")}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="paragraphFont text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {t("description")}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <Button 
                onClick={() => router.push("/inquiry")}
                className="bg-[#91C73E] hover:bg-[#82b336] text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                {t("btnPrimary")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-xs md:text-sm text-gray-500 font-medium">
                {t("subtext")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalCta
