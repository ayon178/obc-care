"use client"

import { motion } from "framer-motion"
import { ArrowRight, Package, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function FmlmCta() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background Band */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479]" />
      
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
              {/* Icon and Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-3 mb-2"
              >
                <div className="w-12 h-12 rounded-full bg-[#91c73e]/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#91c73e]" />
                </div>
                <h2 className="headingFont text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Your Shipment, Moved with Precision
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="paragraphFont text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              >
                From the first pickup to the last handover, OBC Care ensures your shipment never loses momentum. We deliver speed, accuracy, and accountability — so your operations run smoothly without interruption.
              </motion.p>

              {/* Sub-headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center gap-2 pt-2"
              >
                <CheckCircle2 className="w-5 h-5 text-[#91c73e]" />
                <h3 className="headingFont text-xl md:text-2xl font-semibold text-white">
                  Get a Free Quote Today
                </h3>
              </motion.div>

              {/* Closing Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="paragraphFont text-white/80 text-sm md:text-base italic"
              >
                Let's move your shipment — faster, safer, and smarter.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
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
                    Get a Free Quote Today
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

