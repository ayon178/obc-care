"use client"

import { motion } from "framer-motion"
import { Radio, Package, Plane, FileCheck, Building2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Rapid Response & Coordination",
    desc: "Our 24/7 control center arranges immediate pickup and fastest routing worldwide.",
    icon: Radio,
    color: "#194479",
  },
  {
    number: "02",
    title: "Secure Handling & Packaging",
    desc: "ESD-safe, shock-proof, and moisture-protected packaging for sensitive electronics.",
    icon: Package,
    color: "#91c73e",
  },
  {
    number: "03",
    title: "Next Flight Out / Hand-Carry Service",
    desc: "Urgent deliveries escorted by trained Onboard Couriers (OBCs) for maximum security.",
    icon: Plane,
    color: "#194479",
  },
  {
    number: "04",
    title: "Customs & ITAR Compliance",
    desc: "We manage all regulatory and documentation requirements for international tech shipments.",
    icon: FileCheck,
    color: "#91c73e",
  },
  {
    number: "05",
    title: "Verified Handover",
    desc: "Door-to-door delivery with proof of receipt and chain-of-custody tracking.",
    icon: Building2,
    color: "#194479",
  },
]

export default function TechnologyHowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]"
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
            A streamlined 5-step process ensuring your technology reaches your facility safely and on time.
          </p>
        </motion.div>

        {/* Steps - Clean Horizontal Flow Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative"
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-white shadow-md border-4 flex items-center justify-center"
                          style={{ borderColor: step.color }}
                        >
                          <div className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: step.color }}
                          />
                          <Icon className="w-8 h-8 text-white relative z-10" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                          style={{ borderColor: step.color }}
                        >
                          <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="titleFont text-[#194479] font-bold text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="paragraphFont text-gray-700 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-[#194479]/30 to-[#91c73e]/30" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Desktop: Horizontal Flow with Center Hub */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Center Hub - OBC */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#194479] to-[#91c73e] shadow-2xl border-4 border-white flex items-center justify-center z-30"
              >
                <div className="text-white font-bold text-xl">OBC</div>
              </motion.div>

              {/* Steps Grid - 2 rows */}
              <div className="grid grid-cols-5 gap-6 relative">
                {/* Top Row - Steps 1, 2, 3 */}
                <div className="col-span-5 grid grid-cols-3 gap-6 mb-4">
                  {steps.slice(0, 3).map((step, i) => {
                    const Icon = step.icon
                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="relative"
                      >
                        <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 group h-full">
                          {/* Icon */}
                          <div className="relative mb-4 flex justify-center">
                            <div className="relative w-16 h-16 rounded-full bg-white shadow-md border-4 flex items-center justify-center"
                              style={{ borderColor: step.color }}
                            >
                              <div className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: step.color }}
                              />
                              <Icon className="w-8 h-8 text-white relative z-10" />
                            </div>
                            {/* Number Badge */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                              style={{ borderColor: step.color }}
                            >
                              <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="text-center">
                            <h3 className="titleFont text-[#194479] font-bold text-base mb-2 group-hover:text-[#91c73e] transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="paragraphFont text-gray-700 text-xs leading-relaxed">
                              {step.desc}
                            </p>
                          </div>

                          {/* Connection Line to Center */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-12 opacity-20"
                            style={{ backgroundColor: step.color }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Spacer for center hub */}
                <div className="col-span-5 h-24 flex items-center justify-center relative">
                  {/* Connection lines from center to bottom steps */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full flex justify-between px-12">
                      <div className="w-0.5 h-12 opacity-20" style={{ backgroundColor: steps[3].color }} />
                      <div className="w-0.5 h-12 opacity-20" style={{ backgroundColor: steps[4].color }} />
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Steps 4, 5 */}
                <div className="col-span-5 grid grid-cols-5 gap-6 mt-4">
                  <div className="col-span-1" /> {/* Spacer */}
                  {steps.slice(3, 5).map((step, i) => {
                    const Icon = step.icon
                    return (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: (i + 3) * 0.15 }}
                        className="relative col-span-2"
                      >
                        <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#91c73e]/30 transition-all duration-300 group h-full">
                          {/* Icon */}
                          <div className="relative mb-4 flex justify-center">
                            <div className="relative w-16 h-16 rounded-full bg-white shadow-md border-4 flex items-center justify-center"
                              style={{ borderColor: step.color }}
                            >
                              <div className="absolute inset-0 rounded-full"
                                style={{ backgroundColor: step.color }}
                              />
                              <Icon className="w-8 h-8 text-white relative z-10" />
                            </div>
                            {/* Number Badge */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2"
                              style={{ borderColor: step.color }}
                            >
                              <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="text-center">
                            <h3 className="titleFont text-[#194479] font-bold text-base mb-2 group-hover:text-[#91c73e] transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="paragraphFont text-gray-700 text-xs leading-relaxed">
                              {step.desc}
                            </p>
                          </div>

                          {/* Connection Line to Center */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 opacity-20"
                            style={{ backgroundColor: step.color }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                  <div className="col-span-1" /> {/* Spacer */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

