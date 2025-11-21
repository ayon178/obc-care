import React from "react"
import { ChevronsLeft } from "lucide-react"

const HowItWorks: React.FC = () => {
  return (
    <div className="relative w-full lg:w-1/2 bg-brand-dark text-white overflow-hidden flex flex-col justify-center p-8 lg:p-16 min-h-[600px] lg:min-h-screen">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")',
        }}
      />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Step 1 */}
          <div className="space-y-2">
            <span className="text-brand-orange font-bold text-lg tracking-widest block mb-1">
              STEP
            </span>
            <div className="text-5xl font-bold text-brand-orange mb-3">01</div>
            <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
              Request a quote for your shipment
            </h3>
            {/* Decorative Chevron - positioned roughly where it is in the image */}
            <div className="hidden md:block text-brand-orange mt-4">
              <ChevronsLeft
                size={32}
                className="transform -rotate-45 opacity-80"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <span className="text-brand-orange font-bold text-lg tracking-widest block mb-1">
              STEP
            </span>
            <div className="text-5xl font-bold text-brand-orange mb-3">02</div>
            <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
              We will provide a quote for the services you need.
            </h3>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <span className="text-brand-orange font-bold text-lg tracking-widest block mb-1">
              STEP
            </span>
            <div className="text-5xl font-bold text-brand-orange mb-3">03</div>
            <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
              Once the quote is accepted, an agreement will be made on the terms
              of payment.
            </h3>
          </div>

          {/* Step 4 */}
          <div className="space-y-2">
            <span className="text-brand-orange font-bold text-lg tracking-widest block mb-1">
              STEP
            </span>
            <div className="text-5xl font-bold text-brand-orange mb-3">04</div>
            <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
              Once the agreement is confirmed, we go straight to work!
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
