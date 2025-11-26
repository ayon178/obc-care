"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import AboutTeam from "@/components/about/about-team"
import AboutBanner from "@/components/about/about-banner"
import AboutIntro from "@/components/about/about-intro"
import AboutWhyChooseUs from "@/components/about/about-why-choose-us"
import AboutMissionVision from "@/components/about/about-mission-vision"
import AboutStats from "@/components/about/about-stats"
import AboutTestimonials from "@/components/about/about-testimonials"
import AboutCTA from "@/components/about/about-cta"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutBanner />
      <AboutIntro />
      <AboutWhyChooseUs />
      <AboutMissionVision />
      <AboutStats />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />
      <Footer />
    </main>
  )
}
