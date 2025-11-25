import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industry-Specific Logistics Solutions | OBC Care Global Logistics",
  description:
    "Delivering reliability across every sector — from aircraft engines to microchips. OBC Care ensures time-critical shipments reach their destination safely and on time for aviation, automotive, electronics, and more.",
  openGraph: {
    title: "Industry-Specific Logistics Solutions | OBC Care",
    description:
      "Mission-critical shipments for industries where speed, precision and reliability are non-negotiable. Global network delivering 24/7.",
  },
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

