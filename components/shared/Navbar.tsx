"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FiChevronDown, FiMenu } from "react-icons/fi"
import { useRouter, usePathname, Link } from "@/i18n/routing"
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

import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"
import { toast } from "sonner"

const Navbar = () => {
  const t = useTranslations("Navbar")
  
  const menuItems = [
    { label: t("home"), path: "/" },
    {
      label: t("services"),
      path: "/services",
      subItems: [
        {
          label: t("subItems.onBoardCourier"),
          path: "/on-board-courier-services",
        },
        {
          label: t("subItems.firstLastMile"),
          path: "/first-last-mile-delivery",
        },
        { label: t("subItems.customsClearance"), path: "/customer-clearance" },
        { label: t("subItems.nextFlightOut"), path: "/next-flight-out" },
      ],
    },
    {
      label: t("industries"),
      path: "/industries",
      subItems: [
        { label: t("subItems.aviation"), path: "/industries/aviation-aog-parts" },
        {
          label: t("subItems.automotive"),
          path: "/industries/automotive-manufacturing",
        },
        {
          label: t("subItems.electronics"),
          path: "/industries/electronics-semiconductors",
        },
        {
          label: t("subItems.industrial"),
          path: "/industries/industrial-machinery-engineering",
        },
        {
          label: t("subItems.technology"),
          path: "/industries/technology-data-equipment",
        },
        {
          label: t("subItems.documents"),
          path: "/industries/high-value-confidential-documents",
        },
      ],
    },
    {
      label: t("about"),
      path: "/about-us",
    },
    { label: t("contact"), path: "/contact" },
  ]
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)
  
  const router = useRouter()
  const pathname = usePathname()

  // Move redirections outside or useMemo to avoid recreation
  const redirections = [
    {
      path: "/",
      keywords: ["obc", "obc care"]
    },
    {
      path: "/industries/aviation-aog-parts",
      keywords: [
        "aog shipments",
        "aog parts",
        "aviation logistics",
        "aircraft on ground",
        "spare parts shipping",
        "aircraft parts",
        "aog repair",
        "critical aviation logistics"
      ]
    },
    {
      path: "/industries/automotive-manufacturing",
      keywords: [
        "demonstration units",
        "prototypes",
        "automotive parts",
        "car parts",
        "powertrain components",
        "urgent manufacturing parts"
      ]
    },
    {
      path: "/industries/high-value-confidential-documents",
      keywords: [
        "confidential documents",
        "high value documents",
        "diplomatic courier",
        "legal documents",
        "contracts",
        "nda",
        "government papers",
        "audit files",
        "financial records"
      ]
    },
    {
      path: "/industries/industrial-machinery-engineering",
      keywords: [
        "industrial machinery shipping",
        "heavy machinery parts",
        "engineering parts",
        "maintenance spares"
      ]
    },
    {
      path: "/industries/electronics-semiconductors",
      keywords: [
        "semiconductor shipping",
        "semiconductor wafers",
        "pcb",
        "chips",
        "electronic components"
      ]
    },
    {
      path: "/industries/technology-data-equipment",
      keywords: [
        "it equipment",
        "data servers",
        "networking devices",
        "hard drives",
        "secure data courier"
      ]
    },
    {
      path: "/services",
      keywords: [
        "onboard courier",
        "on board courier",
        "hand carry courier",
        "hand-carry",
        "hand carry delivery",
        "next flight out",
        "nfo",
        "urgent shipping",
        "express logistics",
        "same day delivery",
        "global courier",
        "time critical shipment",
        "emergency shipment",
        "international courier",
        "express courier service",
        "global logistics",
        "urgent delivery",
        "international rush courier"
      ]
    }
  ]
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState("")
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    if (value.length > 0) {
      const allKeywords = redirections.flatMap(r => r.keywords)
      const filtered = allKeywords.filter(k => k.toLowerCase().includes(value.toLowerCase())).slice(0, 5) // Limit to 5 suggestions
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (keyword: string) => {
     setSearchValue(keyword)
     setSuggestions([])
     // Small delay to allow user to see the selection or immediate redirect? Immediate is better.
     const value = keyword.toLowerCase()
     for (const item of redirections) {
       if (item.keywords.some(k => value.includes(k))) {
         router.push(item.path)
         setIsSearchOpen(false)
         return
       }
     }
  }

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const value = searchValue.toLowerCase().trim()
        let found = false
        
        for (const item of redirections) {
          if (item.keywords.some(keyword => value.includes(keyword))) {
            router.push(item.path)
            setIsSearchOpen(false)
            setSuggestions([])
            found = true
            return
          }
        }
        
        if (!found) {
            toast.error("Sorry, we did not find anything.")
        }
      }
  }

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
                <div className={`${isScrolled ? "w-12 h-12" : "w-20 h-20 md:w-24 md:h-24"} rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-1.5 md:p-2 group-hover:bg-white/20 transition-all duration-300`}>
                  <img
                    src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                    alt="OBC Care Logo"
                    className="w-full h-full object-contain"
                  />
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
                        <Link
                          href={menu.path}
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
                        </Link>
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
                              <Link
                                key={subItem.label}
                                href={subItem.path}
                                className="buttonFont block px-4 py-2 hover:bg-gray-100 transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={menu.path}
                        className={`buttonFont flex items-center py-2 text-white cursor-pointer hover:opacity-80 transition-opacity text-base`}
                      >
                        {menu.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Search, Globe, Get a Quote Button, and Mobile Menu */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{
                    width: isSearchOpen ? "250px" : "0px",
                    opacity: isSearchOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder={t("searchPlaceholder")}
                    className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-1.5 px-4 text-sm text-white placeholder:text-white/60 focus:outline-none w-full ${isSearchOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    value={searchValue}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchSubmit}
                  />
                  {/* Suggestions Dropdown */}
                  {suggestions.length > 0 && isSearchOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-md shadow-lg overflow-hidden z-50">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-white cursor-pointer hover:opacity-80 transition-opacity p-2"
                  aria-label={t("search")}
                >
                  <Search className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Globe/Earth Icon */}
              {/* Language Switcher */}
              <LanguageSwitcher />


              {/* Get a Quote Button */}
              <Button
                onClick={() => router.push("/inquiry")}
                className="hidden cursor-pointer sm:flex bg-[#91C73E] hover:bg-[#91C73E]/90 text-white"
                size="sm"
              >
                {t("getQuote")}
              </Button>

              
              {/* Become an OBC Button */}
              <Button
                onClick={() => router.push("/become-obc")}
                className="hidden cursor-pointer sm:flex bg-transparent border border-white text-white hover:bg-white hover:text-[#194479] transition-colors"
                size="sm"
              >
                {t("becomeObc")}
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
