"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { 
  Truck, 
  Plane, 
  FileCheck, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "First Mile / Last Mile (FM/LM) Delivery",
    description: "Seamless pickup and delivery from origin to final destination.",
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    iconGradient: "from-blue-500 to-indigo-600",
    glowColor: "bg-blue-500/20",
  },
  {
    icon: Plane,
    title: "Onboard Courier (OBC) Service",
    description: "When every second counts, our professional couriers personally escort your shipment on the next available flight.",
    gradient: "from-[#91C73E] via-green-500 to-emerald-600",
    iconGradient: "from-[#91C73E] to-emerald-600",
    glowColor: "bg-[#91C73E]/20",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance Assistance",
    description: "We simplify the complex. Our experts handle every detail of international customs coordination.",
    gradient: "from-[#194479] via-blue-700 to-indigo-800",
    iconGradient: "from-[#194479] to-indigo-800",
    glowColor: "bg-[#194479]/20",
  },
  {
    icon: Zap,
    title: "Next Flight Out (NFO) Solutions",
    description: "When speed is everything, NFO ensures your shipment takes off on the next available flight.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    iconGradient: "from-orange-500 to-amber-600",
    glowColor: "bg-orange-500/20",
  },
]

export default function CoreServices() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-based parallax animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const cardsY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5])

  // Spring animations
  const smoothHeaderY = useSpring(headerY, { stiffness: 100, damping: 30 })
  const smoothCardsY = useSpring(cardsY, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(25, 68, 121, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(25, 68, 121, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#194479]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#91C73E]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          style={{
            y: smoothHeaderY,
            opacity: smoothOpacity,
          }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#194479]"></div>
            <span className="px-4 py-2 rounded-full bg-[#194479]/10 backdrop-blur-sm border border-[#194479]/20">
              <span className="text-sm font-semibold text-[#194479] tracking-wider uppercase">
                Our Core Services
              </span>
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#194479]"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-gray-900">Priority</span>
            <br />
            <span className="bg-gradient-to-r from-[#194479] via-[#194479] to-[#91C73E] bg-clip-text text-transparent">
              Logistics Solutions
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto space-y-5"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              At OBC Care, we understand that <span className="font-semibold text-[#194479]">downtime costs money</span>. That's why we provide priority logistics solutions tailored for industries that demand speed, security, and global reach.
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              Our expertise ensures that every shipment — big or small — arrives <span className="font-semibold text-[#91C73E]">safely, swiftly, and seamlessly</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          style={{
            y: smoothCardsY,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="relative group perspective-1000"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl bg-gray-200/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Card */}
                <div className="relative h-full p-8 md:p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-gray-200/50 group-hover:border-gray-300/60 transition-all duration-500 overflow-hidden">
                  {/* Gentle Border on Hover */}
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-gray-200/40 to-gray-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gray-200/50 to-gray-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    }}
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Checkmark Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.4,
                      type: "spring"
                    }}
                    className="absolute top-6 right-6 z-10"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#91C73E] to-emerald-600 flex items-center justify-center shadow-lg shadow-[#91C73E]/30">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#91C73E] blur-md opacity-50"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative mb-8"
                  >
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 blur-xl`}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                    className="flex items-center gap-2 text-gray-600 font-semibold group-hover:text-gray-800 group-hover:gap-4 transition-all duration-300"
                  >
                    <span className="text-sm md:text-base">Learn more</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>

                  {/* Decorative Gentle Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-b-3xl"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
