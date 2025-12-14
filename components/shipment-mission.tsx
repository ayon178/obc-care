"use client"

import React, { useState, useEffect, useRef } from "react"

// Sample Data
const IMAGES = [
  {
    id: 1,
    src: "/images/slider/1.jpeg",
    alt: "Courier",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
    alt: "Family",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
    alt: "Man standing",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=600&auto=format&fit=crop",
    alt: "Delivery check",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    alt: "Students",
  },
]

// Duplicate array to create a seamless-like loop effect
const SLIDES = [...IMAGES, ...IMAGES]

// Dot Grid SVG Pattern
const DotPattern = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="64"
    height="48"
    viewBox="0 0 64 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#7b7b7b">
      {/* 4 rows, 5 columns approx */}
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * 12}
            y={r * 12}
            width="5"
            height="5"
            rx="1"
          />
        ))
      )}
    </g>
  </svg>
)

import { useTranslations } from "next-intl"

const ShipmentMission: React.FC = () => {
  const t = useTranslations("ShipmentMission")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [isHovered, setIsHovered] = useState(false)

  // Touch handling
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Responsive Items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto Play
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered, itemsPerView]) // Removed currentIndex to prevent reset on manual interaction causing glitches, though robust logic handles it

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // If we reach the visual end of the duplicated set, snap back or loop
      // Max index we can go to is length - itemsPerView
      const maxIndex = SLIDES.length - itemsPerView
      if (prev >= maxIndex) {
        return 0 // Loop back to start
      }
      return prev + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = SLIDES.length - itemsPerView
      if (prev <= 0) {
        return maxIndex // Loop to end
      }
      return prev - 1
    })
  }

  // Swipe Logic
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current

    if (diff > 50) handleNext()
    else if (diff < -50) handlePrev()

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div className="w-full bg-white pb-20 flex justify-center font-sans">
      {/* Main Container */}
      <div
        className="relative w-full max-w-[1180px] mx-auto px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 
            Gray Background Box 
            - Acts as the card background.
            - Height is set to approx 50% to cut through the middle of the images (half height).
            - Positioned absolute to stay behind content.
        */}
        <div className="absolute top-0 left-4 right-4 h-[75%] bg-[#dfdfdf] z-10 rounded-sm">
          {/* Decoration: Top Right Dots */}
          <div className="absolute top-6 right-6 md:right-12 opacity-60">
            <DotPattern />
          </div>

          {/* Decoration: Top Left Dots */}
          <div className="absolute top-6 left-6 md:left-12 opacity-60">
            <DotPattern />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="pt-12 md:pt-16 pb-10 md:px-8">
          {/* Header Section */}
          <div className="mb-12 px-4 md:px-4 relative z-10">
            <h1 className="text-[#194479] text-3xl md:text-[2.5rem] font-bold leading-tight">
              {t("title")}
            </h1>
            <p className="text-[#194479] text-lg mt-2 font-medium">
              {t("subtitle")}
            </p>
          </div>

          {/* Slider Section */}
          <div className="flex items-center justify-between relative">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrev}
              className="hidden md:flex w-10 h-10 bg-[#1F1F1F] text-white items-center justify-center rounded-[4px] shadow-lg hover:bg-black transition-colors z-20 mr-4 flex-shrink-0"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Carousel Viewport */}
            <div
              className="overflow-hidden w-full z-10"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
              >
                {SLIDES.map((img, index) => (
                  <div
                    key={`${img.id}-${index}`}
                    className="flex-shrink-0 px-2 md:px-3 box-border"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    {/* Image Card */}
                    <div className="bg-white p-2 shadow-lg rounded-sm transition-transform duration-300 hover:-translate-y-1">
                      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={handleNext}
              className="hidden md:flex w-10 h-10 bg-[#1F1F1F] text-white items-center justify-center rounded-[4px] shadow-lg hover:bg-black transition-colors z-20 ml-4 flex-shrink-0"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShipmentMission
