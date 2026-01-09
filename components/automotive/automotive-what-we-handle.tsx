"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Wrench, Cog, Package, Settings, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AutomotiveWhatWeHandle() {
  const t = useTranslations("AutomotiveWhatWeHandle")
  const isMobile = useIsMobile()

  const items = [
    {
      icon: Package,
      title: t("items.0.title"),
      color: "#194479",
    },
    {
      icon: Wrench,
      title: t("items.1.title"),
      color: "#91c73e",
    },
    {
      icon: Cog,
      title: t("items.2.title"),
      color: "#194479",
    },
    {
      icon: Settings,
      title: t("items.3.title"),
      color: "#91c73e",
    },
    {
      icon: FileText,
      title: t("items.4.title"),
      color: "#194479",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#91c73e]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#194479]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.6 : 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="paragraphFont text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Items - Clean Professional Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => {
              const Icon = item.icon
              
              return (
                <motion.div
                  key={index} // Changed key to index as title is dynamic
                  initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: isMobile ? index * 0.05 : index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#91c73e]/30">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] rounded-2xl"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${item.color} 1px, transparent 0)`,
                        backgroundSize: '16px 16px'
                      }}
                    />
                    
                    {/* Icon with Checkmark */}
                    <div className="relative mb-4">
                      <div className="relative inline-block">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <Icon
                            className="w-8 h-8"
                            style={{ color: item.color }}
                          />
                        </div>
                        <CheckCircle2 className="absolute -top-1 -right-1 w-5 h-5 text-[#91c73e] bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="titleFont text-[#194479] font-bold text-base md:text-lg mb-4 leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Separator Line */}
                      <div className="flex items-center">
                        <div className="h-0.5 flex-1 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="w-1.5 h-1.5 rounded-full ml-2"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

