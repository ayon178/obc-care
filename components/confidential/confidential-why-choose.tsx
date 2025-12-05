"use client"

import { motion } from "framer-motion"
import { Lock, User, Clock, Eye, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const benefits = [
  {
    icon: Lock,
    title: "Absolute Discretion",
    description: "Your shipment's details remain confidential at every stage.",
    color: "#194479",
  },
  {
    icon: User,
    title: "Direct Hand-Carry Only",
    description: "No cargo holds or shared logistics — only person-to-person delivery.",
    color: "#91c73e",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Global coordination for urgent legal, financial, or diplomatic shipments.",
    color: "#194479",
  },
  {
    icon: Eye,
    title: "Full Chain-of-Custody",
    description: "Every handover is documented and verified.",
    color: "#91c73e",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Professionals",
    description: "Chosen by law firms, financial institutions, and corporations worldwide.",
    color: "#194479",
  },
]

export default function ConfidentialWhyChoose() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <>
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#194479] via-[#1a4a7f] to-[#194479] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#91c73e]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="headingFont text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              Why Clients Trust OBC Care for Confidential Deliveries
            </h2>
            <p className="paragraphFont text-white/90 text-sm md:text-base max-w-2xl mx-auto">
              Trusted by professionals worldwide for secure document delivery.
            </p>
          </motion.div>

          {/* Benefits - Professional Auto-Slide Carousel */}
          <div className="relative mb-16 max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="px-4">
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 hover:border-white/30 transition-all duration-500 shadow-2xl group">
                      {/* Professional Layout */}
                      <div className="flex items-start gap-6 md:gap-8">
                        {/* Left Section: Number Badge */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#194479] to-[#91c73e] flex items-center justify-center shadow-xl border-2 border-white/20">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                        </div>

                        {/* Center Section: Icon */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                              style={{ backgroundColor: `${benefit.color}30` }}
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            {/* Subtle Glow */}
                            <div className="absolute inset-0 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                              style={{ backgroundColor: benefit.color }}
                            />
                          </div>
                        </div>

                        {/* Right Section: Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="titleFont text-white font-bold text-xl md:text-2xl mb-3 leading-tight group-hover:text-[#91c73e] transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="paragraphFont text-white/85 text-sm md:text-base leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>

            {/* Custom Dots Styling */}
            <style jsx global>{`
              .slick-dots {
                bottom: -60px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 12px !important;
              }
              .slick-dots li {
                width: auto !important;
                height: auto !important;
                margin: 0 !important;
              }
              .slick-dots li button {
                width: 12px !important;
                height: 12px !important;
                padding: 0 !important;
                border-radius: 50% !important;
                border: 2px solid rgba(255, 255, 255, 0.4) !important;
                background: transparent !important;
              }
              .slick-dots li button:before {
                display: none !important;
              }
              .slick-dots li.slick-active button {
                background: #91c73e !important;
                border-color: #91c73e !important;
                width: 14px !important;
                height: 14px !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>

    
    </>
  )
}

