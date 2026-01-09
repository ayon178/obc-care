"use client"

import { motion } from "framer-motion"
import { Cog, Wrench, Settings, Factory, Package } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function IndustrialWhatWeHandle() {
  const t = useTranslations("IndustrialWhatWeHandle")
  const isMobile = useIsMobile()

  const items = [
    {
      icon: Cog,
      title: t("items.0.title"),
      color: "#194479",
    },
    {
      icon: Wrench,
      title: t("items.1.title"),
      color: "#91c73e",
    },
    {
      icon: Settings,
      title: t("items.2.title"),
      color: "#194479",
    },
    {
      icon: Factory,
      title: t("items.3.title"),
      color: "#91c73e",
    },
    {
      icon: Package,
      title: t("items.4.title"),
      color: "#194479",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="paragraphFont text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Items Grid - Clean Professional Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {items.map((item, index) => {
              const Icon = item.icon
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#91c73e]/50">
                    {/* Top Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ backgroundColor: item.color }}
                    />
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: item.color }}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="titleFont text-[#194479] font-bold text-base md:text-lg leading-tight mb-4">
                        {item.title}
                      </h3>
                      
                      {/* Accent Line with Dot */}
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

