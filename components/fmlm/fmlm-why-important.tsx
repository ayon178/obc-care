"use client"

import { motion } from "framer-motion"
import { Clock, Shield, Globe, Zap, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const reasons = [
  {
    icon: Clock,
    image: "/services/prevent_cost.png",
    color: "#194479",
  },
  {
    icon: Shield,
    image: "/services/ensure_shipment.png",
    color: "#91c73e",
  },
  {
    icon: Globe,
    image: "/services/bridgs_global.png",
    color: "#194479",
  },
  {
    icon: Zap,
    image: "/services/support.png",
    color: "#91c73e",
  },
  {
    icon: CheckCircle2,
    image: "/services/gurantee.png",
    color: "#194479",
  },
]

export default function FmlmWhyImportant() {
  const t = useTranslations("FmlmWhyImportant")
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1601581875101-85c47016a1c2?q=80&w=1920&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold">
            {t("badge")}
          </span>
          <h2 className="headingFont mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight">
            {t("title")}
          </h2>
          <p className="paragraphFont mt-4 text-gray-700 text-base md:text-lg">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Background */}
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={t(`items.${i}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, ${r.color}00, ${r.color}E6)`,
                    }}
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                      style={{ backgroundColor: `${r.color}20` }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white">
                  <h3
                    className="titleFont text-xl font-bold mb-2 leading-snug"
                    style={{ color: r.color }}
                  >
                    {t(`items.${i}.title`)}
                  </h3>
                  <p className="paragraphFont text-gray-600 text-sm md:text-base leading-relaxed">
                    {t(`items.${i}.description`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

