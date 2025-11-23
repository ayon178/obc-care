"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function FmlmQuoteCta() {
  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/services/shipment.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium CTA Card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl overflow-hidden">
            {/* Shine effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
              animate={{
                translateX: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Icon and Headline */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#91c73e]/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#91c73e]" />
                </div>
                <h2 className="headingFont text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Get a Free Quote in Just 15 Minutes!
                </h2>
              </div>

              {/* Description */}
              <p className="paragraphFont text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Our team is on standby 24/7 to provide a customized solution for your shipment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {/* Primary CTA */}
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center gap-2 bg-[#91c73e] hover:bg-[#7bb033] text-white px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  {/* Shine effect on button */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                    whileHover={{
                      translateX: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  />
                  <span className="relative z-10 font-semibold text-base md:text-lg">
                    Request a Quote
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary CTA - Desktop only */}
                <Link
                  href="/inquiry"
                  className="hidden md:flex buttonFont items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 hover:border-white/50 group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-base md:text-lg">
                    Contact Control Tower
                  </span>
                </Link>
              </div>

              {/* Contact Info - Mobile */}
              <div className="md:hidden flex flex-col items-center gap-3 pt-4 border-t border-white/20">
                <a
                  href="tel:+4917645922485"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Contact Control Tower</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

