"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FiChevronDown, FiMenu } from "react-icons/fi"
import { useRouter, usePathname } from "next/navigation"
import {
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Search,
  Globe,
} from "lucide-react"
import MobileSidebar from "./MobileSidebar"
import { Button } from "@/components/ui/button"

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
      { label: "Next Flight Out (NFO)", path: "/next-flight-out" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    subItems: [
      { label: "Aviation & AOG Parts", path: "/industries/aviation-aog-parts" },
      {
        label: "Automotive & Manufacturing",
        path: "/industries/automotive-manufacturing",
      },
      {
        label: "Electronics & Semiconductors",
        path: "/industries/electronics-semiconductors",
      },
      {
        label: "Industrial Machinery & Engineering",
        path: "/industries/industrial-machinery-engineering",
      },
      {
        label: "Technology & Data Equipment",
        path: "/industries/technology-data-equipment",
      },
      {
        label: "High-Value / Confidential Documents",
        path: "/industries/high-value-confidential-documents",
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

  { label: "Contact", path: "/contact" },
]

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const pathname = usePathname()

  // Determine if we're on inquiry page (white background) or home page (dark background)
  const isInquiryPage = pathname === "/inquiry"
  const textColor = isInquiryPage ? "#194479" : "white"
  const textOpacity = isInquiryPage ? 0.8 : 0.7

  useEffect(() => {
    const handleScroll = () => {
      // Lenis works with native scroll, so we can use window.scrollY
      const scrollY = window.scrollY || window.pageYOffset || 0
      const sliderHeight = window.innerHeight - 40
      const headerHeight = 90 // Approximate header height
      const scrolled = scrollY > headerHeight

      // Make navbar sticky when scrolled past header height
      setIsScrolled(scrolled)

      // Navbar visible when: in slider area OR when sticky
      // This ensures sticky navbar stays visible even when scrolling back up
      setIsNavbarVisible(scrollY <= sliderHeight || scrolled)
    }

    // Listen to scroll events - Lenis works with native scroll
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
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
      {/* Header Information Bar with Logo */}
      {/*
      <div className="relative w-full z-40 bg-[#194479] text-white">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-3 gap-3 md:gap-0">
           
            <motion.div
              onClick={() => router.push("/")}
              className="flex items-center gap-3 cursor-pointer group order-1 md:order-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 group-hover:bg-white/20 transition-colors">
                <img
                  src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                  alt="OBC Care Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl text-white">
                  OBC Care
                </h3>
                <p className="text-sm md:text-base text-white/90">
                  Global Logistics
                </p>
              </div>
            </motion.div>

            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-6 order-2 md:order-none text-[11px] md:text-sm overflow-x-auto whitespace-nowrap">
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

           
            <div className="flex items-center gap-3 md:gap-4 order-3 md:order-none">
              <a
                href="https://www.facebook.com/obccare/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#91C73E] transition-colors"
                title="Facebook: OBC CARE"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/obc-care-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#91C73E] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.instagram.com/obc_care/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#91C73E] transition-colors"
                title="Instagram: OBC CARE (@obc_care)"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      */}

      <motion.div
        ref={navbarRef}
        className={`${"fixed top-0"} left-0 w-full ${"bg-primary shadow-lg z-50"} transition-all duration-300 ${
          isNavbarVisible || isScrolled ? "visible" : "hidden"
        }`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavbarVisible || isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <nav className="flex items-center p-4 justify-between">
            {/* Left Section: Logo and Menu Items */}
            <div className="flex items-center gap-8 md:gap-12">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => router.push("/")}
                className="flex items-center gap-2 md:gap-3 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-1.5 md:p-2 group-hover:bg-white/20 transition-colors">
                  <img
                    src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                    alt="OBC Care Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <h3 className="font-bold text-base md:text-lg text-white">
                    OBC Care
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/90">
                    Global Logistics
                  </p>
                </div>
              </motion.div>

              {/* Menu Items - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex items-center space-x-4">
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
                          className={`buttonFont flex items-center space-x-1 py-2 text-white cursor-pointer hover:opacity-80 transition-opacity text-base`}
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
                            className="absolute top-full mt-0 w-56 bg-white text-gray-700 rounded shadow-lg z-50 pt-2"
                            onMouseEnter={() => handleMouseEnter(menu.label)}
                            onMouseLeave={handleMouseLeave}
                          >
                            {menu.subItems.map((subItem) => (
                              <a
                                key={subItem.label}
                                href={subItem.path}
                                onClick={(e) =>
                                  handleMenuClick(e, subItem.path)
                                }
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
                        className={`buttonFont flex items-center py-2 text-white cursor-pointer hover:opacity-80 transition-opacity text-base`}
                      >
                        {menu.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Search, Globe, Get a Quote Button, and Mobile Menu */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Search Icon */}
              <button
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Search"
              >
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Globe/Earth Icon */}
              <button
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Language"
              >
                <Globe className="w-5 h-5 md:w-6 md:h-6" />
              </button>


              {/* Get a Quote Button */}
              <Button
                onClick={() => router.push("/inquiry")}
                className="hidden cursor-pointer sm:flex bg-[#91C73E] hover:bg-[#91C73E]/90 text-white"
                size="sm"
              >
                Get a Quote
              </Button>

              
              {/* Become an OBC Button */}
              <Button
                onClick={() => router.push("/become-obc")}
                className="hidden cursor-pointer sm:flex bg-transparent border border-white text-white hover:bg-white hover:text-[#194479] transition-colors"
                size="sm"
              >
                Become an OBC
              </Button>

              {/* Mobile Hamburger Menu */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileSidebarOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
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
