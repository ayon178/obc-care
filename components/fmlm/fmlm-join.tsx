"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  {
    icon: Truck,
    title: "Drive Critical Shipments",
    description: "Be part of time-sensitive logistics that matter",
  },
  {
    icon: Shield,
    title: "24/7 Support Team",
    description: "Backed by our professional operations center",
  },
  {
    icon: Clock,
    title: "Flexible Opportunities",
    description: "Choose assignments that fit your schedule",
  },
  {
    icon: MapPin,
    title: "Global Network",
    description: "Join hundreds of drivers worldwide",
  },
]

export default function FmlmJoin() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold"
            >
              <Truck className="w-4 h-4" />
              <span>Join Our Team</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight"
            >
              Become a First & Last Mile Driver
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              Want to join our fast-moving logistics team? Every mile you drive makes a difference — ensuring critical shipments reach their destinations on time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              As part of OBC Care's global network, you'll be trusted with high-value and time-sensitive deliveries, backed by our 24/7 support team.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              Whether you're an experienced courier or a professional driver looking to enter time-critical logistics, we're always looking for reliable partners worldwide to grow our network.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#91c73e]/60 transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#194479]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#194479]" />
                    </div>
                    <div>
                      <h3 className="titleFont text-[#194479] font-semibold text-sm sm:text-base mb-1">
                        {benefit.title}
                      </h3>
                      <p className="paragraphFont text-gray-600 text-xs sm:text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/inquiry"
                className="buttonFont inline-flex items-center gap-2 bg-[#194479] hover:bg-[#153666] text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/inquiry"
                className="buttonFont inline-flex items-center gap-2 bg-white border-2 border-[#194479] hover:bg-[#194479] hover:text-white text-[#194479] px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glass Card Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/10 backdrop-blur-md">
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <Image
                  src="/services/on_board_currier.jpeg"
                  alt="First & Last Mile Driver"
                  fill
                  className="object-cover"
                  priority={false}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/20 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#91c73e]/20 backdrop-blur-sm border border-[#91c73e]/30 flex items-center justify-center">
                <Truck className="w-8 h-8 text-[#91c73e]" />
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <p className="titleFont text-2xl font-bold text-[#194479]">
                    500+
                  </p>
                  <p className="paragraphFont text-xs text-gray-600">
                    Active Drivers
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

