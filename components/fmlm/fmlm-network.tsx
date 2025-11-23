"use client"

import { motion } from "framer-motion"
import { Globe2, Truck, MapPin, Clock } from "lucide-react"
import Image from "next/image"

const stats = [
  { label: "Professional Drivers", value: "500+", icon: Truck },
  { label: "Global Coverage", value: "70+", icon: Globe2 },
  { label: "Response Time", value: "<30m", icon: Clock },
]

const coverageAreas = [
  { region: "Asia", cities: "Singapore, Hong Kong, Tokyo, Dubai, Mumbai" },
  { region: "Europe", cities: "London, Frankfurt, Amsterdam, Paris, Milan" },
  {
    region: "Americas",
    cities: "New York, Los Angeles, Miami, Toronto, São Paulo",
  },
]

export default function FmlmNetwork() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              FM/LM Network
            </span>

            <h2 className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight">
              Global Ground Coordination at Your Fingertips
            </h2>

            <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
              With hundreds of professional drivers and logistics partners
              across Asia, Europe, and the Americas, OBC Care guarantees
              seamless global ground coordination.
            </p>

            <p className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed">
              Whether it's door-to-door, airport-to-door, door-to-airport, or
              airport-to-airport, our FM/LM network is built to move your cargo
              efficiently — anytime, anywhere.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-lg bg-[#194479]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#194479]" />
                      </div>
                    </div>
                    <div className="titleFont text-[#194479] text-xl md:text-2xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="paragraphFont text-gray-600 text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Coverage Areas with Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
                  alt="Global Network Coverage"
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay - Lighter */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Coverage Cards Overlay - Positioned on right side */}
                <div className="absolute inset-0 flex items-center justify-end pr-0">
                  <div className="space-y-2 max-w-[200px] md:max-w-[240px] mr-0">
                    {coverageAreas.map((area, index) => (
                      <motion.div
                        key={area.region}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="bg-black/60 backdrop-blur-sm rounded-l-lg rounded-r-none p-2 md:p-2.5 shadow-lg border border-white/20 border-r-0"
                      >
                        <h3 className="titleFont text-white font-bold text-xs md:text-sm mb-0.5">
                          {area.region}
                        </h3>
                        <p className="paragraphFont text-white/90 text-[10px] md:text-xs leading-tight">
                          {area.cities}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
