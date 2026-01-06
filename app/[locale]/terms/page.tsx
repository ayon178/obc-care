"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useTranslations } from "next-intl"

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left group transition-colors"
      >
        <span className="headingFont text-lg md:text-xl font-semibold text-[#194479] group-hover:text-[#91c73e] transition-colors">{title}</span>
        <div className={`p-1 rounded-full border border-[#194479] group-hover:border-[#91c73e] transition-colors ${isOpen ? 'bg-[#194479] group-hover:bg-[#91c73e]' : ''}`}>
          {isOpen ? (
             <Minus className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#194479] group-hover:text-[#91c73e]'}`} />
          ) : (
             <Plus className="w-4 h-4 text-[#194479] group-hover:text-[#91c73e]" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 paragraphFont text-gray-700 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TermsPage() {
  const t = useTranslations("Terms")

  // Helper to render array content
  const renderContent = (key: string) => {
    const content = t.raw(key) as string[]
    return content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Same padding as Privacy Policy */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 md:pt-24 lg:pt-44 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="headingFont text-3xl md:text-4xl lg:text-5xl font-bold text-[#194479] mb-8">{t("title")}</h1>
          
          <div className="prose prose-slate md:prose-lg max-w-none paragraphFont text-gray-700 mb-6">
            <p>
              {t("intro")}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="headingFont text-xl font-semibold text-[#194479] mb-6">{t("scopeTitle")}</h2>
            <p className="paragraphFont text-gray-700 mb-6">{t("scopeIntro")}</p>

            <AccordionItem title={t("generalProvisionsTitle")}>
              {renderContent("generalProvisionsContent")}
            </AccordionItem>

            <AccordionItem title={t("intellectualPropertyTitle")}>
              {renderContent("intellectualPropertyContent")}
            </AccordionItem>

            <AccordionItem title={t("trademarkTitle")}>
              {renderContent("trademarkContent")}
            </AccordionItem>

            <AccordionItem title={t("websiteUsageTitle")}>
              {renderContent("websiteUsageContent")}
            </AccordionItem>

            <AccordionItem title={t("personalDataTitle")}>
              {renderContent("personalDataContent")}
            </AccordionItem>

            <AccordionItem title={t("siteAccessibilityTitle")}>
              {renderContent("siteAccessibilityContent")}
            </AccordionItem>

            <AccordionItem title={t("externalLinksTitle")}>
              {renderContent("externalLinksContent")}
            </AccordionItem>

            <AccordionItem title={t("governingLawTitle")}>
              {renderContent("governingLawContent")}
            </AccordionItem>

            <AccordionItem title={t("forwardLookingTitle")}>
              {renderContent("forwardLookingContent")}
            </AccordionItem>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
