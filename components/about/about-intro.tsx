"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Globe2, ShieldCheck } from "lucide-react"

export default function AboutIntro() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#91c73e] font-bold tracking-wider uppercase mb-2">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#194479] mb-6 leading-tight">
              Welcome to OBC Care <br />
              <span className="text-gray-700 font-normal text-2xl">Global Logistics Solutions</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p>
                OBC Care was founded in 2018 by Eugen Reimer, who began with a simple but powerful vision — to bridge the world through dependable, human-centered logistics. What started as a small, passionate team determined to deliver shipments that truly matter, has now grown into a global network trusted by industries from aviation to technology.
              </p>
              <p>
                We specialize in On Board Courier (OBC) services, ensuring your critical shipments are hand-carried and delivered with the utmost speed and security. Our dedicated team works 24/7 to provide seamless logistics solutions tailored to your urgent needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">Global Network</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">Secure Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#91c73e]" />
                <span className="text-[#194479] font-semibold">Real-time Tracking</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about.png" // Using placeholder/existing image
                alt="OBC Care Logistics"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay Shape */}
            <div className="absolute bottom-0 right-0 w-3/4 bg-[#194479]/90 backdrop-blur-sm p-8 rounded-tl-[100px] text-white">
              <div className="flex flex-col gap-6 pl-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#91c73e] rounded-full">
                    <Globe2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Extensive Network</h4>
                    <p className="text-sm text-gray-300">Connecting businesses worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#91c73e] rounded-full">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Reliable & Secure</h4>
                    <p className="text-sm text-gray-300">Your shipment is safe with us.</p>
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
