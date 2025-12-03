"use client"

import { motion } from "framer-motion"
import { Globe, Shield, Zap, TrendingUp } from "lucide-react"

// Word-by-word reveal
const WordReveal = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  const words = text.split(" ")

  return (
    <h2 className={className} style={{ color: "#194479" }}>
      {words.map((word, index) => (
        <span key={index} className="inline-block mr-2 overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}

export default function AboutSection() {
  const stats = [
    { icon: Globe, label: "Global Network", value: "150+" },
    { icon: Shield, label: "Trusted Partners", value: "500+" },
    { icon: Zap, label: "Fast Delivery", value: "24/7" },
    { icon: TrendingUp, label: "Success Rate", value: "99%" },
  ]

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#91C73E]/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#194479]/8 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(#194479 1px, transparent 1px),
              linear-gradient(90deg, #194479 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section - Left Side with Professional Design */}
          <motion.div className="relative order-2 lg:order-1">
            {/* Professional Image Container */}
            <div className="relative">
              {/* Decorative frame elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#91C73E]/20 via-transparent to-[#194479]/20 rounded-3xl blur-2xl"></div>

              {/* Main image container with professional styling */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                {/* Image */}
                <div className="relative h-[500px] md:h-[650px] overflow-hidden">
                  <img
                    src="/images/about.png"
                    alt="OBC Care Global Logistics Operations"
                    className="w-full h-full object-cover object-left"
                  />

                  {/* Professional gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#194479]/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#91C73E]/20"></div>

                  {/* Overlay pattern for texture */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        rgba(255, 255, 255, 0.1) 10px,
                        rgba(255, 255, 255, 0.1) 20px
                      )`,
                    }}
                  />
                </div>
              </motion.div>

              {/* Professional badge overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Trusted Worldwide
                    </p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: "#194479" }}
                    >
                      Global Excellence
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#194479] to-[#1d5a96] flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#91C73E]/30 to-transparent rounded-bl-full"></div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 space-y-3">
                {stats.slice(0, 2).map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-[#91C73E]/5 hover:to-white transition-all cursor-pointer"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "#91C73E20" }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: "#91C73E" }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-lg font-bold"
                          style={{ color: "#194479" }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section - Right Side */}
          <motion.div className="space-y-8 order-1 lg:order-2">
            {/* Label with professional styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="inline-block"
            >
              <div className="flex items-center gap-3 mb-0.5">
                <div className="h-px w-12 bg-gradient-to-r from-[#91C73E] to-transparent"></div>
                <span
                  className="text-sm font-bold tracking-wider uppercase"
                  style={{ color: "#91C73E" }}
                >
                  About Us
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#91C73E] to-transparent"></div>
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="overflow-hidden -mt-1">
              <WordReveal
                text="About OBC Care"
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] mb-0.5"
              />
            </div>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-semibold mb-2 leading-tight"
              style={{ color: "#91C73E" }}
            >
              Your Global Partner in Time-Critical Logistics
            </motion.h3>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                At OBC Care, we move what matters most: from production spare parts and AOG shipments to automotive components and electronic equipment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                We're trusted by businesses worldwide to handle high-value,
                urgent shipments with precision, reliability, and full
                transparency.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-[#91C73E] transition-all shadow-sm hover:shadow-lg overflow-hidden"
                  >
                    {/* Hover gradient */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-[#91C73E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: "#91C73E20" }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: "#91C73E" }}
                          />
                        </div>
                        <p
                          className="text-2xl font-bold"
                          style={{ color: "#194479" }}
                        >
                          {stat.value}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Professional divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-1 w-20 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #91C73E, transparent)",
                  }}
                ></div>
                <div className="h-1 flex-1 rounded-full bg-gray-200"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
