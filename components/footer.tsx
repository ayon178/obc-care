"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info - CHANGE: Updated to OBC Care with logo */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                alt="OBC Care Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="font-bold text-lg">OBC Care</h3>
            </div>
            <p className="text-gray-400">
              Urgent medical hand carry courier services you can trust for critical healthcare logistics.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4" style={{ color: "#91C73E" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4" style={{ color: "#91C73E" }}>
              Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Express Courier</li>
              <li>Temperature Control</li>
              <li>24/7 Emergency Service</li>
              <li>Secure Chain of Custody</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4" style={{ color: "#91C73E" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +1 (000) 000-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                example@obccare.com
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                24/7 Available
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Example District, City</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar - CHANGE: Updated branding to OBC Care */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 OBC Care. All rights reserved. Urgent Medical Courier Services.</p>
        </motion.div>
      </div>
    </footer>
  )
}
