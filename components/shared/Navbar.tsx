"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiChevronDown, FiMenu } from "react-icons/fi"
import { useRouter, usePathname } from "next/navigation"
import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react"
import MobileSidebar from "./MobileSidebar"

const menuItems = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    subItems: [
      {
        label: "On Board Courier Services",
        path: "/on-board-courier-services",
      },
      {
        label: "First & Last Mile Delivery",
        path: "/first-last-mile-delivery",
      },
      { label: "Customs Clearance", path: "/customer-clearance" },
      { label: "Next Flight Out (NFO)", path: "/night-flight-out" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    subItems: [
      { label: "Aviation & AOG Parts", path: "/aviation-aog-parts" },
      {
        label: "Automotive & Manufacturing",
        path: "/automotive-manufacturing",
      },
      {
        label: "Electronics & Semiconductors",
        path: "/electronics-semiconductors",
      },
      {
        label: "Industrial Machinery & Engineering",
        path: "/industrial-machinery-engineering",
      },
      {
        label: "Technology & Data Equipment",
        path: "/technology-data-equipment",
      },
      {
        label: "High-Value / Confidential Documents",
        path: "/high-value-confidential-documents",
      },
    ],
  },
  {
    label: "Process",
    path: "/process",
  },
  {
    label: "About Us",
    path: "/about-us",
  },

  { label: "Contact", path: "contact" },
]

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  // Determine if we're on inquiry page (white background) or home page (dark background)
  const isInquiryPage = pathname === "/inquiry"
  const textColor = isInquiryPage ? "#194479" : "white"
  const textOpacity = isInquiryPage ? 0.8 : 0.7

  useEffect(() => {
    const handleScroll = () => {
      const sliderHeight = window.innerHeight - 40
      setIsNavbarVisible(window.scrollY <= sliderHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (menuLabel: string) => {
    setActiveDropdown(menuLabel)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault()
    router.push(path)
  }

  return (
    <>
      {/* Header Information Bar */}
      <div className="fixed top-0 left-0 w-full z-40 bg-[#194479] text-white text-[11px] md:text-sm">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-1 md:py-2 gap-1.5 md:gap-0 overflow-x-auto whitespace-nowrap">
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-6">
              <a
                href="mailto:request@obc-care.com"
                className="flex items-center gap-2 hover:text-[#91C73E] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Mail Us:</span>
                <span className="max-w-[150px] sm:max-w-none truncate">
                  request@obc-care.com
                </span>
              </a>
              <a
                href="tel:+4917645922485"
                className="flex items-center gap-2 hover:text-[#91C73E] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Us / WhatsApp:</span>
                <span className="max-w-[120px] sm:max-w-none truncate">
                  +49 176 459 224 85
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="https://www.facebook.com/obc.care.kerpen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#91C73E] transition-colors"
                title="Facebook: OBC CARE | Kerpen"
              >
                <Facebook className="w-4 h-4" />
                <span className="hidden md:inline">OBC CARE | Kerpen</span>
              </a>
              <a
                href="https://www.linkedin.com/company/obc-care-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#91C73E] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/obc_care/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#91C73E] transition-colors"
                title="Instagram: OBC CARE (@obc_care)"
              >
                <Instagram className="w-4 h-4" />
                <span className="hidden md:inline">@obc_care</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className={`fixed top-[40px] md:top-[36px] left-0 w-full z-30 bg-primary md:bg-transparent shadow-none ${
          isNavbarVisible ? "visible" : "hidden"
        }`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <nav className="flex justify-between items-center p-4 bg-primary md:bg-transparent">
            <motion.div
              onClick={() => router.push("/")}
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 group-hover:bg-white/20 transition-colors">
                <img
                  src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                  alt="OBC Care Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden md:block">
                <h3 className="font-bold text-lg" style={{ color: textColor }}>
                  OBC Care
                </h3>
                <p
                  className="text-xs"
                  style={{ color: textColor, opacity: textOpacity }}
                >
                  Global Logistics
                </p>
              </div>
            </motion.div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileSidebarOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
            <div className="hidden md:flex space-x-4 items-center">
              {menuItems.map((menu) => (
                <div
                  key={menu.label}
                  className="relative flex items-center"
                  onMouseEnter={() =>
                    menu.subItems && handleMouseEnter(menu.label)
                  }
                  onMouseLeave={() => menu.subItems && handleMouseLeave()}
                >
                  {menu.subItems ? (
                    <>
                      <a
                        href={menu.path}
                        onClick={(e) => handleMenuClick(e, menu.path)}
                        className="buttonFont flex items-center space-x-1 py-2 text-white cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <span>{menu.label}</span>
                        <motion.div
                          animate={{
                            rotate: activeDropdown === menu.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FiChevronDown />
                        </motion.div>
                      </a>
                      {activeDropdown === menu.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full mt-2 w-56 bg-white text-gray-700 rounded shadow-lg z-50"
                          onMouseEnter={() => handleMouseEnter(menu.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {menu.subItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.path}
                              onClick={(e) => handleMenuClick(e, subItem.path)}
                              className="buttonFont block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <a
                      href={menu.path}
                      onClick={(e) => handleMenuClick(e, menu.path)}
                      className="buttonFont flex items-center py-2 text-white cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      {menu.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </motion.div>
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        menuItems={menuItems}
      />
    </>
  )
}

export default Navbar
