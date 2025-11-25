import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviation & AOG Parts Logistics | OBC Care Global Logistics",
  description:
    "When an aircraft is grounded, every second counts. OBC Care delivers critical AOG parts and aviation materials — fast, secure, and globally coordinated. 24/7 AOG desk available.",
  openGraph: {
    title: "Aviation & AOG Parts Logistics | OBC Care",
    description:
      "Rapid response AOG logistics. Get your aircraft back in the sky — fast, safe, and without compromise. Next flight booking and 24/7 support.",
  },
}

export default function AviationAogPartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

