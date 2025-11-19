"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Truck, Plane, FileCheck, Zap, Info, Building2, Cog, FileText, Shield, Facebook, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

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

  const services = [
    { name: "First Mile / Last Mile Delivery", icon: Truck, href: "/services" },
    { name: "Onboard Courier (OBC) Service", icon: Plane, href: "/on-board-courier-services" },
    { name: "Customs Clearance Assistance", icon: FileCheck, href: "/services" },
    { name: "Next Flight Out (NFO) Solutions", icon: Zap, href: "/services" },
  ]

  const aboutLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Our Process", href: "/process" },
    { name: "Get a Free Quote", href: "/inquiry" },
  ]

  const quickLinks = [
    { name: "Inquiry Form", href: "/inquiry" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Impressum", href: "/impressum" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/obccare/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/obc-care-company/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/obc_care/" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#194479] via-[#1a4a7f] to-[#194479] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#91C73E]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#91C73E]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 py-16"
        >
          {/* Contact Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#91C73E]" />
              </div>
              <h3 className="text-xl font-bold">Contact</h3>
            </motion.div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#91C73E] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">OBC Care e.K</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Clemensstrasse 18<br />
                    50169 Kerpen, Germany
                  </p>
                </div>
              </div>
              
              <motion.a
                href="tel:+4917645922485"
                className="flex items-center gap-3 text-gray-300 hover:text-[#91C73E] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-[#91C73E] group-hover:scale-110 transition-transform" />
                <span className="text-sm">+49 176 459 224 85</span>
              </motion.a>
              
              <motion.a
                href="mailto:request@obc-care.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#91C73E] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-[#91C73E] group-hover:scale-110 transition-transform" />
                <span className="text-sm">request@obc-care.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#91C73E]" />
              </div>
              <h3 className="text-xl font-bold">Our Services</h3>
            </motion.div>
            
            <ul className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group"
                  >
                    <Icon className="w-4 h-4 text-[#91C73E] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <Link
                      href={service.href}
                      className="text-sm text-gray-300 group-hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>

          {/* About OBC Care Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Info className="w-6 h-6 text-[#91C73E]" />
              </div>
              <h3 className="text-xl font-bold">About OBC Care</h3>
            </motion.div>
            
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#91C73E] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#91C73E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Cog className="w-6 h-6 text-[#91C73E]" />
              </div>
              <h3 className="text-xl font-bold">Quick Links</h3>
            </motion.div>
            
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#91C73E] transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#91C73E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8 pb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Follow Us
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Stay connected with us for logistics insights and updates:
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#91C73E] transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
            
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <img
                src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                alt="OBC Care Logo"
                className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2"
              />
              <div>
                <h4 className="font-bold text-lg">OBC Care</h4>
                <p className="text-xs text-gray-400">Global Logistics Solutions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-6 pb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} OBC Care e.K. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="hover:text-[#91C73E] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="hover:text-[#91C73E] transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/impressum" className="hover:text-[#91C73E] transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
