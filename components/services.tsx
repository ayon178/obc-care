"use client"

import { motion } from "framer-motion"
import { Truck, Thermometer, Clock, Shield, MapPin, FileCheck } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Same-day urgent medical courier service with priority handling",
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Climate-controlled containers for sensitive medical specimens",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock emergency courier availability",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Safe transport with chain of custody documentation",
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time location tracking for complete transparency",
    },
    {
      icon: FileCheck,
      title: "Compliance Ready",
      description: "Full regulatory compliance and medical industry standards",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#194479" }}>
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical courier solutions designed specifically for urgent healthcare logistics
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-xl shadow-lg transition-all border-l-4"
                style={{ borderLeftColor: "#91C73E" }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: "#91C73E" }}
                >
                  <Icon size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#194479" }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
