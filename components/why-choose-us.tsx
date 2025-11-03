"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "Swift delivery with GPS tracking",
    "Professional and trained staff",
    "Temperature-controlled transport",
    "Secure handling procedures",
    "Competitive pricing",
    "ISO certified operations",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
          style={{ color: "#194479" }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/delivery-courier-holding-medical-package-safely.jpg" alt="Why choose us" className="rounded-lg shadow-lg w-full" />
          </motion.div>

          {/* Right side - List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center gap-4 mb-6">
                <motion.div whileHover={{ scale: 1.2 }} className="flex-shrink-0">
                  <CheckCircle size={24} style={{ color: "#91C73E" }} />
                </motion.div>
                <p className="text-lg text-gray-700 font-medium">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
