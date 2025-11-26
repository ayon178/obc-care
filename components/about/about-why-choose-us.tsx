"use client"

import { motion } from "framer-motion"
import { Globe, ShieldCheck, Clock, Users, Truck, Headphones } from "lucide-react"

export default function AboutWhyChooseUs() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting you to over 200 countries worldwide with our extensive logistics network.",
    },
    {
      icon: ShieldCheck,
      title: "100% Safe Delivery",
      description: "Your shipments are handled with the highest level of security and care from pickup to delivery.",
    },
    {
      icon: Clock,
      title: "Fastest Delivery",
      description: "We prioritize speed and efficiency to ensure your urgent shipments arrive on time, every time.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our dedicated team of logistics professionals is ready to handle your most complex requirements.",
    },
    {
      icon: Truck,
      title: "Door-to-Door",
      description: "Seamless door-to-door service, managing every step of the logistics chain for you.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to keep you informed and assist with any queries.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#91c73e] font-bold tracking-wider uppercase">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#194479] mt-2">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="h-14 w-14 bg-[#194479]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#91c73e] transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[#194479] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#194479] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
