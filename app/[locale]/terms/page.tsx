"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left group transition-colors"
      >
        <span className="headingFont text-lg md:text-xl font-semibold text-[#194479] group-hover:text-[#91c73e] transition-colors">{title}</span>
        <div className={`p-1 rounded-full border border-[#194479] group-hover:border-[#91c73e] transition-colors ${isOpen ? 'bg-[#194479] group-hover:bg-[#91c73e]' : ''}`}>
          {isOpen ? (
             <Minus className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#194479] group-hover:text-[#91c73e]'}`} />
          ) : (
             <Plus className="w-4 h-4 text-[#194479] group-hover:text-[#91c73e]" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 paragraphFont text-gray-700 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Same padding as Privacy Policy */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 md:pt-24 lg:pt-44 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="headingFont text-3xl md:text-4xl lg:text-5xl font-bold text-[#194479] mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-slate md:prose-lg max-w-none paragraphFont text-gray-700 mb-6">
            <p>
              Please read these Terms and Conditions carefully before accessing or using this website.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h2 className="headingFont text-xl font-semibold text-[#194479] mb-6">Scope</h2>
            <p className="paragraphFont text-gray-700 mb-6">The Terms and Conditions of OBC Care cover the following areas:</p>

            <AccordionItem title="General Provisions">
              <p>
                OBC Care e.K. operates through its various affiliated entities, each maintaining its own legal identity. On this website, the terms “OBC Care e.K.,” “we,” “us,” or “our” may be used to refer collectively to the company or its entities where specific identification is unnecessary.
              </p>
              <p>
                The content on this website is provided by OBC Care e.K. for informational purposes only. Availability of OBC Care products and services may vary by region. By using this website or downloading content from it, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using this website.
              </p>
              <p>
                OBC Care e.K. makes no warranties or representations, expressed or implied, regarding the accuracy, completeness, or reliability of any information, text, graphics, links, or other materials on this website.
              </p>
              <p>
                We reserve the right to modify the website or update the products and services described herein at any time without prior notice. These Terms and Conditions may also be revised at any time, and it is your responsibility to review this page periodically to remain informed of any updates. Certain provisions may be overridden by specific legal notices or additional terms on individual pages.
              </p>
            </AccordionItem>

            <AccordionItem title="Intellectual Property Rights">
              <p>
                All materials on this website, including text, graphics, logos, icons, images, videos, and software, are the property of OBC Care e.K. or its licensors and are protected by copyright and other intellectual property laws.
              </p>
              <p>
                Nothing on this website grants you any license to use OBC Care’s intellectual property except as explicitly authorized herein. Unauthorized use, reproduction, or distribution of website content is strictly prohibited.
              </p>
              <p>
                Images displayed on this website are sourced from Google or Freepik unless otherwise indicated.
              </p>
            </AccordionItem>

            <AccordionItem title="Trademark Information">
              <p>
                All trademarks, service marks, and logos displayed on this website are the property of OBC Care e.K. or its subsidiaries. Public use of OBC Care e.K. trademarks requires prior written approval from our company.
              </p>
              <p>
                Fair use of trademarks for the purpose of promoting OBC Care products and services is permitted only with proper attribution. All other third-party trademarks remain the property of their respective owners. All proprietary notices must be observed.
              </p>
            </AccordionItem>

            <AccordionItem title="Website Usage">
              <p>
                OBC Care e.K. grants you a limited, non-transferable, and non-exclusive license to access and use this website for personal or informational purposes only. You agree not to copy, reproduce, resell, redistribute, or exploit any content without prior authorization.
              </p>
              <p>
                You also agree not to interfere with the operation of the website, introduce malicious software, or compromise its security in any way. While we make reasonable efforts to prevent viruses or other harmful content, OBC Care e.K. cannot guarantee the website is virus-free. You are responsible for implementing appropriate safeguards on your devices. OBC Care e.K. will not be liable for any damages resulting from use of this website, including loss of data, business interruption, or other direct or indirect losses.
              </p>
            </AccordionItem>

            <AccordionItem title="Personal Data Handling">
              <p>
                Any personal information provided by you to OBC Care e.K. will be treated confidentially and used only for purposes related to the provision of our services or as otherwise described in our Privacy Policy. Your data will not be disclosed to third parties except as necessary for service delivery or as legally required.
              </p>
            </AccordionItem>

            <AccordionItem title="Site Accessibility">
              <p>
                OBC Care e.K. does not guarantee uninterrupted access to this website. Temporary unavailability may occur due to technical maintenance, repairs, equipment failure, or other events beyond our control.
              </p>
            </AccordionItem>

            <AccordionItem title="External Links">
              <p>
                This website may include links to third-party websites. OBC Care e.K. does not control and is not responsible for the content, privacy policies, or practices of linked sites. Inclusion of any link does not constitute endorsement. Accessing external websites is at your own risk. We reserve the right to remove any links at our discretion.
              </p>
            </AccordionItem>

            <AccordionItem title="Governing Law">
              <p>
                This website is operated by OBC Care e.K. from Germany. Accessing this website from other jurisdictions is at your own risk, and users are responsible for compliance with local laws. All claims relating to this website are governed by the substantive laws of Germany.
              </p>
            </AccordionItem>

            <AccordionItem title="Forward-Looking Statements">
              <p>
                Statements on this website regarding future business opportunities, plans, growth, financial performance, or other non-historical matters are forward-looking statements. Such statements are identifiable by terms like “expects,” “intends,” “plans,” “projects,” “believes,” “estimates,” and similar expressions.
              </p>
              <p>
                Forward-looking statements involve risks and uncertainties that could cause actual results to differ materially, including market conditions, competition, operational challenges, and other factors. OBC Care e.K. does not undertake any obligation to update these statements publicly, and you should not rely solely on them for decision-making purposes.
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
