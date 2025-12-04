"use client"

import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-20" style={{ backgroundColor: "#194479" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a quote or to schedule your first urgent medical delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              style={{ backgroundColor: "#91C73E", color: "#194479" }}
            >
              Get Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all"
              style={{ borderColor: "#91C73E", color: "#91C73E" }}
              onClick={() => window.location.href = "/contact"}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
