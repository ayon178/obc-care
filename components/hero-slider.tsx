"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      title: "Urgent Medical Hand Carry Courier",
      subtitle: "Fast & Reliable Medical Logistics",
      description: "Swift, secure delivery of critical medical supplies and specimens 24/7",
      image: "/medical-courier-urgent-delivery-service.jpg",
    },
    {
      title: "Temperature-Controlled Delivery",
      subtitle: "Preserve Sample Integrity",
      description: "Climate-controlled transport ensures your medical samples arrive in perfect condition",
      image: "/temperature-controlled-medical-transport.jpg",
    },
    {
      title: "24/7 Emergency Response",
      subtitle: "Always Ready, Always Reliable",
      description: "Round-the-clock availability for your most urgent medical courier needs",
      image: "/24-7-emergency-medical-courier-service.jpg",
    },
    {
      title: "Certified Professional Couriers",
      subtitle: "Expert Handling & Chain of Custody",
      description: "Trained professionals with medical industry compliance expertise",
      image: "/professional-medical-courier-staff-trained.jpg",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, slides.length])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden pt-16" id="home">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => {
          if (index !== current) return null
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 opacity-60" style={{ backgroundColor: "#194479" }} />
              </div>

              {/* Content - CHANGE: Center content on mobile */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-white max-w-2xl mx-auto md:mx-0 text-center md:text-left"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{slide.title}</h2>
                    <p className="text-lg md:text-2xl mb-6 opacity-90" style={{ color: "#91C73E" }}>
                      {slide.subtitle}
                    </p>
                    <p className="text-base md:text-lg mb-8 opacity-80">{slide.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-lg font-semibold text-lg transition-all mx-auto md:mx-0 block"
                      style={{ backgroundColor: "#91C73E", color: "#194479" }}
                    >
                      Get Started Now
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* CHANGE: Removed navigation arrows, kept only dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className="h-2 rounded-full transition-all cursor-pointer"
            animate={{
              width: index === current ? 24 : 8,
              backgroundColor: index === current ? "#91C73E" : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
