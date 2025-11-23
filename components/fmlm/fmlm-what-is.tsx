"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, Package, ArrowRight } from "lucide-react"

export default function FmlmWhatIs() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-[#194479]/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#194479]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content with Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
              <Truck className="w-4 h-4" />
              What Is First Mile / Last Mile Delivery?
            </div>
            
            <h2 className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight">
              Every shipment begins with a first mile and ends with a last mile — and both are critical.
            </h2>

            {/* First Mile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 rounded-2xl bg-white border-2 border-[#194479]/20 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#194479]/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <h3 className="titleFont text-[#194479] font-bold text-lg mb-2">First Mile Delivery</h3>
                  <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                    Transporting goods from the shipper's location (like a warehouse or supplier) to the next logistics point — often the airport or freight forwarder.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arrow Connector */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-12 h-12 rounded-full bg-[#91c73e]/20 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#91c73e] rotate-90 lg:rotate-0" />
              </div>
            </motion.div>

            {/* Last Mile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative p-6 rounded-2xl bg-white border-2 border-[#91c73e]/20 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#91c73e]/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-[#91c73e]" />
                </div>
                <div>
                  <h3 className="titleFont text-[#194479] font-bold text-lg mb-2">Last Mile Delivery</h3>
                  <p className="paragraphFont text-gray-700 text-sm md:text-base leading-relaxed">
                    The final stretch, moving shipments from the airport, customs warehouse, or terminal directly to the consignee's doorstep.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed pt-4"
            >
              At OBC Care, we ensure both ends of the journey are handled with speed, precision, and care — connecting your cargo from origin to destination seamlessly.
            </motion.p>
          </motion.div>

          {/* Image with Overlay Content */}
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
                  src="https://images.unsplash.com/photo-1601581875101-85c47016a1c2?q=80&w=1200&auto=format&fit=crop"
                  alt="First Mile Last Mile Delivery"
                  fill
                  className="object-cover"
                  priority={false}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/80 via-[#194479]/40 to-transparent" />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-[#194479]">24/7</div>
                        <div className="text-sm text-gray-600">Availability</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#91c73e]">100%</div>
                        <div className="text-sm text-gray-600">Tracked</div>
                      </div>
                    </div>
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

