"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Laboratory Director",
      content: "Excellent service! Our samples arrive safely and on time, every single time.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Hospital Manager",
      content: "The professionalism and reliability of their team is outstanding. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Priya Patel",
      role: "Diagnostic Center Owner",
      content: "They handle our urgent shipments with utmost care. Truly dependable partners.",
      rating: 5,
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
          style={{ color: "#194479" }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} size={20} style={{ color: "#91C73E", fill: "#91C73E" }} />
                  ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div>
                <p className="font-semibold" style={{ color: "#194479" }}>
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
