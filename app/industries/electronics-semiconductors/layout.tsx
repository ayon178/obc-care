import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Electronics & Semiconductors Logistics | OBC Care Global Logistics",
  description:
    "Precision, protection, and performance — delivering your sensitive components fast and safely, anywhere in the world. ESD-safe handling and time-critical expertise for electronics and semiconductors.",
  openGraph: {
    title: "Electronics & Semiconductors Logistics | OBC Care",
    description:
      "Time-critical logistics for electronics and semiconductors. ESD-safe handling, secure chain of custody, and regulatory compliance. From lab to line, prototype to production.",
  },
}

export default function ElectronicsSemiconductorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

