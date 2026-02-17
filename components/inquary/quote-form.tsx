import React, { useState } from "react"
import {
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Send,
  Loader2,
  Building,
  Factory,
  Package,
} from "lucide-react"
import { SuccessModal } from "@/components/shared/success-modal"

export interface QuoteFormData {
  name: string
  phone: string
  company: string
  email: string
  inquiryType: string
  industry: string
  dimensions: string
  weight: string
  message: string
}

export interface QuoteAnalysis {
  estimatedRange: string
  recommendedMode: string
  logisticsPlan: string[]
  riskFactors: string[]
}

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    company: "",
    email: "",
    inquiryType: "",
    industry: "",
    dimensions: "",
    weight: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [analysis, setAnalysis] = useState<QuoteAnalysis | null>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setAnalysis(null)

    try {
      const response = await fetch("https://formspree.io/f/mwvnbyeg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          name: "",
          phone: "",
          company: "",
          email: "",
          inquiryType: "",
          industry: "",
          dimensions: "",
          weight: "",
          message: "",
        })
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission failed", error)
      alert("Something went wrong. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-transparent border-r-2 border-primary/10 flex flex-col justify-center min-h-screen relative">
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Quote Request Sent!"
        description="We have received your quote request. Our team will review the details and get back to you with a tailored logistics plan shortly."
      />

      <div className="max-w-2xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-10 pt-10 px-10">
          <div className="inline-block border-b-[3px] border-primary pb-1 mb-4">
            <h2 className="text-base font-bold text-primary tracking-[0.2em] uppercase">
              Request a Quote
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Want to manage your shipments with us?
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 mx-6">

          {/* Row 1: Name */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <User size={18} className="text-primary" />
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
            />
          </div>

          {/* Row 2: Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
                <Phone size={18} className="text-primary" />
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 ..."
                className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
                <Building size={18} className="text-primary" />
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Ltd."
                className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
              />
            </div>
          </div>

          {/* Row 3: Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <Mail size={18} className="text-primary" />
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
            />
          </div>

          {/* Row 4: Service & Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
                <FileText size={18} className="text-primary" />
                Service
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 text-slate-500 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
              >
                <option value="" disabled>Choose the service</option>
                <option>On Board Courier Service</option>
                <option>First Mile Delivery</option>
                <option>Last Mile Delivery</option>
                <option>Road Freight Service</option>
                <option>Next Flight Out Service</option>
                <option>Air Freight Service</option>
                <option>Customs Clearance Assistance</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
                <Factory size={18} className="text-primary" />
                Industries
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 text-slate-500 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
              >
                <option value="" disabled>Choose the industry</option>
                <option>AOG</option>
                <option>Automotive</option>
                <option>Machine & Spare Parts</option>
                <option>Fashion & Luxury</option>
                <option>Prototypes & Electronics</option>
                <option>Sensitive Documents</option>
              </select>
            </div>
          </div>

          {/* Row 5: Dimensions & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
                <Package size={18} className="text-primary" />
                Dimensions
              </label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                placeholder="L x W x H (cm)"
                className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
                <Package size={18} className="text-primary" />
                Weight
              </label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="kg"
                className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <MessageSquare size={18} className="text-primary" />
              Message Box
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors resize-none outline-none"
            />
            <p className="text-sm text-slate-400 mt-1">
              Optional - Provide additional details about your inquiry
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Processing Request...
              </>
            ) : (
              <>
                <Send size={20} className="transform rotate-45 -mt-1" />
                Submit Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteForm
