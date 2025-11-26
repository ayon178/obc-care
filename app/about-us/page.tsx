"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import AboutTeam from "@/components/about/about-team"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Placeholder for other About Us sections if needed, or just the Team section for now as requested */}
      <div className="pt-32"> {/* Add padding for fixed navbar */}
        <AboutTeam />
      </div>
      <Footer />
    </main>
  )
}
