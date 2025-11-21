
"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "Unmatched Speed & Reliability",
    description: "Leveraging advanced logistics to ensure your package arrives on time, every time.",
  },
  {
    name: "Transparent Tracking",
    description: "Real-time monitoring from pickup to delivery for your peace of mind.",
  },
  {
    name: "Dedicated Support",
    description: "Our team is available around the clock to assist with any inquiries.",
  },
]

export default function OurCommitment() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Commitment</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need for seamless delivery
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            This is a placeholder component. Please replace the content and styling with the design from your reference image.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative pl-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
