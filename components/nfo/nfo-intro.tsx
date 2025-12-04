"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Globe, Zap, Shield } from "lucide-react"

export default function NfoIntro() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Monitoring",
      image: "/services/shipment.jpeg",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      image: "/services/shipment.jpeg",
    },
    {
      icon: Zap,
      title: "Zero Downtime",
      image: "/services/shipment.jpeg",
    },
    {
      icon: Shield,
      title: "Guaranteed Speed",
      image: "/services/shipment.jpeg",
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#91c73e]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#194479]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight mb-6">
            Time-Critical Logistics Without Compromise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] mx-auto rounded-full" />
        </motion.div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Large Image Card - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/services/shipment.jpeg"
                alt="Time-Critical Logistics"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/90 via-[#194479]/50 to-transparent" />
              
              {/* Floating Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-black/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10">
                  <p className="paragraphFont text-white text-sm md:text-base leading-relaxed mb-4">
                    Delays aren't an option when critical operations depend on your shipment's arrival.
                  </p>
                  <p className="paragraphFont text-white text-sm md:text-base leading-relaxed">
                    That's why OBC Care's Next Flight Out (NFO) service prioritizes your cargo on the earliest available flight — ensuring zero downtime, full visibility, and guaranteed speed.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text and Feature Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Text Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-[#194479] to-[#1a4a7f] rounded-3xl p-6 md:p-8 shadow-xl text-white"
            >
              <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed mb-4">
                Our global team monitors every route, flight schedule, and customs requirement in real time, arranging the quickest and most reliable path from pickup to delivery.
              </p>
              <p className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed">
                Whether it's aviation parts, automotive components, or electronic equipment, our NFO service keeps your business moving — no matter where you are in the world.
              </p>
            </motion.div>

            {/* Feature Image Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-[140px] md:h-[160px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/90 via-[#194479]/60 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[#91c73e] transition-colors duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white text-sm font-bold drop-shadow-lg">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
