"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Globe, Clock, Briefcase, Plane } from "lucide-react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import { useTranslations } from "next-intl"

const BecomeOBCPage = () => {
  const t = useTranslations("BecomeObcPage")

  const scrollToForm = () => {
    const element = document.getElementById("registration-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
        window.open("https://bit.ly/OBCCARERegistration", "_blank")
    }
  }

  const perks = [
    {
      icon: Plane,
      title: t("whyBecomeObc.items.0.title"),
      description: t("whyBecomeObc.items.0.description")
    },
    {
      icon: Clock,
      title: t("whyBecomeObc.items.1.title"),
      description: t("whyBecomeObc.items.1.description")
    },
    {
      icon: Globe,
      title: t("whyBecomeObc.items.2.title"),
      description: t("whyBecomeObc.items.2.description")
    },
    {
      icon: Briefcase,
      title: t("whyBecomeObc.items.3.title"),
      description: t("whyBecomeObc.items.3.description")
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[100vh] pt-20 md:h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#194479] pt-10 md:pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#194479] via-[#12335b] to-[#0d2440]" />
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-[#91C73E]/10 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
          {/* Optional: Add a subtle pattern or map overlay here if available */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/world_map.avif')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#91C73E]/20 text-[#91C73E] text-sm font-semibold mb-6 border border-[#91C73E]/30 backdrop-blur-sm">
              {t("hero.badge")}
            </span>
            <h1 className="headingFont text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
              {t("hero.titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#91C73E] to-[#b8e075]">{t("hero.titleSuffix")}</span>
            </h1>
            <p className="paragraphFont text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed font-light">
              {t("hero.description")}
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                onClick={scrollToForm}
                className="bg-[#91C73E] hover:bg-[#82b336] text-white text-lg px-10 py-7 h-auto rounded-full shadow-[0_0_20px_rgba(145,199,62,0.3)] hover:shadow-[0_0_30px_rgba(145,199,62,0.5)] transition-all transform hover:-translate-y-1 font-semibold"
              >
                {t("hero.btnApply")}
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById("why-become-obc");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="bg-white/5 hover:bg-white/10 text-white border-white/20 text-lg px-10 py-7 h-auto rounded-full backdrop-blur-sm transition-all cursor-pointer"
              >
                {t("hero.btnLearnMore")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Join Network Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="headingFont text-3xl md:text-4xl font-bold text-[#194479] mb-6">
                {t("joinNetwork.title")}
              </h2>
              <p className="paragraphFont text-gray-600 text-lg mb-8 leading-relaxed">
                {t("joinNetwork.description")}
              </p>
              
              <Button 
                onClick={scrollToForm}
                className="bg-[#194479] hover:bg-[#194479]/90 text-white text-lg px-8 py-4 h-auto mb-12"
              >
                {t("joinNetwork.btnBecomeObc")}
              </Button>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="headingFont text-xl font-semibold text-[#194479] mb-4">
                  {t("joinNetwork.requirementsTitle")}
                </h3>
                <div className="grid gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#91C73E] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t("joinNetwork.requirements.0")}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#91C73E] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t("joinNetwork.requirements.1")}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#91C73E] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t("joinNetwork.requirements.2")}</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-500 italic">
                  {t("joinNetwork.note")}
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
                  {/* Placeholder for professional courier image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-lg">{t("joinNetwork.imagePlaceholder")}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Become OBC Section */}
      <section id="why-become-obc" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="headingFont text-3xl md:text-4xl font-bold text-[#194479] text-center mb-16">
            {t("whyBecomeObc.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {perks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#194479]/10 rounded-xl flex items-center justify-center mb-6 text-[#194479]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="headingFont text-xl font-bold text-[#194479] mb-4">
                  {item.title}
                </h3>
                <p className="paragraphFont text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#194479] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="headingFont text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="paragraphFont text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Button 
            onClick={() => window.open("https://bit.ly/OBCCARERegistration", "_blank")}
            className="bg-[#91C73E] hover:bg-[#91C73E]/90 text-white text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            {t("cta.btnApply")}
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BecomeOBCPage
