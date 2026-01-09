"use client"

import { motion } from "framer-motion"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useIsMobile } from "@/hooks/use-mobile"

export default function AboutCTA() {
  const t = useTranslations("AboutCta")
  const isMobile = useIsMobile()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#194479] to-[#1a4a7f] shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#91c73e]/10 skew-x-12 translate-x-20" />
          
          <div className="relative z-10 px-8 py-16 md:p-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.4 : 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t("title")}
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                {t("description")}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/inquiry" 
                  className="w-full sm:w-auto px-8 py-4 bg-[#91c73e] text-white font-bold rounded-full hover:bg-[#82b336] transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t("btnQuote")}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  {t("btnContact")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
