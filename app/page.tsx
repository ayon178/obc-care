"use client"

import Navbar from "@/components/shared/Navbar"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

const textData = [
  {
    // smallLine: 'The Structural Engineers Ltd.',
    // firstLine: 'Dedicated to  ',
    firstLine: "Developing homes",
    secondLine: "with precision",
    buttonText: "View Projects",
    buttonLink: "#",
  },
  {
    // smallLine: 'The Structural Engineers Ltd.',
    firstLine: "Modern design",
    secondLine: "with craftsmanship",
    // thirdLine: 'in every project',
    buttonText: "View Projects",
    buttonLink: "#explore",
  },
  {
    // smallLine: 'The Structural Engineers Ltd.',
    firstLine: "Spaces resonating with ",
    secondLine: "comfort and elegance",
    // thirdLine: 'reflecting value ',
    buttonText: "View Projects",
    buttonLink: "#get-started",
  },
]

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [variantIndex, setVariantIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const images = [
    "/medical-courier-urgent-delivery-service.jpg",
    "/temperature-controlled-medical-transport.jpg",
    "/24-7-emergency-medical-courier-service.jpg",
  ]

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true) // Start animation
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
      setVariantIndex((prevIndex) => (prevIndex + 1) % imageVariants.length)

      // Reset `isAnimating` after animation duration (only for auto-slide)
      setTimeout(() => {
        setIsAnimating(false)
      }, 1000) // Match the duration of the exit animation
    }
  }

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true) // Start animation
      setCurrentImage((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
      setVariantIndex((prevIndex) =>
        prevIndex === 0 ? imageVariants.length - 1 : prevIndex - 1
      )

      // Reset `isAnimating` after animation duration (only for auto-slide)
      setTimeout(() => {
        setIsAnimating(false)
      }, 1000) // Match the duration of the exit animation
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextImage()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const goToImage = (index) => {
    setCurrentImage(index)
  }

  const imageVariants = [
    // Slide in from the right and exit to the left
    {
      enter: { opacity: 0, x: "100vw" }, // Enter from the right
      center: { opacity: 1, x: 0 }, // Centered position
      exit: { opacity: 0, x: "-100vw", transition: { duration: 1 } }, // Exit to the left
    },
    // Slide in from the bottom and exit to the top
    {
      enter: { opacity: 0, y: "100vh" }, // Enter from the bottom
      center: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "-100vh", transition: { duration: 1 } }, // Exit to the top
    },
    // Slide in from the left and exit to the right
    {
      enter: { opacity: 0, x: "-100vw" }, // Enter from the left
      center: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "100vw", transition: { duration: 1 } }, // Exit to the right
    },
    // Slide in from the top and exit to the bottom
    {
      enter: { opacity: 0, y: "-100vh" }, // Enter from the top
      center: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "100vh", transition: { duration: 1 } }, // Exit to the bottom
    },
    // Zoom in and zoom out
    {
      enter: { opacity: 0, scale: 0.8 }, // Zoom in
      center: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.2, transition: { duration: 1 } }, // Zoom out
    },
  ]

  const headerVariants = {
    smallLine: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      },
    },
    firstLine: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut", delay: 0.8 },
      },
    },
    secondLine: {
      hidden: { opacity: 0, x: -40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeInOut", delay: 1 },
      },
    },
    thirdLine: {
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeInOut", delay: 1.2 },
      },
    },
    viewProjectsButton: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeInOut", delay: 1.4 },
      },
    },
    callUs: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut", delay: 1.5 },
      },
    },
  }

  const socialMediaLink = (link) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank")
    }
  }

  return (
    <div className="relative overflow-hidden">
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />

      {/* Fullscreen Banner with Text Overlay */}
      <AnimatePresence mode="wait">
        {/* Fullscreen Banner with Text Overlay */}
        <div
          className="md:h-screen h-[70vh] bg-cover bg-center flex items-center justify-center relative px-4 md:px-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImage]})`,
            transition: "background-image 0.5s ease-in-out", // Smooth transition for background
          }}
        >
          <motion.div
            key={currentImage}
            variants={imageVariants[variantIndex]}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 1, // Ensure enter and exit have the same duration
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            <div className="container mx-auto flex items-center justify-between relative h-full">
              {/* Social Media Icons and Line */}
              <div className="flex flex-col items-center space-y-6">
                <div className="w-[1px] h-32 bg-white"></div>
                <FaFacebookF
                  className="text-white text-lg hover:text-[#bfa980]"
                  onClick={() =>
                    socialMediaLink("#")
                  }
                />
                <FaInstagram
                  className="text-white text-lg hover:text-[#bfa980]"
                  onClick={() =>
                    socialMediaLink(
                      "#"
                    )
                  }
                />
                <FaYoutube
                  className="text-white text-lg hover:text-[#bfa980]"
                  onClick={() =>
                    socialMediaLink(
                      "#"
                    )
                  }
                />
              </div>

              {/* Left-aligned specific text and button */}
              <div className="text-center md:text-left w-full ps-6">
                {currentImage === 1 && (
                  <>
                    <motion.h1
                      className="headingFont text-2xl md:text-3xl lg:text-5xl text-[#B07E5B] mt-6 leading-tight"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.firstLine}
                    >
                      {textData[currentImage].firstLine}
                    </motion.h1>
                    <motion.h1
                      className="headingFont text-2xl md:text-3xl lg:text-5xl text-white leading-tight"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.secondLine}
                    >
                      {textData[currentImage].secondLine}
                    </motion.h1>
                    {/* <motion.button
                      onClick={() =>
                        (window.location.href =
                          textData[currentImage].buttonLink)
                      }
                      className="buttonFont inline-block bg-white/10 hover:bg-[#B07E5B] mt-4 text-[#fff7ec] text-md px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.viewProjectsButton}
                    >
                      {textData[currentImage].buttonText}
                    </motion.button> */}
                  </>
                )}
              </div>

              {/* Right-aligned dynamic text */}
              <div className="text-center md:text-right w-full">
                {currentImage !== 1 && (
                  <>
                    <motion.h1
                      className="headingFont text-2xl md:text-3xl lg:text-5xl text-[#B07E5B] mt-6 leading-tight"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.firstLine}
                    >
                      {textData[currentImage].firstLine}
                    </motion.h1>
                    <motion.h1
                      className="headingFont text-2xl md:text-3xl lg:text-5xl text-white leading-tight"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.secondLine}
                    >
                      {textData[currentImage].secondLine}
                    </motion.h1>
                    {/* <motion.button
                      onClick={() =>
                        (window.location.href =
                          textData[currentImage].buttonLink)
                      }
                      className="buttonFont inline-block bg-white/10 hover:bg-[#B07E5B] mt-4 text-[#fff7ec] text-md px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.viewProjectsButton}
                    >
                      {textData[currentImage].buttonText}
                    </motion.button> */}
                  </>
                )}
              </div>
            </div>

            {/* Slider Controls */}
            {/* <div className="absolute bottom-10 right-10 flex items-center space-x-2 z-10">
              <button
                onClick={prevImage}
                className="font-bold hover:bg-gray text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-lg"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="font-bold hover:bg-gray text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out shadow-lg"
              >
                &gt;
              </button>
            </div> */}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default Home
