"use client"

import { motion } from "framer-motion"
import {
  Plane,
  Car,
  Cpu,
  Cog,
  Server,
  FileText,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const industriesData = [
  {
    icon: Plane,
    color: "#194479",
    gradient: "from-[#194479] to-[#1a4a7f]",
    image: "/services/shipment.jpeg",
  },
  {
    icon: Car,
    color: "#91c73e",
    gradient: "from-[#91c73e] to-[#7bb033]",
    image: "/services/shipment.jpeg",
  },
  {
    icon: Cpu,
    color: "#194479",
    gradient: "from-[#194479] to-[#1a4a7f]",
    image: "/services/shipment.jpeg",
  },
  {
    icon: Cog,
    color: "#91c73e",
    gradient: "from-[#91c73e] to-[#7bb033]",
    image: "/services/shipment.jpeg",
  },
  {
    icon: Server,
    color: "#194479",
    gradient: "from-[#194479] to-[#1a4a7f]",
    image: "/services/shipment.jpeg",
  },
  {
    icon: FileText,
    color: "#91c73e",
    gradient: "from-[#91c73e] to-[#7bb033]",
    image: "/services/shipment.jpeg",
  },
]

export default function IndustriesSupported() {
  const t = useTranslations("IndustriesSupported")

  const industries = industriesData.map((ind, index) => ({
    ...ind,
    title: t(`industries.${index}.title`),
    description: t(`industries.${index}.desc`),
  }))

  return (
    <section
      id="industries"
      className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden"
    >
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
            <Plane className="w-4 h-4" />
            {t("badge")}
          </div>
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="paragraphFont text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#91c73e]/30">
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}
                    />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="titleFont text-[#194479] font-bold text-lg md:text-xl mb-3 group-hover:text-[#91c73e] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    {/* Accent Line */}
                    <div
                      className="h-1 rounded-full"
                      style={{ backgroundColor: industry.color }}
                    />
                  </div>

                  {/* Hover Arrow Indicator */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-5 h-5 text-[#91c73e]" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

