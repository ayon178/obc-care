"use client"

import { motion } from "framer-motion"
import { ThumbsUp, Shield, Globe } from "lucide-react"

export default function AboutStats() {
  return (
    <section className="py-20 bg-[#194479] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Make Strongest Services Above World
          </h2>
          <p className="text-gray-300 text-lg">
            Experience the pinnacle of logistics excellence with our world-class services designed to exceed your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6"
          >
            <div className="h-20 w-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              <ThumbsUp className="h-10 w-10 text-[#91c73e]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted Services</h3>
            <p className="text-gray-400">Reliable solutions you can count on.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6"
          >
            <div className="h-20 w-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-10 w-10 text-[#91c73e]" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Safe</h3>
            <p className="text-gray-400">Security is our top priority.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6"
          >
            <div className="h-20 w-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="h-10 w-10 text-[#91c73e]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-400">Connecting you to the world.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
