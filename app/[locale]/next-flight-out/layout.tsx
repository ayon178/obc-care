import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next Flight Out (NFO) Solutions | OBC Care Global Logistics",
  description: "When every minute counts, OBC Care's Next Flight Out (NFO) service gets your shipment on the very next flight. 24/7 coordination, full visibility, and guaranteed speed for time-critical shipments.",
  openGraph: {
    title: "Next Flight Out (NFO) Solutions | OBC Care",
    description: "Fastest air freight solution for time-critical shipments. Book on the next available flight with 24/7 support.",
    type: "website",
  },
  alternates: {
    canonical: "/next-flight-out",
  },
}

export default function NextFlightOutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

