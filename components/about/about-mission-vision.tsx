"use client"

import { motion } from "framer-motion"

export default function AboutMissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#194479] mb-4 uppercase tracking-wide border-l-4 border-[#91c73e] pl-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deliver critical shipments with care, accuracy, and heart — ensuring businesses keep moving no matter the distance or the deadline. We strive to be the backbone of your logistics operations.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#194479] mb-4 uppercase tracking-wide border-l-4 border-[#91c73e] pl-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the world's most trusted partner in urgent logistics — where every hand-carry, every mile, and every moment represents excellence, integrity, and human connection.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
