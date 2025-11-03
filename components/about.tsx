"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/medical-professionals-preparing-urgent-delivery.jpg" alt="Medical team" className="rounded-lg shadow-lg w-full" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#194479" }}>
              About Our Service
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              With over a decade of experience in medical logistics, we've become the trusted partner for healthcare
              facilities, laboratories, and diagnostic centers across the region. Our mission is to ensure that critical
              medical specimens and supplies reach their destination safely and on time.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our team of certified professionals is trained in handling sensitive medical materials, maintaining chain
              of custody, and following all regulatory compliance standards. We understand the critical nature of
              medical deliveries and treat every shipment with the utmost care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all"
              style={{ backgroundColor: "#91C73E" }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
