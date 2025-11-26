"use client"

import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Quote } from "lucide-react"

export default function AboutTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  }

  const testimonials = [
    {
      quote: "OBC Care handled our urgent AOG shipment flawlessly — every update was real-time, and every promise was kept.",
      author: "Aviation Client",
      location: "USA",
    },
    {
      quote: "Fast, reliable, and always professional. The peace of mind they provide is priceless.",
      author: "Automotive Client",
      location: "Germany",
    },
    {
      quote: "When every minute counted, OBC Care delivered. Their personal touch makes all the difference.",
      author: "Electronics Client",
      location: "Singapore",
    },
  ]

  return (
    <section className="py-20 bg-[#194479] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#91c73e] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#91c73e] font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 outline-none">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-14 text-center relative">
                  <Quote className="h-12 w-12 text-[#91c73e] mx-auto mb-8 opacity-50" />
                  <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">{item.author}</h4>
                    <p className="text-[#91c73e] text-sm">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
