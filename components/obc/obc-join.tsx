"use client"

import { motion } from "framer-motion"
import { Plane, Shield, Globe, Clock, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const benefits = [
  {
    icon: Plane,
    title: "Travel Opportunities",
    description: "Explore the world while earning",
  },
  {
    icon: Shield,
    title: "Flexible Schedule",
    description: "Choose missions that fit your lifestyle",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Join 1,200+ couriers worldwide",
  },
  {
    icon: Clock,
    title: "Competitive Pay",
    description: "Fair compensation for your expertise",
  },
]

export default function ObcJoin() {
  const t = useTranslations("ObcJoin")

  const benefitsWithData = benefits.map((b, i) => ({
    ...b,
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`),
  }))

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#194479]/10 blur-3xl" />
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#194479]/10 text-[#194479] text-xs sm:text-sm font-semibold"
            >
              <Plane className="w-4 h-4" />
              <span>{t("badge")}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="headingFont text-3xl sm:text-4xl md:text-5xl font-bold text-[#194479] leading-tight"
            >
              {t("title")}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {t("description1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="paragraphFont text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {t("description2")}
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {benefitsWithData.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:border-[#91c73e]/60 transition-all"
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="pt-4"
            >
              <Link
                href="/inquiry"
                className="buttonFont inline-flex items-center gap-2 bg-[#194479] hover:bg-[#153666] text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
              >
                <span>{t("cta")}</span>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md">
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
                  alt={t("imageAlt")}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#194479]/20 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#91c73e]/20 backdrop-blur-sm border border-[#91c73e]/30 flex items-center justify-center">
                <Plane className="w-8 h-8 text-[#91c73e]" />
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
                  <Globe className="w-6 h-6 text-[#194479]" />
                </div>
                <div>
                  <p className="titleFont text-2xl font-bold text-[#194479]">
                    1,200+
                  </p>
                  <p className="paragraphFont text-xs text-gray-600">
                    {t("stats")}
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

