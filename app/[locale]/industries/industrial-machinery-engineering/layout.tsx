import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Machinery & Engineering Logistics | OBC Care",
  description: "Time-critical logistics for heavy machinery parts, MRO components, and industrial equipment. Fast, safe delivery worldwide. 24/7 support.",
  openGraph: {
    title: "Industrial Machinery & Engineering Logistics | OBC Care",
    description: "Time-critical logistics for heavy machinery parts, MRO components, and industrial equipment. Fast, safe delivery worldwide. 24/7 support.",
  },
}

export default function IndustrialMachineryEngineeringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

