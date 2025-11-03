"use client"

import { motion } from "framer-motion"
import { Hospital, Beaker, Stethoscope, Microscope, Droplet, FlaskConical, ArrowRight } from "lucide-react"

export default function CoverageAreas() {
  const areas = [
    {
      name: "Hospitals",
      icon: Hospital,
      description: "Multi-specialty hospital networks with emergency departments and ICU support",
    },
    {
      name: "Diagnostic Labs",
      icon: Beaker,
      description: "Advanced diagnostic centers for urgent sample and result deliveries",
    },
    {
      name: "Clinics",
      icon: Stethoscope,
      description: "Primary and specialty clinics requiring rapid medical transport",
    },
    {
      name: "Pathology Centers",
      icon: Microscope,
      description: "Certified pathology labs with temperature-controlled deliveries",
    },
    {
      name: "Blood Banks",
      icon: Droplet,
      description: "Secure blood product transport with compliance and safety protocols",
    },
    {
      name: "Research Facilities",
      icon: FlaskConical,
      description: "Medical research institutions requiring specialized courier services",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: "#91C73E" }}>
              Healthcare Facilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#194479" }}>
            We Serve Every Level
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by healthcare institutions across the region for time-critical medical deliveries, specimen
            transport, and emergency medical logistics
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-8 transition-all hover:shadow-xl"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-2"
                  style={{ backgroundColor: "#91C73E" }}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-white transition-all group-hover:shadow-lg"
                  style={{ backgroundColor: "#194479" }}
                >
                  <Icon size={28} strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: "#194479" }}>
                  {area.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.description}</p>

                {/* Link Arrow */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-semibold transition-all opacity-0 group-hover:opacity-100"
                  style={{ color: "#91C73E" }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-white"
          style={{ background: `linear-gradient(135deg, #194479 0%, #2d6fa3 100%)` }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-5"
            style={{ backgroundColor: "#91C73E", borderRadius: "50%" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 opacity-5"
            style={{ backgroundColor: "#91C73E", borderRadius: "50%" }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nationwide Medical Delivery Network</h3>
            <p className="text-lg opacity-90 max-w-2xl mb-10 leading-relaxed">
              OBC Care operates 24/7 with specialized handling for urgent medical specimens, blood products, and
              critical healthcare supplies across all regional healthcare facilities.
            </p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "500+", label: "Healthcare Facilities" },
                { number: "24/7", label: "Available Always" },
                { number: "99.8%", label: "On-Time Delivery" },
                { number: "100%", label: "Temperature Controlled" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
