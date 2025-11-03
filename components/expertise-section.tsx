"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export default function ExpertiseSection() {
  return (
    <section
      className="relative py-32 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/LzY5C03W/e79a9cc0-5bad-46b1-be90-90a1c62fbc51.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: "#91C73E" }}>
              OUR EXPERTISE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Advanced Medical
              <span style={{ color: "#91C73E" }} className="block">
                Logistics & Delivery
              </span>
              Solutions For Healthcare Excellence
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              We pride ourselves on providing best-in-class urgent medical courier services backed by cutting-edge
              technology and dedicated professional staff.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ borderColor: "white" }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right stat box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="rounded-xl p-12 text-center shadow-2xl w-full max-w-sm"
              style={{ backgroundColor: "#91C73E" }}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#194479" }}
                >
                  <Globe size={48} className="text-white" />
                </div>
              </div>
              <h3 className="text-6xl font-bold mb-4" style={{ color: "#194479" }}>
                50K+
              </h3>
              <p className="text-lg font-semibold" style={{ color: "#194479" }}>
                Medical deliveries completed across multiple healthcare facilities with zero compromise on safety and
                confidentiality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
