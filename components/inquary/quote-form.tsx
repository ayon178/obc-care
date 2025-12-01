import React, { useState } from "react"
import {
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Send,
  Loader2,
} from "lucide-react"

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  inquiryType: string
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
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
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

    // Simulate minimum loading time for UX + API call
    try {
      // In a real app, you'd submit to your backend here.
      // We will assume success and then run the AI analysis.

    //   const result = await analyzeQuoteRequest(formData)
    //   setAnalysis(result)
    } catch (error) {
      console.error("Submission failed", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-transparent border-r-2 border-primary flex flex-col justify-center min-h-screen relative">
      <div className="max-w-xl mx-auto w-full">
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
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 lg:p-16 ">
          {/* Name */}
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
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <Mail size={18} className="text-primary" />
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <Phone size={18} className="text-primary" />
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors"
            />
          </div>

          {/* Inquiry Type */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <FileText size={18} className="text-primary" />
              Select Your Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 text-slate-500 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors"
            >
              <option value="" disabled>
                Select an inquiry type
              </option>
              <option value="Air Freight">Air Freight</option>
              <option value="Ocean Freight">Ocean Freight</option>
              <option value="Road Freight">Road Freight</option>
              <option value="Warehousing">Warehousing</option>
              <option value="Customs Clearance">Customs Clearance</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-base font-semibold text-slate-700">
              <MessageSquare size={18} className="text-primary" />
              Message Box
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              className="w-full bg-gray-50 border border-gray-200 text-slate-900 text-base rounded-md focus:ring-primary focus:border-primary block p-4 transition-colors resize-none"
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

        {/* AI Result Section */}
        {analysis && (
          <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded text-white">
                <FileText size={16} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Instant Quote Estimate
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Estimated Cost
                </p>
                <p className="text-xl font-bold text-green-600">
                  {analysis.estimatedRange}
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                  Recommended Mode
                </p>
                <p className="text-lg font-semibold text-brand-blue">
                  {analysis.recommendedMode}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                  Logistics Plan
                </p>
                <ul className="space-y-1">
                  {analysis.logisticsPlan.map((step, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="min-w-[16px] text-primary font-bold">
                        {idx + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuoteForm
