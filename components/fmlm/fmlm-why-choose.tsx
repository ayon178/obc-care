"use client"

import { motion } from "framer-motion"
import { Clock, Users, Radio, Globe } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Always operational, across time zones and weekends.",
  },
  {
    icon: Users,
    title: "Trained, Verified Drivers",
    desc: "Professionals with logistics expertise and security clearance.",
  },
  {
    icon: Radio,
    title: "Real-Time Updates",
    desc: "Stay informed at every milestone — no uncertainty.",
  },
  {
    icon: Globe,
    title: "Global Coordination",
    desc: "Door-to-door, airport-to-airport, or mixed modes — we connect every link.",
  },
]

export default function FmlmWhyChoose() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
            Why Choose OBC Care FM/LM Solutions
          </span>
          <h2 className="headingFont mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight">
            Excellence in Every Mile
          </h2>
          <p className="paragraphFont mt-4 text-gray-700 text-base md:text-lg">
            Our comprehensive ground transport solutions ensure your shipments move with precision, speed, and complete visibility.
          </p>
        </motion.div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-[#194479]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#194479]/10 flex items-center justify-center group-hover:bg-[#194479] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#194479] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="titleFont text-[#194479] font-bold text-xl md:text-2xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="paragraphFont text-gray-600 text-sm md:text-base leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
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

