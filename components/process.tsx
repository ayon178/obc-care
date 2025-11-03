"use client"

import { motion } from "framer-motion"
import { Phone, FileText, TruckIcon, CheckCircle } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call or message us with your urgent medical delivery needs",
      step: 1,
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Provide sample details and destination information",
      step: 2,
    },
    {
      icon: TruckIcon,
      title: "Pickup & Delivery",
      description: "Our courier picks up and delivers with GPS tracking",
      step: 3,
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Receive delivery confirmation and documentation",
      step: 4,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#194479" }}>
            Simple & Fast Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your urgent medical samples delivered in just 4 easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-2">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-12 left-1/2 w-full h-1 -translate-x-1/2 -translate-y-1/2 ml-24"
                    style={{ backgroundColor: "#91C73E" }}
                  />
                )}

                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg text-center relative z-10 border-2"
                  style={{ borderColor: "#194479" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto text-white"
                    style={{ backgroundColor: "#91C73E" }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: "#194479" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#194479" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
