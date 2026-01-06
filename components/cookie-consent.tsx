"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "@/i18n/routing"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export default function CookieConsent() {
  const t = useTranslations("CookieConsent")
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const [marketingEnabled, setMarketingEnabled] = useState(false)

  // Check if current page is exempt from cookie gate
  const isExemptPage = pathname.includes("/privacy-policy") || 
                       pathname.includes("/terms") || 
                       pathname.includes("/impressum")

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent")
    
    // Show banner if no consent AND not on exempt page
    if (!consent && !isExemptPage) {
      setIsVisible(true)
    }
  }, [isExemptPage])

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  const handleManagePreferences = () => {
    setShowPreferences(!showPreferences)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      timestamp: new Date().toISOString()
    }))
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
          {/* Background overlay that blocks content */}
          <div className="absolute inset-0" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#2a2d3a] text-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 pb-4">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                {t("title")}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t("description")}
                {" "}
                <Link 
                  href="/privacy-policy" 
                  className="text-[#91c73e] hover:underline"
                >
                  {t("managePreferencesLink")}
                </Link>
              </p>
            </div>

            {/* Preferences Section (collapsible) */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 overflow-hidden"
                >
                  <div className="py-4 space-y-3 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">{t("necessary")}</p>
                        <p className="text-xs text-gray-400">{t("necessaryDesc")}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="w-5 h-5 accent-[#91c73e]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">{t("analytics")}</p>
                        <p className="text-xs text-gray-400">{t("analyticsDesc")}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="w-5 h-5 accent-[#91c73e]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">{t("marketing")}</p>
                        <p className="text-xs text-gray-400">{t("marketingDesc")}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={marketingEnabled}
                        onChange={(e) => setMarketingEnabled(e.target.checked)}
                        className="w-5 h-5 accent-[#91c73e]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="p-6 pt-4 space-y-3">
              {showPreferences ? (
                <button
                  onClick={handleSavePreferences}
                  className="w-full px-4 py-3 bg-[#91c73e] text-white font-semibold rounded-lg hover:bg-[#7fb030] transition-colors"
                >
                  {t("savePreferences")}
                </button>
              ) : (
                <button
                  onClick={handleAcceptAll}
                  className="w-full px-4 py-3 bg-white text-[#2a2d3a] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {t("acceptAll")}
                </button>
              )}
              
              <button
                onClick={handleRejectAll}
                className="w-full px-4 py-3 bg-transparent text-white font-semibold rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
              >
                {t("rejectAll")}
              </button>
              
              <button
                onClick={handleManagePreferences}
                className="w-full px-4 py-3 bg-transparent text-gray-300 font-semibold rounded-lg hover:text-white transition-colors text-sm"
              >
                {showPreferences ? t("hidePreferences") : t("managePreferences")}
              </button>
            </div>

            {/* Footer Links */}
            <div className="px-6 pb-6 flex items-center justify-center gap-4 text-xs text-gray-400">
              <Link 
                href="/privacy-policy" 
                className="hover:text-[#91c73e] transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
              <span>•</span>
              <Link 
                href="/impressum" 
                className="hover:text-[#91c73e] transition-colors"
              >
                {t("legalNotice")}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
