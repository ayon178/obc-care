"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"

export default function ImpressumPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Consistent padding with other legal pages */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 md:pt-24 lg:pt-44 md:pb-28">
        <div className="max-w-3xl mx-auto prose prose-slate md:prose-lg lg:prose-xl">
          <h1 className="headingFont text-[#194479] font-bold mb-8">Impressum / Legal Notice</h1>
          
          <div className="paragraphFont text-gray-700 space-y-8">
            <section>
              <p className="font-semibold text-[#194479]">© {currentYear} OBC Care e.K</p>
              <address className="not-italic mt-4">
                <strong>OBC Care e.K</strong><br />
                Birkenhöhenweg 17<br />
                51465 Bergisch Gladbach,<br />
                Germany
              </address>
            </section>

            <section>
              <h2 className="headingFont text-lg font-semibold text-[#194479] mb-2">Responsible persons:</h2>
              <p>Eugen Reimer, Founder & CEO</p>
            </section>

            <section>
              <h2 className="headingFont text-lg font-semibold text-[#194479] mb-2">Contact details:</h2>
              <p>
                Phone: <a href="tel:+4917645922485" className="text-[#194479] hover:underline hover:text-[#91c73e] transition-colors">+49 176 459 224 85</a><br />
                Email: <a href="mailto:info@obc-care.com" className="text-[#194479] hover:underline hover:text-[#91c73e] transition-colors">info@obc-care.com</a>
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#91c73e]">
              <h2 className="headingFont text-lg font-semibold text-[#194479] mb-2 mt-0">Registration Information:</h2>
              <p className="mb-1"><strong>Registered office:</strong> Cologne</p>
              <p className="mb-1"><strong>Commercial register:</strong> Cologne Local Court, HRA 37284</p>
              <p className="mb-0"><strong>VAT ID:</strong> DE327527892</p>
            </section>

            <section>
              <h2 className="headingFont text-lg font-semibold text-[#194479] mb-2">Editorial responsibility for the content according to §55 RStV:</h2>
              <address className="not-italic">
                <strong>OBC Care e.K</strong><br />
                Birkenhöhenweg 17<br />
                51465 Bergisch Gladbach,<br />
                Germany
              </address>
              <p className="mt-4 font-medium text-[#194479]">Eugen Reimer</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
