"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {  ClipboardCheck, Radio, Clock, Thermometer, ShieldCheck, AlertTriangle } from "lucide-react"

const MedicalHowWeSaveLives = () => {
  const t = useTranslations("MedicalTransportPage.howWeSaveLives")

  const steps = [
    { icon: ClipboardCheck, key: "0" },
    { icon: Radio, key: "1" },
    { icon: Clock, key: "2" },
    { icon: Thermometer, key: "3" },
    { icon: ShieldCheck, key: "4" },
    { icon: AlertTriangle, key: "5" },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-[#194479]/10 text-[#194479] text-xs font-semibold mb-4">
            Process
          </span>
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-5 group-hover:bg-[#91C73E] transition-colors duration-300">
                <step.icon className="w-6 h-6 text-[#194479] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="headingFont text-lg font-bold text-[#194479] mb-3">
                {t(`items.${step.key}.title`)}
              </h3>
              <p className="paragraphFont text-sm text-gray-600 leading-relaxed">
                {t(`items.${step.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center max-w-4xl mx-auto bg-[#194479] text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
        >
            <p className="text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line">
                {t("closing")}
            </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MedicalHowWeSaveLives
