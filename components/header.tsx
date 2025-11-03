"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const navItems = ["Home", "Services", "About", "Why Us", "Contact"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo Only - CHANGE: Removed "OBC Care" text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img
              src="/images/design-mode/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
              alt="OBC Care Logo"
              className="w-18 h-18 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="font-medium transition-colors hover:text-green-600"
                style={{ color: "#194479" }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block px-6 py-2 rounded-lg text-white font-semibold transition-all hover:shadow-lg"
            style={{ backgroundColor: "#91C73E" }}
          >
            Get Quote
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: "#194479" }} />
            ) : (
              <Menu size={24} style={{ color: "#194479" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-50 border-t"
            style={{ borderColor: "#194479" }}
          >
            <nav className="flex flex-col gap-4 p-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-medium py-2 px-4 rounded-lg transition-all hover:bg-gray-200"
                  style={{ color: "#194479" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full py-2 rounded-lg text-white font-semibold mt-2"
                style={{ backgroundColor: "#91C73E" }}
              >
                Get Quote
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
