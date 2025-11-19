"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Shield, Zap } from "lucide-react"

// Word-by-word reveal component
const WordReveal = ({ text, className }: { text: string; className?: string }) => {
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
              ease: [0.25, 0.1, 0.25, 1]
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

export default function LogisticsAdvantage() {

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Shield, text: "Secure Handling" },
    { icon: Globe, text: "Global Network" },
    { icon: Clock, text: "24/7 Support" },
  ]

  return (
    <section 
      id="logistics-advantage" 
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#194479]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#91C73E]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#194479 1px, transparent 1px),
              linear-gradient(90deg, #194479 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          {/* Content Section - Left Side */}
          <motion.div
            className="space-y-6 relative z-10"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, x: -30, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span 
                className="text-sm font-semibold tracking-wider uppercase inline-block relative"
                style={{ color: "#91C73E" }}
              >
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-[#91C73E]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                Our Advantage
              </span>
            </motion.div>

            {/* Main Title with Word-by-Word Reveal */}
            <div className="overflow-hidden">
              <WordReveal
                text="Fast, Secure, and Global — Our Logistics Advantage"
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              />
            </div>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "#91C73E" }}
            >
              Your deadlines drive us.
            </motion.h3>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 pt-3"
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                OBC Care provides end-to-end logistics solutions designed for industries that can't afford delays — aviation, automotive, and electronics.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                We coordinate first and last mile deliveries, onboard couriers, customs clearance, and next-flight-out (NFO) arrangements to ensure every shipment arrives when it's needed most.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-700 leading-relaxed"
              >
                Whether it's across the city or across the world, we move faster, think smarter, and deliver with care.
              </motion.p>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="pt-3"
            >
              <p className="text-lg md:text-xl font-semibold italic" style={{ color: "#194479" }}>
                Your shipment, our mission — 24/7, across the globe.
              </p>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <Icon className="w-5 h-5" style={{ color: "#91C73E" }} />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
              className="pt-4 relative"
            >
              <div className="relative">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="h-1 w-24 rounded-full absolute"
                  style={{ backgroundColor: "#91C73E" }}
                />
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: "#194479", opacity: 0.6 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section - Right Side */}
          <motion.div
            className="relative z-0"
          >
            {/* Image Container with Decorative Elements */}
            <div className="relative">
              {/* Multiple Decorative shapes with animations */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-[#91C73E]/20 rounded-lg z-0"
                initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                animate={{
                  rotate: [-12, -18, -12],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -top-3 -left-3 w-16 h-16 bg-[#194479]/15 rounded-full z-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring"
                }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Image with Parallax */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src="/medical-courier-delivering-urgent-packages.jpg" 
                    alt="OBC Care Logistics Operations - FM/LM and NFO Services" 
                    className="w-full h-[500px] md:h-[600px] object-cover"
                  />
                  {/* Advanced Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-[#194479]/10 to-transparent"></div>
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>

              {/* Advanced Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-2xl z-20"
                whileHover={{
                  scale: 1.1,
                  rotate: -360,
                  transition: { duration: 0.5 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#91C73E] via-[#7bb033] to-[#6a9f2a] rounded-full flex items-center justify-center relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#194479]/30 rounded-full blur-xl animate-pulse"></div>
                  <Zap className="w-8 h-8 text-white relative z-10" />
                </div>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 -right-4 w-3 h-3 bg-[#194479] rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

