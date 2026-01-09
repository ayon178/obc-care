"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { CheckCircle2, FlaskRound, ThermometerSnowflake, Activity, Microscope, Box } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const MedicalWhatWeHandle = () => {
  const t = useTranslations("MedicalTransportPage.whatWeHandle")
  const isMobile = useIsMobile()

  const itemsData = [
    { icon: Microscope, color: "#194479" }, // Stem Cells
    { icon: Activity, color: "#91c73e" },   // Cord Blood
    { icon: FlaskRound, color: "#194479" }, // Biological Samples
    { icon: Box, color: "#91c73e" },        // Medical Equipment
    { icon: ThermometerSnowflake, color: "#194479" }, // Cryogenic
  ]

  const items = itemsData.map((item, index) => ({
    ...item,
    name: t(`items.${index}`) // Using 'name' since the JSON has flat strings at indices
  }))

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image (Left) */}
            <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl lg:order-1"
            >
                <img 
                    src="/industries/life/man2.png"
                    alt="Medical Equipment Handling"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content (Right) */}
            <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:order-2"
            >
                <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] mb-4">
                  {t("title")}
                </h2>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                  {t("description")}
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {items.map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center gap-4 group"
                      >
                        <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                            style={{ backgroundColor: `${item.color}15` }}
                          >
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                          </div>
                        <h3 className="headingFont font-bold text-[#194479] text-sm md:text-base group-hover:text-[#91C73E] transition-colors">
                            {item.name}
                        </h3>
                      </motion.div>
                  ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MedicalWhatWeHandle
