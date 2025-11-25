"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Plane, FileCheck, Radio, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Immediate Response",
    desc: "Once we receive your AOG alert, our operations team mobilizes within minutes.",
    icon: Clock,
    color: "#194479",
  },
  {
    number: "02",
    title: "Next Flight Booking",
    desc: "Your shipment is prioritized on the fastest available route.",
    icon: Plane,
    color: "#91c73e",
  },
  {
    number: "03",
    title: "Customs & Airport Coordination",
    desc: "We handle all airport and customs procedures for quick clearance.",
    icon: FileCheck,
    color: "#194479",
  },
  {
    number: "04",
    title: "In-Transit Monitoring",
    desc: "Receive real-time updates from pickup to delivery.",
    icon: Radio,
    color: "#91c73e",
  },
  {
    number: "05",
    title: "Final Handover",
    desc: "Shipment is personally delivered to your hangar, technician, or operations team.",
    icon: Truck,
    color: "#194479",
  },
]

export default function AviationHowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #194479 1px, transparent 0)
            `,
            backgroundSize: "40px 40px",
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
            How It Works
          </h2>
          <p className="paragraphFont text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            A streamlined 5-step process ensuring your AOG parts reach your aircraft on the fastest route possible.
          </p>
        </motion.div>

        {/* Steps - Vertical Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#194479]/20 via-[#91c73e]/30 to-[#194479]/20 -translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center ${
                    isLeft ? "md:grid-flow-col" : "md:grid-flow-col-dense"
                  }`}
                >
                  {/* Timeline Node - Desktop Only - Positioned relative to step container */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 shadow-xl z-30 pointer-events-none"
                    style={{ borderColor: step.color }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content Card - Alternating Sides */}
                  <motion.div
                    className={`relative order-1 z-10 ${
                      isLeft ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
                    }`}
                  >
                    <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 h-full">
                      <div className="flex flex-row items-center gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${step.color}15` }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: step.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-[#194479]">{step.number}</span>
                            <h3 className="titleFont text-[#194479] font-bold text-xl md:text-2xl leading-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block order-2 ${isLeft ? "md:order-2" : "md:order-1"}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

