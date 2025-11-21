"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Truck, Plane, FileCheck, Zap } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "First Mile / Last Mile (FM/LM) Delivery",
    description:
      "Seamless pickup and delivery from origin to final destination.",
    iconColor: "#194479",
    link: "/services",
    image:
      "https://images.unsplash.com/photo-1601581875101-85c47016a1c2?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Plane,
    title: "Onboard Courier (OBC) Service",
    description:
      "When every second counts, our professional couriers personally escort your shipment with utmost priority.",
    iconColor: "#91C73E",
    link: "/on-board-courier-services",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance Assistance",
    description:
      "We simplify the complex. Our customs experts handle every detail of international customs coordination.",
    iconColor: "#194479",
    link: "/services",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Next Flight Out (NFO) Solutions",
    description:
      "When speed is everything, NFO ensures your shipment takes off on the next available flight.",
    iconColor: "#91C73E",
    link: "/services",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
  },
]

export default function CoreServices() {
  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#194479]"></div>
            <span className="px-3 py-1 rounded-full bg-[#194479]/10 backdrop-blur-sm border border-[#194479]/20">
              <span className="text-xs font-semibold text-[#194479] tracking-wider uppercase">
                Our Core Services
              </span>
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#194479]"></div>
          </div>

          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 leading-tight">
            <span className="text-gray-900">Priority</span>
            <br />
            <span className="bg-gradient-to-r from-[#194479] via-[#194479] to-[#91C73E] bg-clip-text text-transparent">
              Logistics Solutions
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-2 md:space-y-3 px-1">
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-light">
              At OBC Care, we understand that{" "}
              <span className="font-semibold text-[#194479]">
                downtime costs money
              </span>
              . That's why we provide priority logistics solutions tailored for
              industries that demand speed, security, and global reach.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-light">
              Our expertise ensures that every shipment — big or small — arrives{" "}
              <span className="font-semibold text-[#91C73E]">
                safely, swiftly, and seamlessly
              </span>
              .
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <Link href={service.link} className="block h-full">
                  {/* Image Card */}
                  <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    />

                    {/* Dark Overlay at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                      <h3 className="text-white text-base md:text-lg font-bold mb-1.5 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white text-xs leading-relaxed opacity-90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
