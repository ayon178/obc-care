"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AutomotiveIntro() {
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
                Driving Efficiency, Delivering Performance
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#91c73e] to-[#194479] rounded-full" />
              
              <div className="space-y-4">
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  In automotive and manufacturing, every delay costs time, money, and customer trust.
                </p>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  That's why OBC Care provides time-critical logistics designed for just-in-time operations — ensuring parts, tools, and prototypes arrive exactly when and where they're needed.
                </p>
                <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                  From factory to assembly line, or supplier to OEM, our experts handle each shipment with precision and real-time coordination, reducing downtime and keeping your production running seamlessly.
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
                    src="/industries/auto/2.png"
                    alt="Automotive Manufacturing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-[#194479]/40 to-transparent" />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl text-center">
                        <div className="text-3xl font-bold text-[#194479] mb-1">Zero</div>
                        <div className="text-xs text-gray-600">Downtime</div>
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

