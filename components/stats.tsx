"use client"

import { motion } from "framer-motion"

export default function Stats() {
  const stats = [
    { number: "5000+", label: "Deliveries Completed", icon: "📦" },
    { number: "24/7", label: "Service Availability", icon: "⏰" },
    { number: "100%", label: "On-Time Delivery", icon: "✓" },
    { number: "50+", label: "Healthcare Partners", icon: "🤝" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 text-white" style={{ background: `linear-gradient(135deg, #194479 0%, #1d5a96 100%)` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
