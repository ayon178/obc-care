"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

// Word-by-word reveal
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
              delay: index * 0.1,
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

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])
  
  // Spring animations for smoother feel
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 })
  const smoothImageScale = useSpring(imageScale, { stiffness: 100, damping: 30 })
  const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 })
  
  // Rotate based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5])
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 })

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#91C73E]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#194479]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section - Left Side with Advanced Animations */}
          <motion.div
            style={{
              y: smoothImageY,
              scale: smoothImageScale,
              rotate: smoothRotate,
            }}
            className="relative"
          >
            {/* Image Container with Decorative Elements */}
            <div className="relative">
              {/* Multiple Decorative shapes with animations */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-[#91C73E]/20 rounded-lg z-0"
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                animate={{
                  rotate: [12, 18, 12],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -top-3 -right-3 w-16 h-16 bg-[#194479]/15 rounded-full z-0"
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
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
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
                    src="/medical-logistics-warehouse-background-8IkL7.jpg" 
                    alt="OBC Care Logistics Operations" 
                    className="w-full h-[500px] md:h-[600px] object-cover"
                  />
                  {/* Advanced Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#194479]/10 to-transparent"></div>
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>

              {/* Advanced Floating Icon Badge with 3D effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-2xl z-20"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#194479] via-[#1d5a96] to-[#153666] rounded-full flex items-center justify-center relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#91C73E]/30 rounded-full blur-xl animate-pulse"></div>
                  <svg 
                    className="w-8 h-8 text-white relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 -left-4 w-3 h-3 bg-[#91C73E] rounded-full"
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

          {/* Content Section - Right Side with Advanced Text Animations */}
          <motion.div
            style={{
              y: smoothContentY,
              opacity,
            }}
            className="space-y-6"
          >
            {/* Small Label with slide animation */}
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
                About Us
              </span>
            </motion.div>

            {/* Main Title with Word-by-Word Reveal */}
            <div className="overflow-hidden">
              <WordReveal
                text="About OBC Care"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              />
            </div>

            {/* Subtitle with Character Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="overflow-hidden"
            >
              <h3
                className="text-2xl md:text-3xl font-semibold inline-block"
                style={{ color: "#91C73E" }}
              >
                {"Your Global Partner in Time-Critical Logistics".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.05,
                      delay: 0.5 + index * 0.02,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h3>
            </motion.div>

            {/* Description Paragraphs with Stagger Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 pt-4"
            >
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                At OBC Care, we move what matters most — from aviation spare parts and AOG shipments to automotive components and electronic equipment.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                We're trusted by businesses worldwide to handle high-value, urgent shipments with precision, reliability, and full transparency.
              </motion.p>
            </motion.div>

            {/* Advanced Decorative Divider with Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="pt-4 relative"
            >
              <div className="relative">
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="h-1 w-24 rounded-full absolute"
                  style={{ backgroundColor: "#91C73E" }}
                />
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: "#194479", opacity: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Optional: Add animated stats or features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                { label: "Global Reach", value: "150+" },
                { label: "Years Experience", value: "10+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border border-gray-200 hover:border-[#91C73E] transition-colors"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-2xl font-bold"
                    style={{ color: "#194479" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
