"use client"

import Navbar from "@/components/shared/Navbar"
import AboutSection from "@/components/about-section"
import KeyHighlights from "@/components/key-highlights"
import LogisticsAdvantage from "@/components/logistics-advantage"
import ShipmentMission from "@/components/shipment-mission"
import UrgentSupportCTA from "@/components/urgent-support-cta"
import Footer from "@/components/footer"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "@/i18n/routing"
import ServicesCTA from "@/components/services-cta"

import { useTranslations } from "next-intl"

const Home = () => {
    const t = useTranslations("Home");

    const textData = [0, 1, 2].map((index: number) => ({
        firstLine: t(`slides.${index}.firstLine`),
        secondLine: t(`slides.${index}.secondLine`),
        smallLine: t(`slides.${index}.smallLine`),
        firstButtonText: t(`slides.${index}.firstButtonText`),
        firstButtonLink: index !== 2 ? "/inquiry" : "/become-obc",
        secondButtonText: t(`slides.${index}.secondButtonText`),
        secondButtonLink: index === 0 ? "/services" : "/services#how-we-operate"
    }));
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const images = ["/slide-1.png", "/slide-2.png", "/slide-3.png"]

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true) // Start animation
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)

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

  const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 1 } },
  }

  const headerVariants: Variants = {
    smallLine: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      },
    },
    firstLine: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
      },
    },
    secondLine: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
      },
    },
    thirdLine: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
      },
    },
    viewProjectsButton: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
      },
    },
    callUs: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.7 },
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
          className="md:h-screen h-screen bg-cover bg-center flex items-center justify-center relative px-2 md:px-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(25, 68, 121, 0.35) 0%, rgba(25, 68, 121, 0.12) 55%), linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${images[currentImage]})`,
            transition: "background-image 0.5s ease-in-out", // Smooth transition for background
          }}
        >
          <motion.div
            key={currentImage}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 1, // Ensure enter and exit have the same duration
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(25, 68, 121, 0.35) 0%, rgba(25, 68, 121, 0.12) 55%), linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 1,
            }}
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative h-full gap-10 md:gap-0">
              {/* Left-aligned specific text and button */}
              <div className="text-center md:text-left w-full md:ps-6">
                {currentImage === 1 && (
                  <>
                    <motion.h1
                      className="headingFont text-2xl md:text-3xl lg:text-5xl text-[#91c73e] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] mt-6 leading-tight"
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
                    <motion.p
                      className="text-sm md:text-base text-white/80 mt-3 max-w-xl"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.smallLine}
                    >
                      {textData[currentImage].smallLine}
                    </motion.p>
                    <motion.div
                      className="flex flex-col md:flex-row md:justify-start gap-2 mt-5 mx-4 md:mx-0"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.viewProjectsButton}
                    >
                      <Link
                        href={textData[currentImage].firstButtonLink}
                        className="buttonFont bg-[#194479] hover:bg-[#153666] text-white text-sm md:text-base px-4 py-2 rounded-md shadow-lg transition-all duration-300 ease-in-out w-full md:w-auto text-center"
                      >
                        {textData[currentImage].firstButtonText}
                      </Link>
                      <Link
                        href={textData[currentImage].secondButtonLink}
                        className="buttonFont bg-[#91c73e] hover:bg-[#7bb033] text-white text-sm md:text-base px-4 py-2 rounded-md shadow-lg transition-all duration-300 ease-in-out w-full md:w-auto text-center"
                      >
                        {textData[currentImage].secondButtonText}
                      </Link>
                    </motion.div>
                    {/* <motion.button
                      onClick={() =>
                        (window.location.href =
                          textData[currentImage].buttonLink)
                      }
                      className="buttonFont inline-block bg-white/10 hover:bg-[#194479] mt-4 text-white text-md px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
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
              <div className="text-center md:text-right w-full mt-8 md:mt-0">
                {currentImage !== 1 && (
                  <>
                    <motion.h1
                      className="headingFont text-2xl md:text-3xl lg:text-5xl text-[#91c73e] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] mt-6 leading-tight"
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
                    <motion.p
                      className="text-sm md:text-base text-white/80 mt-3 md:ml-auto max-w-xl"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.smallLine}
                    >
                      {textData[currentImage].smallLine}
                    </motion.p>
                    <motion.div
                      className="flex flex-col md:flex-row md:justify-end gap-2 mt-5 mx-4 md:mx-0"
                      initial="hidden"
                      animate="visible"
                      variants={headerVariants.viewProjectsButton}
                    >
                      <Link
                        href={textData[currentImage].firstButtonLink}
                        className="buttonFont bg-[#194479] hover:bg-[#153666] text-white text-sm md:text-base px-4 py-2 rounded-md shadow-lg transition-all duration-300 ease-in-out w-full md:w-auto text-center"
                      >
                        {textData[currentImage].firstButtonText}
                      </Link>
                      <Link
                        href={textData[currentImage].secondButtonLink}
                        className="buttonFont bg-[#91c73e] hover:bg-[#7bb033] text-white text-sm md:text-base px-4 py-2 rounded-md shadow-lg transition-all duration-300 ease-in-out w-full md:w-auto text-center"
                      >
                        {textData[currentImage].secondButtonText}
                      </Link>
                    </motion.div>
                    {/* <motion.button
                      onClick={() =>
                        (window.location.href =
                          textData[currentImage].buttonLink)
                      }
                      className="buttonFont inline-block bg-white/10 hover:bg-[#194479] mt-4 text-white text-md px-8 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
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
            <div className="absolute bottom-10 right-10 flex items-center space-x-2 z-10">
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
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* About Section */}
      <AboutSection />

      {/* Key Highlights Section */}
      <KeyHighlights />

      {/* Logistics Advantage Section */}
      <LogisticsAdvantage />

      {/* Shipment Mission Section */}
      <ShipmentMission />

      {/* Urgent Support CTA Section */}
      {/* <UrgentSupportCTA /> */}
      <ServicesCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
