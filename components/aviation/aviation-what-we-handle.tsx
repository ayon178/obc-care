"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Wrench, Cpu, FileText, Cog, Settings } from "lucide-react"

const items = [
  {
    icon: Wrench,
    title: "AOG Parts & Tools",
    color: "#194479",
  },
  {
    icon: Cpu,
    title: "Engine Components & Avionics",
    color: "#91c73e",
  },
  {
    icon: FileText,
    title: "Aircraft Documents & Certificates",
    color: "#194479",
  },
  {
    icon: Cog,
    title: "Maintenance, Repair & Overhaul (MRO) Supplies",
    color: "#91c73e",
  },
  {
    icon: Settings,
    title: "Ground Support Equipment & Accessories",
    color: "#194479",
  },
]

export default function AviationWhatWeHandle() {
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            What We Handle
          </h2>
          <p className="paragraphFont text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive aviation logistics for every critical component and document your aircraft needs.
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#91c73e]/30">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: item.color }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-[#91c73e] flex-shrink-0" />
                        <h3 className="titleFont text-[#194479] font-bold text-base md:text-lg leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Accent Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: item.color }}
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

