"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ElectronicsIntro() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #194479 1px, transparent 0)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split Layout: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-[#194479] leading-tight">
                Precision Logistics for a High-Tech World
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] rounded-full" />
              
              <div className="space-y-4">
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  In the fast-moving world of electronics and semiconductors, even the smallest delay can disrupt entire production lines.
                </p>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  That's why OBC Care specializes in time-critical logistics for sensitive, high-value, and temperature-controlled components — ensuring every delivery is handled with speed, security, and precision.
                </p>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  From prototype chips to testing equipment and production wafers, our expert team coordinates every step — from pickup to customs to final delivery — with real-time updates and global compliance.
                </p>
              </div>
            </motion.div>

            {/* Right: Image with Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src="/industries/electricity/2.png"
                    alt="Electronics Logistics"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-[#194479]/40 to-transparent" />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl text-center">
                        <div className="text-3xl font-bold text-[#194479] mb-1">ESD</div>
                        <div className="text-xs text-gray-600">Safe</div>
                      </div>
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl text-center">
                        <div className="text-3xl font-bold text-[#91c73e] mb-1">24/7</div>
                        <div className="text-xs text-gray-600">Control</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

