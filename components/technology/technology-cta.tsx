"use client"

import { motion } from "framer-motion"
import { ArrowRight, Server } from "lucide-react"
import Link from "next/link"

export default function TechnologyCta() {
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
            <div className="relative z-10 text-center space-y-5 md:space-y-6">
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-2"
              >
                <div className="w-14 h-14 rounded-full bg-[#91c73e]/20 flex items-center justify-center">
                  <Server className="w-7 h-7 text-[#91c73e]" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight"
              >
                Your Technology, Our Priority
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="paragraphFont text-white/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              >
                We understand the urgency of modern tech operations.
              </motion.p>

              {/* Sub-description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="paragraphFont text-white/85 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
              >
                Whether it's a server migration, prototype delivery, or data recovery mission — OBC Care delivers peace of mind with every shipment.
              </motion.p>

              {/* Sub-headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-2"
              >
                <p className="paragraphFont text-white font-semibold text-base md:text-lg mb-4">
                  Get a Free Quote Today
                </p>
                <p className="paragraphFont text-white/80 text-xs md:text-sm italic mb-4">
                  Let's move your technology with precision, protection, and speed.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="pt-2"
              >
                <Link
                  href="/inquiry"
                  className="buttonFont group relative inline-flex items-center gap-2 bg-[#91c73e] hover:bg-[#7bb033] text-white px-8 py-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden whitespace-nowrap"
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
                  <span className="relative z-10 font-semibold text-base md:text-lg whitespace-nowrap">
                    Get a Free Quote Today
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

