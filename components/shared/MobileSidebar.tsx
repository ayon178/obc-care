"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiChevronDown } from "react-icons/fi"

const MobileSidebar = ({ isOpen, onClose, menuItems }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (menuLabel) => {
    setActiveDropdown((prev) => (prev === menuLabel ? null : menuLabel))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primary z-50 overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <img
                  src="https://i.ibb.co.com/WJGfHv2/Whats-App-Image-2025-11-03-at-19-02-48-fd85551c.jpg"
                  alt="Logo"
                  className="w-16 h-auto"
                />
                <button
                  onClick={onClose}
                  className="text-white"
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>
              <nav className="mt-0">
                {menuItems.map((menu) => (
                  <div key={menu.label} className="mb-4">
                    {menu.subItems ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(menu.label)}
                          className="buttonFont flex items-center justify-between w-full text-white py-2"
                          aria-expanded={activeDropdown === menu.label}
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
                        <AnimatePresence>
                          {activeDropdown === menu.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4"
                            >
                              {menu.subItems.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.path}
                                  className="buttonFont block text-white py-2"
                                  onClick={onClose}
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={menu.path}
                        className="buttonFont block text-white py-2"
                        onClick={onClose}
                      >
                        {menu.label}
                      </a>
                    )}
                  </div>
                ))}
                <a
                  href="https://www.selconnect.com.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonFont block text-white py-2 mt-4 border border-white rounded-full text-center hover:bg-white hover:text-primary transition-colors duration-300"
                  onClick={onClose}
                >
                  Sel connect
                </a>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileSidebar
