"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { SuccessModal } from "@/components/shared/success-modal"
import { toast } from "sonner" // Assuming sonner is available based on file list, or I will use a simple alert if not. File list showed sonner.tsx in ui folder.

export default function ContactFormSection() {
  const t = useTranslations("ContactForm");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch("https://formspree.io/f/mwvnbyeg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setShowSuccess(true)
        event.currentTarget.reset()
      } else {
        console.error("Form submission failed")
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form", error)
      alert("Something went wrong. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceKeys = [
    "obc",
    "firstMile",
    "lastMile",
    "roadFreight",
    "nfo",
    "airFreight",
    "customs",
  ];

  const industryKeys = [
    "aog",
    "automotive",
    "machinery",
    "fashion",
    "electronics",
    "documents",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#194479] mb-6">{t("title")}</h2>
            <p className="text-gray-600 mb-8">
              {t("description")}
            </p>

            <SuccessModal
              isOpen={showSuccess}
              onClose={() => setShowSuccess(false)}
              title={t("success.title") || "Message Sent Successfully!"}
              description={t("success.description") || "Thank you for contacting OBC Care. We have received your inquiry and will get back to you shortly."}
            />

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1: Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("labels.name")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                  placeholder={t("placeholders.name")}
                />
              </div>

              {/* Row 2: Business Phone & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("labels.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder={t("placeholders.phone")}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("labels.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder={t("placeholders.company")}
                  />
                  <p className="text-xs text-gray-400 mt-1">{t("hints.company")}</p>
                </div>
              </div>

              {/* Row 3: Business Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("labels.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                  placeholder={t("placeholders.email")}
                />
                <p className="text-xs text-gray-400 mt-1">{t("hints.email")}</p>
              </div>

              {/* Row 4: Service & Industries */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("labels.service")}
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>{t("placeholders.chooseService")}</option>
                    {serviceKeys.map((key) => (
                      <option key={key} value={t(`options.services.${key}`)}>
                        {t(`options.services.${key}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("labels.industry")}
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>{t("placeholders.chooseIndustry")}</option>
                    {industryKeys.map((key) => (
                      <option key={key} value={t(`options.industries.${key}`)}>
                        {t(`options.industries.${key}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Dimensions & Weight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("labels.dimensions")}
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder={t("placeholders.dimensions")}
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("labels.weight")}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                      placeholder={t("placeholders.weight")}
                    />
                  </div>
                </div>
              </div>

              {/* Row 6: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-[#194479]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </span>
                  {t("labels.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t("placeholders.message")}
                />
                <p className="text-gray-400 text-sm mt-2">{t("hints.message")}</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#194479] text-white font-bold rounded-lg hover:bg-[#13335b] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    {t("button")}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Head Office Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#91c73e]">
              <h3 className="text-xl font-bold text-[#194479] mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-[#91c73e]" />
                {t("office.title")}
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-gray-800 mb-1">{t("office.name")}</p>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: t.raw("office.address") }}
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#91c73e]" /> {t("office.hotline")}
                  </h4>
                  <p className="text-gray-600">+49 176 459 224 85</p>
                  <p className="text-gray-600">+49 227 394 315 64</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#91c73e]" /> {t("office.email")}
                  </h4>
                  <a href="mailto:request@obc-care.com" className="text-[#194479] hover:underline">
                    request@obc-care.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#91c73e]" /> {t("office.hoursTitle")}
                  </h4>
                  <p className="text-gray-600">{t("office.days")}</p>
                  <p className="text-[#91c73e] font-medium">{t("office.availability")}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-2xl shadow-lg h-[300px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.118582956556!2d7.1398727!3d50.99548079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bed7c900036025%3A0x4ea0c276bcd6ab87!2sBirkenh%C3%B6henweg%2017%2C%2051465%20Bergisch%20Gladbach%2C%20Germany!5e0!3m2!1sen!2sbd!4v1767427816089!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
