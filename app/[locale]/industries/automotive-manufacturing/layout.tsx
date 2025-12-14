import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automotive & Manufacturing Logistics | OBC Care Global Logistics",
  description:
    "When production lines can't afford to stop, OBC Care keeps your supply chain moving — fast, precise, and globally coordinated. Zero downtime commitment for just-in-time operations.",
  openGraph: {
    title: "Automotive & Manufacturing Logistics | OBC Care",
    description:
      "Time-critical logistics for automotive and manufacturing. Keep your production lines running with zero downtime commitment. Multi-modal flexibility and 24/7 control.",
  },
}

export default function AutomotiveManufacturingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

