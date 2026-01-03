"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Plane,
  FileCheck,
  Zap,
  Info,
  Building2,
  Cog,
  FileText,
  Shield,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"
import { Link } from "@/i18n/routing"

import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("Footer")
  const currentYear = new Date().getFullYear()

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
    { name: t("links.firstLastMile"), icon: Truck, href: "/services" },
    {
      name: t("links.obcService"),
      icon: Plane,
      href: "/on-board-courier-services",
    },
    {
      name: t("links.customsClearance"),
      icon: FileCheck,
      href: "/services",
    },
    { name: t("links.nfoSolutions"), icon: Zap, href: "/services" },
  ]

  const aboutLinks = [
    { name: t("links.aboutUs"), href: "/about-us" },
    { name: t("links.industries"), href: "/industries" },
    { name: t("links.ourProcess"), href: "/process" },
    { name: t("links.getQuote"), href: "/inquiry" },
    { name: t("links.becomeObc"), href: "/become-obc" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/obccare/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/obc-care-company/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/obc_care/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/obc_care",
    },
    {
      name: "Youtube",
      icon: Youtube,
      href: "https://www.youtube.com/@obc-care",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#194479] via-[#1a4a7f] to-[#194479] text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* World Map Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/world_map.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Transparent black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#194479]/50 via-[#194479]/40 to-[#194479]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 py-16 text-center md:text-left"
        >
          {/* Logo and Brand Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <img
                src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                alt="OBC Care Logo"
                className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold">OBC Care</h3>
                <p className="text-base text-white/80">
                  {t("logoSubtitle")}
                </p>
              </div>
            </motion.div>

            <div className="space-y-4 w-full">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-6 h-6 text-[#91C73E] flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-semibold mb-1 text-lg">{t("addressName")}</p>
                  <p 
                    className="text-white text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("address") }}
                  />
                </div>
              </div>

              <motion.a
                href="tel:+4917645922485"
                className="flex items-center gap-3 text-white hover:text-[#91C73E] transition-colors group justify-center md:justify-start"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-6 h-6 text-[#91C73E] group-hover:scale-110 transition-transform" />
                <span className="text-base">+49 176 459 224 85</span>
              </motion.a>

              <motion.a
                href="tel:+4922739431564"
                className="flex items-center gap-3 text-white hover:text-[#91C73E] transition-colors group justify-center md:justify-start"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-6 h-6 text-[#91C73E] group-hover:scale-110 transition-transform" />
                <span className="text-base">+49 227 394 315 64</span>
              </motion.a>

              <motion.a
                href="mailto:request@obc-care.com"
                className="flex items-center gap-3 text-white hover:text-[#91C73E] transition-colors group justify-center md:justify-start"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-6 h-6 text-[#91C73E] group-hover:scale-110 transition-transform" />
                <span className="text-base">request@obc-care.com</span>
              </motion.a>
            </div>

            {/* Follow Us Section */}
            <div className="mt-8 pt-8 border-t border-white/10 w-full">
              <h3 className="text-xl font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
                <span className="text-3xl">🌐</span>
                {t("followUs")}
              </h3>
              <p className="text-base text-white mb-6">
                {t("followText")}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
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
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#91C73E] transition-colors group"
                    >
                      <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Our Services Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center px-3 py-0">
                <Truck className="w-7 h-7 text-[#91C73E]" />
              </div>
              <h3 className="text-2xl font-bold">{t("servicesTitle")}</h3>
            </motion.div>

            <ul className="space-y-4 w-full">
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
                    className="flex items-start gap-3 group justify-center md:justify-start"
                  >
                    <Icon className="w-5 h-5 text-[#91C73E] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <Link
                      href={service.href}
                      className="text-base text-white group-hover:text-[#91C73E] transition-colors text-left"
                    >
                      {service.name}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>

          {/* About OBC Care Section */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center px-3 py-0">
                <Info className="w-7 h-7 text-[#91C73E]" />
              </div>
              <h3 className="text-2xl font-bold whitespace-nowrap">
                {t("quickLinksTitle")}
              </h3>
            </motion.div>

            <ul className="space-y-4 w-full">
              {aboutLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center md:justify-start"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-base text-white hover:text-[#91C73E] transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#91C73E] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 pb-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-base text-white/80">
            <p 
              className="text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: t("copyright", { year: currentYear }) }}
            />
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              <Link
                href="/privacy"
                className="hover:text-[#91C73E] transition-colors"
              >
                {t("privacy")}
              </Link>
              <span className="text-white/40">•</span>
              <Link
                href="/terms"
                className="hover:text-[#91C73E] transition-colors"
              >
                {t("terms")}
              </Link>
              <span className="text-white/40">•</span>
              <Link
                href="/impressum"
                className="hover:text-[#91C73E] transition-colors"
              >
                {t("impressum")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
