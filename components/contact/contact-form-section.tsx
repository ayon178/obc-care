"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactFormSection() {
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
            <h2 className="text-3xl font-bold text-[#194479] mb-6">Inquiry Form</h2>
            <p className="text-gray-600 mb-8">
              If you have inquiries about our services, On Board Courier requests, or partnership opportunities, please fill out the form below — our team will respond shortly.
            </p>

            <form className="space-y-6">
              {/* Row 1: Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Row 2: Business Phone & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Business telephone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder="+44 ..."
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder="Text"
                  />
                  <p className="text-xs text-gray-400 mt-1">Hint: Company s.p.a.</p>
                </div>
              </div>

              {/* Row 3: Business Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Business email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                  placeholder="your business email"
                />
                <p className="text-xs text-gray-400 mt-1">Hint: your best email</p>
              </div>

              {/* Row 4: Service & Industries */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    id="inquiryType"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled selected>Choose the service</option>
                    <option>On Board Courier Service</option>
                    <option>First Mile Delivery</option>
                    <option>Last Mile Delivery</option>
                    <option>Road Freight Service</option>
                    <option>Next Flight Out Service</option>
                    <option>Air Freight Service</option>
                    <option>Customs Clearance Assistance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industries
                  </label>
                  <select
                    id="industry"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled selected>Choose the industry</option>
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
                <div>
                  <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-2">
                    Shipment Dimensions
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder="cm"
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                    Shipment Weight
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="weight"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                      placeholder="kg"
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
                  Message Box
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                <p className="text-gray-400 text-sm mt-2">Optional - Provide additional details about your inquiry</p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#194479] text-white font-bold rounded-lg hover:bg-[#13335b] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Submit Inquiry
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
                Head Office
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-gray-800 mb-1">OBC Care e.K</p>
                  <p className="text-gray-600">Clemenstrasse 18, 50169 Kerpen, Germany</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#91c73e]" /> Hotline
                  </h4>
                  <p className="text-gray-600">+49 176 459 224 85</p>
                  <p className="text-gray-600">+49 227 394 315 64</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#91c73e]" /> Email
                  </h4>
                  <a href="mailto:request@obc-care.com" className="text-[#194479] hover:underline">
                    request@obc-care.com
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#91c73e]" /> Office Hours
                  </h4>
                  <p className="text-gray-600">Monday – Sunday</p>
                  <p className="text-[#91c73e] font-medium">We are open 24/7 (CET)</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-2xl shadow-lg h-[300px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.678479905688!2d6.6961233!3d50.8820986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf41b0e0e0e0e1%3A0x0!2sClemensstra%C3%9Fe%2018%2C%2050169%20Kerpen%2C%20Germany!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
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
