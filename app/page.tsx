"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import Services from "@/components/services"
import Process from "@/components/process"
import CoverageAreas from "@/components/coverage-areas"
import Stats from "@/components/stats"
import About from "@/components/about"
import WhyChooseUs from "@/components/why-choose-us"
import ExpertiseSection from "@/components/expertise-section"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="w-full overflow-hidden">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <HeroSlider />
        <Services />
        <Process />
        <Stats />
        <CoverageAreas />
        <About />
        <WhyChooseUs />
        <ExpertiseSection />
        <Testimonials />
        <CTA />
        <Footer />
      </motion.div>
    </main>
  )
}
