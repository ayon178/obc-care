"use client"

import { motion } from "framer-motion"
import { Plane, Truck, Globe, Bell } from "lucide-react"





import { useTranslations } from "next-intl"

export default function KeyHighlights() {
  const t = useTranslations("KeyHighlights")

  const highlights = [
    {
      icon: Plane,
      title: t("items.0.title"),
      description: t("items.0.description"),
      color: "#194479",
      gradient: "from-[#194479] to-[#1d5a96]",
    },
    {
      icon: Truck,
      title: t("items.1.title"),
      description: t("items.1.description"),
      color: "#91C73E",
      gradient: "from-[#91C73E] to-[#7bb033]",
    },
    {
      icon: Globe,
      title: t("items.2.title"),
      description: t("items.2.description"),
      color: "#194479",
      gradient: "from-[#194479] to-[#1d5a96]",
    },
    {
      icon: Bell,
      title: t("items.3.title"),
      description: t("items.3.description"),
      color: "#91C73E",
      gradient: "from-[#91C73E] to-[#7bb033]",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#91C73E]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#194479]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider uppercase inline-block mb-4"
            style={{ color: "#91C73E" }}
          >
            {t("label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#194479" }}
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto w-24 h-1 rounded-full"
            style={{ backgroundColor: "#91C73E" }}
          />
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"
                      style={{ backgroundColor: highlight.color }}
                    />
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center relative overflow-hidden"
                      style={{ 
                        backgroundColor: `${highlight.color}15`,
                      }}
                    >
                      {/* Icon background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Icon with gradient */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        <Icon 
                          className="w-8 h-8" 
                          style={{ color: highlight.color }}
                        />
                      </motion.div>
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: "#194479" }}
                  >
                    {highlight.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300"
                  >
                    {highlight.description}
                  </motion.p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="mt-6 h-1 w-16 rounded-full"
                    style={{ backgroundColor: highlight.color }}
                  />

                  {/* Hover shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

