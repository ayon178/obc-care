"use client"

import { motion } from "framer-motion"
import { Globe, ShieldCheck, Clock, Users, Truck, Headphones } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AboutWhyChooseUs() {
  const t = useTranslations("AboutWhyChooseUs")
  const isMobile = useIsMobile()

  const features = [
    {
      icon: Globe,
      title: t("items.0.title"),
      description: t("items.0.description"),
    },
    {
      icon: ShieldCheck,
      title: t("items.1.title"),
      description: t("items.1.description"),
    },
    {
      icon: Clock,
      title: t("items.2.title"),
      description: t("items.2.description"),
    },
    {
      icon: Users,
      title: t("items.3.title"),
      description: t("items.3.description"),
    },
    {
      icon: Truck,
      title: t("items.4.title"),
      description: t("items.4.description"),
    },
    {
      icon: Headphones,
      title: t("items.5.title"),
      description: t("items.5.description"),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#91c73e] font-bold tracking-wider uppercase">{t("label")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#194479] mt-2">{t("title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? index * 0.05 : index * 0.1 }}
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
