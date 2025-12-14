"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/shared/Navbar"
import InquiryForm from "@/components/inquiry-form"
import { ArrowLeft, Mail, Phone, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"
import HowItWorks from "@/components/inquary/how-it-work"
import QuoteForm from "@/components/inquary/quote-form"
import { ChevronsLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <Navbar />

      {/* Advanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#91C73E]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#194479]/20 to-transparent rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#194479 1px, transparent 1px),
              linear-gradient(90deg, #194479 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#91C73E]/20 to-transparent"
            style={{
              top: `${20 + i * 30}%`,
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          

          {/* Header with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-16 mt-10"
          >
            {/* Badge with Pulse Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <motion.div
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#91C73E]/20 to-[#91C73E]/10 backdrop-blur-sm border border-[#91C73E]/30 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#91C73E]/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Shield
                  className="w-4 h-4 relative z-10"
                  style={{ color: "#91C73E" }}
                />
                <span
                  className="text-sm font-bold relative z-10"
                  style={{ color: "#91C73E" }}
                >
                  Get in Touch
                </span>
              </motion.div>
            </motion.div>

            {/* Title with Word Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#194479] via-[#1d5a96] to-[#194479] bg-clip-text text-transparent"
              >
                Inquiry Form
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Fill out the form below and we'll get back to you within minutes.
              Our team is available 24/7 to assist you.
            </motion.p>
          </motion.div>

          {/* Enhanced Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Available round the clock",
                gradient: "from-[#91C73E]/20 to-[#91C73E]/5",
                iconBg: "#91C73E",
              },
              {
                icon: Mail,
                title: "Quick Response",
                description: "Response within minutes",
                gradient: "from-[#194479]/20 to-[#194479]/5",
                iconBg: "#194479",
              },
              {
                icon: Phone,
                title: "Direct Contact",
                description: "Call us anytime",
                gradient: "from-[#91C73E]/20 to-[#91C73E]/5",
                iconBg: "#91C73E",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:border-[#194479]/30 transition-all overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                    style={{ backgroundColor: `${item.iconBg}20` }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      className="w-8 h-8 relative z-10"
                      style={{ color: item.iconBg }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: `${item.iconBg}30` }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>

                  <h3
                    className="relative z-10 font-bold text-xl mb-2"
                    style={{ color: "#194479" }}
                  >
                    {item.title}
                  </h3>
                  <p className="relative z-10 text-gray-600">
                    {item.description}
                  </p>

                  {/* Shine Effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          className="relative min-h-screen w-full flex flex-col lg:flex-row gap-x-16 bg-white"
        >
            <QuoteForm />

          {/* How it works */}
          <div className="relative z-10 pt-6 px-4 sm:pt-8 sm:px-6 md:pt-10 md:pr-10 lg:pr-12">
            <h2 className="text-2xl text-primary sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 tracking-tight">
              How It Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-12">
              {/* Step 1 */}
              <div className="space-y-2">
                <span className="text-slate-500 font-bold text-sm sm:text-base md:text-lg tracking-widest block mb-1">
                  STEP
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">
                  01
                </div>
                <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-2 leading-tight">
                  Submit your request. 

                </h3>
                {/* Decorative Chevron - positioned roughly where it is in the image */}
                <div className="hidden md:block text-primary mt-4">
                  <ChevronsLeft
                    size={32}
                    className="transform -rotate-45 opacity-80"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <span className="text-slate-500 font-bold text-sm sm:text-base md:text-lg tracking-widest block mb-1">
                  STEP
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">
                  02
                </div>
                <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-2 leading-tight">
                  Review our quote.
                </h3>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <span className="text-slate-500 font-bold text-sm sm:text-base md:text-lg tracking-widest block mb-1">
                  STEP
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">
                  03
                </div>
                <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-2 leading-tight">
                  Confirm the mission. 

                </h3>
              </div>

              {/* Step 4 */}
              <div className="space-y-2">
                <span className="text-slate-500 font-bold text-sm sm:text-base md:text-lg tracking-widest block mb-1">
                  STEP
                </span>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">
                  04
                </div>
                <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-2 leading-tight">
                  Sit back and receive your shipment with complete care.
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Footer Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative p-8 bg-gradient-to-r from-[#194479]/10 via-[#91C73E]/10 to-[#194479]/10 rounded-2xl border border-[#194479]/20 backdrop-blur-sm overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#194479]/5 via-[#91C73E]/5 to-[#194479]/5"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 flex items-start gap-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Shield className="w-6 h-6 text-[#194479] flex-shrink-0 mt-1" />
              </motion.div>
              <div>
                <p className="text-gray-700 font-medium">
                  <strong className="text-[#194479]">Privacy Notice:</strong>{" "}
                  Your information is secure and will only be used to respond to
                  your inquiry. We respect your privacy and never share your
                  data with third parties.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
