"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
} from "lucide-react"

const inquiryTypes = [
  "Get a Free Quote",
  "Request a Copy of an Invoice",
  "Ask About Our Services",
  "Partner or Vendor Inquiry",
  "General Question / Other",
]

const fieldIcons = {
  name: User,
  email: Mail,
  contact: Phone,
  inquiryType: FileText,
  message: MessageSquare,
}

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    inquiryType: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required"
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid contact number"
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)

      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          contact: "",
          inquiryType: "",
          message: "",
        })
        setSubmitStatus("idle")
        setFocusedField(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const FieldWrapper = ({
    field,
    label,
    required = false,
    children,
    delay = 0,
  }: {
    field: string
    label: string
    required?: boolean
    children: React.ReactNode
    delay?: number
  }) => {
    const Icon = fieldIcons[field as keyof typeof fieldIcons]
    const isFocused = focusedField === field
    const hasError = !!errors[field]
    const hasValue =
      formData[field as keyof typeof formData]?.toString().length > 0

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
        className="relative"
      >
        <label
          htmlFor={field}
          className="block text-sm font-bold mb-3 flex items-center gap-2"
          style={{ color: "#194479" }}
        >
          {Icon && (
            <motion.div
              animate={{
                scale: isFocused ? 1.1 : 1,
                rotate: isFocused ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-4 h-4" />
            </motion.div>
          )}
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>

        <div className="relative">
          <motion.div
            className={`absolute inset-0 rounded-lg transition-all duration-300 ${
              isFocused
                ? "bg-gradient-to-r from-[#194479]/10 via-[#91C73E]/10 to-[#194479]/10 blur-sm"
                : ""
            }`}
            animate={{
              opacity: isFocused ? 1 : 0,
            }}
          />

          <div className="relative">{children}</div>

          {/* Floating Label Effect */}
          {hasValue && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-2 left-3 px-2 bg-white text-xs font-medium"
              style={{ color: "#91C73E" }}
            >
              {label}
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {errors[field] && (
            <motion.p
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {errors[field]}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Name Field */}
        <FieldWrapper field="name" label="Your Name" required delay={0.1}>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            placeholder="Enter your full name"
            className={`w-full h-12 text-base transition-all ${
              errors.name
                ? "border-red-500 focus-visible:ring-red-500/50"
                : focusedField === "name"
                ? "border-[#91C73E] focus-visible:ring-[#91C73E]/50"
                : ""
            }`}
            aria-invalid={!!errors.name}
          />
        </FieldWrapper>

        {/* Email Field */}
        <FieldWrapper field="email" label="Email" required delay={0.2}>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="your.email@example.com"
            className={`w-full h-12 text-base transition-all ${
              errors.email
                ? "border-red-500 focus-visible:ring-red-500/50"
                : focusedField === "email"
                ? "border-[#91C73E] focus-visible:ring-[#91C73E]/50"
                : ""
            }`}
            aria-invalid={!!errors.email}
          />
        </FieldWrapper>

        {/* Contact Number Field */}
        <FieldWrapper
          field="contact"
          label="Contact Number"
          required
          delay={0.3}
        >
          <Input
            id="contact"
            type="tel"
            value={formData.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            onFocus={() => setFocusedField("contact")}
            onBlur={() => setFocusedField(null)}
            placeholder="+1 (555) 123-4567"
            className={`w-full h-12 text-base transition-all ${
              errors.contact
                ? "border-red-500 focus-visible:ring-red-500/50"
                : focusedField === "contact"
                ? "border-[#91C73E] focus-visible:ring-[#91C73E]/50"
                : ""
            }`}
            aria-invalid={!!errors.contact}
          />
        </FieldWrapper>

        {/* Inquiry Type Field */}
        <FieldWrapper
          field="inquiryType"
          label="Select Your Inquiry Type"
          required
          delay={0.4}
        >
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => handleChange("inquiryType", value)}
            onOpenChange={(open) =>
              setFocusedField(open ? "inquiryType" : null)
            }
          >
            <SelectTrigger
              id="inquiryType"
              className={`w-full h-12 text-base transition-all ${
                errors.inquiryType
                  ? "border-red-500 focus-visible:ring-red-500/50"
                  : focusedField === "inquiryType"
                  ? "border-[#91C73E] focus-visible:ring-[#91C73E]/50"
                  : ""
              }`}
              aria-invalid={!!errors.inquiryType}
            >
              <SelectValue placeholder="Select an inquiry type" />
            </SelectTrigger>
            <SelectContent>
              {inquiryTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FieldWrapper>

        {/* Message Field */}
        <FieldWrapper field="message" label="Message Box" delay={0.5}>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            placeholder="Tell us more about your inquiry..."
            rows={6}
            className={`w-full resize-none text-base transition-all ${
              focusedField === "message"
                ? "border-[#91C73E] focus-visible:ring-[#91C73E]/50"
                : ""
            }`}
          />
          <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            Optional - Provide additional details about your inquiry
          </p>
        </FieldWrapper>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-6"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="group relative w-full py-3.5 px-6 rounded-xl font-semibold text-base text-white transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #194479 0%, #1d5a96 50%, #194479 100%)",
              backgroundSize: "200% 200%",
            }}
          >
            {/* Animated Background */}
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#91C73E] to-[#7bb033] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 flex items-start gap-4 shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              </motion.div>
              <div className="flex-1">
                <p className="font-bold text-green-800 mb-1">
                  Inquiry Submitted Successfully!
                </p>
                <p className="text-sm text-green-700">
                  We'll get back to you within minutes. Check your email for
                  confirmation.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="p-6 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 flex items-start gap-4 shadow-lg"
            >
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-bold text-red-800 mb-1">Submission Failed</p>
                <p className="text-sm text-red-700">
                  Please try again or contact us directly at support@obccare.com
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  )
}
