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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Select Your Inquiry Type</label>
                <select
                  id="inquiryType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all bg-white"
                >
                  <option>Get a Free Quote</option>
                  <option>Request a Copy of an Invoice</option>
                  <option>Ask About Our Services</option>
                  <option>Partner or Vendor Inquiry</option>
                  <option>General Question / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#91c73e] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-[#194479] text-white font-bold rounded-lg hover:bg-[#13335b] transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
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
