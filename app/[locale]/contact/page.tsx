import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact/contact-hero"
import ContactFormSection from "@/components/contact/contact-form-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
