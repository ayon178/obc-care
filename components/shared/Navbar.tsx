"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiChevronDown, FiMenu } from "react-icons/fi"
import { useRouter, usePathname } from "next/navigation"
import MobileSidebar from "./MobileSidebar"

const menuItems = [
  { label: "Home", path: "/home" },
  {
    label: "Services",
    path: "/services",
    subItems: [
      {
        label: "All Services",
        path: "/services",
      },
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
  const [activeDropdown, setActiveDropdown] = useState(null)
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

  const toggleDropdown = (menuLabel) => {
    setActiveDropdown((prev) => (prev === menuLabel ? null : menuLabel))
  }

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-full z-30 bg-primary md:bg-transparent shadow-none ${
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
                <h3 className="font-bold text-lg" style={{ color: textColor }}>OBC Care</h3>
                <p className="text-xs" style={{ color: textColor, opacity: textOpacity }}>Global Logistics</p>
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
                <div key={menu.label} className="relative flex items-center">
                  {menu.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(menu.label)}
                        className="buttonFont flex items-center space-x-1 py-2 text-white cursor-pointer"
                        aria-expanded={activeDropdown === menu.label}
                        aria-haspopup="true"
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
                      </button>
                      {activeDropdown === menu.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full mt-2 w-56 bg-white text-gray-700 rounded shadow-lg"
                        >
                          {menu.subItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.path}
                              className="buttonFont block px-4 py-2 hover:bg-gray-100"
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
                      className="buttonFont flex items-center py-2 text-white cursor-pointer"
                    >
                      {menu.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="/contact"
                rel="noopener noreferrer"
                className="buttonFont text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Get Started
              </a>
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
