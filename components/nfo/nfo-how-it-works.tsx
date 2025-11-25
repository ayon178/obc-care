"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Package, Plane, Radio, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Immediate Booking & Route Planning",
    desc: "Our operations team identifies the fastest flight option available — commercial or cargo — within minutes of your request.",
    icon: Calendar,
    image: "/services/shipment.jpeg",
    color: "#194479",
  },
  {
    number: "02",
    title: "Priority Pickup & Documentation",
    desc: "We arrange immediate pickup and verify all paperwork for seamless dispatch.",
    icon: Package,
    image: "/services/shipment.jpeg",
    color: "#91c73e",
  },
  {
    number: "03",
    title: "Onboard or Cargo Coordination",
    desc: "Depending on urgency, we either book the shipment on the next flight or assign an onboard courier for direct escort.",
    icon: Plane,
    image: "/services/shipment.jpeg",
    color: "#194479",
  },
  {
    number: "04",
    title: "Real-Time Updates",
    desc: "Get milestone notifications at every stage — from acceptance to arrival.",
    icon: Radio,
    image: "/services/shipment.jpeg",
    color: "#91c73e",
  },
  {
    number: "05",
    title: "Fast Final Delivery",
    desc: "Once landed, we handle customs clearance and deliver your shipment straight to its destination.",
    icon: Truck,
    image: "/services/shipment.jpeg",
    color: "#194479",
  },
]

export default function NfoHowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-[#194479]/5 overflow-hidden">
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#194479]/10 text-[#194479] text-sm font-semibold mb-6">
            How NFO Works
          </span>
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-4">
            From Request to Delivery — In Record Time
          </h2>
          <p className="paragraphFont text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            A streamlined 5-step process ensuring your time-critical shipment reaches its destination on the next available flight.
          </p>
        </motion.div>

        {/* Steps Timeline - Responsive Layout */}
        <div className="relative max-w-6xl mx-auto">
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

                  {/* Image Card - Alternating Sides */}
                  <motion.div
                    className={`relative order-2 z-10 ${
                      isLeft ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-2xl group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}00, ${step.color}E6)`,
                        }}
                      />
                      
                      {/* Number Badge - Top Left */}
                      <div className="absolute top-6 left-6">
                        <div
                          className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-xl"
                          style={{ backgroundColor: `${step.color}40` }}
                        >
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                      </div>

                      {/* Icon Badge - Bottom Right */}
                      <div className="absolute bottom-6 right-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card - Alternating Sides */}
                  <motion.div
                    className={`relative order-1 z-10 ${
                      isLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"
                    }`}
                  >
                    {/* Content Card */}
                    <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 h-full z-10">
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
                          <h3 className="titleFont text-[#194479] font-bold text-xl md:text-2xl leading-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#194479] to-[#1a4a7f] text-white shadow-lg">
            <Plane className="w-5 h-5" />
            <span className="paragraphFont font-semibold text-base md:text-lg">
              Ready to get started? Book your NFO shipment now
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

