"use client"

import { motion } from "framer-motion"
import React from "react"
import { DoorOpen, Plane, MoveRight, Landmark } from "lucide-react"
import { useTranslations } from "next-intl"

export default function DeliveryOptions() {
  const t = useTranslations("DeliveryOptions")

  const options = [
    {
      id: "door-to-door",
      icon: <DoorOpen className="w-6 h-6 text-[#91c73e]" />,
      title: t("options.door-to-door.title"),
      description: t("options.door-to-door.description"),
    },
    {
      id: "airport-to-airport",
      icon: <Plane className="w-6 h-6 text-[#91c73e]" />,
      title: t("options.airport-to-airport.title"),
      description: t("options.airport-to-airport.description"),
    },
    {
      id: "door-to-airport",
      icon: <MoveRight className="w-6 h-6 text-[#91c73e]" />,
      title: t("options.door-to-airport.title"),
      description: t("options.door-to-airport.description"),
    },
    {
      id: "airport-to-door",
      icon: <Landmark className="w-6 h-6 text-[#91c73e]" />,
      title: t("options.airport-to-door.title"),
      description: t("options.airport-to-door.description"),
    },
  ]

  return (
    <section className="relative py-14 md:py-24 bg-white overflow-hidden">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-8 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194479]/10 text-[#194479] text-xs md:text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#91c73e]" />
            {t("header.label")}
          </span>
          <h2 className="headingFont mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#194479]">
            {t("header.title")}
          </h2>
          <p className="paragraphFont mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600 px-1">
            {t("header.description")}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {options.map((opt, index) => (
            <motion.div
              key={opt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group relative rounded-2xl p-4 md:p-6 bg-white/70 backdrop-blur-md border border-gray-200 hover:border-[#91c73e]/60 transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
            >
              {/* gradient border accent */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none [mask-image:radial-gradient(1200px_600px_at_50%_10%,black,transparent)]">
                <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(135deg,rgba(25,68,121,0.25),rgba(145,199,62,0.25))] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-[#194479]/10 p-3">
                  {opt.icon}
                </div>
                <div>
                  <h3 className="titleFont text-sm sm:text-base md:text-lg text-[#194479] leading-snug">
                    {opt.title}
                  </h3>
                  <p className="paragraphFont mt-1.5 md:mt-2 text-gray-600 text-sm md:text-base">
                    {opt.description}
                  </p>
                </div>
              </div>

              {/* Hover lift without color change */}
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-2xl"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


