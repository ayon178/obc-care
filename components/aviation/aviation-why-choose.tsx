"use client"

import { motion } from "framer-motion"
import { Phone, Zap, Shield, FileText, Eye } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Phone,
    title: "24/7 AOG Desk",
    description: "Always on call for critical aviation emergencies.",
    color: "#194479",
  },
  {
    icon: Zap,
    title: "Next Flight & Onboard Options",
    description: "We choose the fastest route available — NFO or hand-carry.",
    color: "#91c73e",
  },
  {
    icon: Shield,
    title: "Airline-Approved Couriers",
    description: "Our team is trained in handling aviation cargo and airside operations.",
    color: "#194479",
  },
  {
    icon: FileText,
    title: "Full Compliance & Documentation",
    description: "We ensure all airway bills, certificates, and customs papers are correct and ready.",
    color: "#91c73e",
  },
  {
    icon: Eye,
    title: "End-to-End Visibility",
    description: "Track every movement with real-time communication.",
    color: "#194479",
  },
]

export default function AviationWhyChoose() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              Why Aviation Leaders Choose OBC Care
            </h2>
            <p className="paragraphFont text-white/90 text-sm md:text-base max-w-2xl mx-auto">
              Trusted by aviation professionals worldwide for critical AOG logistics.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <Icon
                          className="w-7 h-7 text-white"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="titleFont text-white font-bold text-lg md:text-xl mb-2">
                          {benefit.title}
                        </h3>
                        <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/industries/avition/img1.png"
                  alt="Aviation Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/90 via-[#194479]/50 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <h3 className="headingFont text-[#194479] text-xl md:text-2xl font-bold mb-2">
                      Your shipment, our mission — 24/7, across the globe.
                    </h3>
                    <p className="paragraphFont text-gray-700 text-sm md:text-base">
                      Trusted by aviation professionals worldwide for critical AOG logistics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

