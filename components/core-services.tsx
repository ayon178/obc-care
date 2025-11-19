"use client"

import { motion } from "framer-motion"
import Link from "next/link"
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
    iconColor: "#194479",
    link: "/services",
  },
  {
    icon: Plane,
    title: "Onboard Courier (OBC) Service",
    description: "When every second counts, our professional couriers personally escort your shipment with utmost priority.",
    iconColor: "#91C73E",
    link: "/on-board-courier-services",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance Assistance",
    description: "We simplify the complex. Our customs experts handle every detail of international customs coordination.",
    iconColor: "#194479",
    link: "/services",
  },
  {
    icon: Zap,
    title: "Next Flight Out (NFO) Solutions",
    description: "When speed is everything, NFO ensures your shipment takes off on the next available flight.",
    iconColor: "#91C73E",
    link: "/services",
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
              At OBC Care, we understand that <span className="font-semibold text-[#194479]">downtime costs money</span>. That's why we provide priority logistics solutions tailored for industries that demand speed, security, and global reach.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-light">
              Our expertise ensures that every shipment — big or small — arrives <span className="font-semibold text-[#91C73E]">safely, swiftly, and seamlessly</span>.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
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
                {/* Main Card */}
                <div className="relative h-full p-4 md:p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 group-hover:border-gray-300/60 transition-all duration-300 overflow-hidden">
                  {/* Checkmark Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#91C73E] flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300" style={{ backgroundColor: service.iconColor }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 leading-tight pr-8">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={service.link}
                    className="flex items-center gap-2 text-gray-600 font-semibold group-hover:text-[#194479] group-hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xs md:text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-b-2xl" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
