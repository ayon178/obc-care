"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const MedicalMission = () => {
    // Re-using hero translations for generic text or add new keys if needed. 
    // For now, I'll use hardcoded placeholder text or reuse existing ones to prevent key errors?
    // Actually, I should probably reuse "intro" or "cta" keys or be safe.
    // User didn't give text for this section, so I will make it visual predominantly.
  const t = useTranslations("MedicalTransportPage.intro") 
  const isMobile = useIsMobile()

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <img 
                src="/industries/life/man2.png" 
                alt="Dedicated Medical Courier" 
                className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#194479]/90 to-transparent flex items-center">
                <div className="p-8 md:p-16 max-w-2xl text-white">
                    <motion.h2 
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="headingFont text-2xl md:text-4xl font-bold mb-6"
                    >
                        {t("title")} {/* Reusing "Introducing OBC Life Care" or just "OBC Life Care" */}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="paragraphFont text-sm md:text-lg text-white/90 leading-relaxed mb-8"
                    >
                        {t("description3")} {/* Reusing description about hospital needs */}
                    </motion.p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalMission
