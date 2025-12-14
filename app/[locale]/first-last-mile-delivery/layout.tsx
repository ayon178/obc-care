import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "First Mile / Last Mile Delivery | OBC Care",
  description:
    "Seamless ground transport from pickup to delivery — connecting airports, warehouses, and destinations with speed, precision, and 24/7 availability. Global FM/LM network.",
  openGraph: {
    title: "First Mile / Last Mile Delivery | OBC Care",
    description:
      "Seamless ground transport from pickup to delivery — connecting airports, warehouses, and destinations with speed, precision, and 24/7 availability. Global FM/LM network.",
    url: "https://obc-care.com/first-last-mile-delivery",
    siteName: "OBC Care",
    images: [
      {
        url: "/services/first_last_mile.jpeg",
        width: 1200,
        height: 630,
        alt: "First Mile / Last Mile Delivery Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/first-last-mile-delivery",
  },
  keywords: [
    "first mile delivery",
    "last mile delivery",
    "ground transport",
    "logistics",
    "airport pickup",
    "door to door delivery",
    "express ground transfers",
    "time-critical logistics",
    "OBC Care",
  ],
}

export default function FirstLastMileDeliveryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

