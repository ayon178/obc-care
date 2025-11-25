import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology & Data Equipment Logistics | OBC Care",
  description: "Secure, fast logistics for servers, IT hardware, and data equipment. ESD-safe handling, ITAR compliance. 24/7 support.",
  openGraph: {
    title: "Technology & Data Equipment Logistics | OBC Care",
    description: "Secure, fast logistics for servers, IT hardware, and data equipment. ESD-safe handling, ITAR compliance. 24/7 support.",
  },
}

export default function TechnologyDataEquipmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

