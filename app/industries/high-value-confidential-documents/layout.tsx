import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "High-Value & Confidential Document Delivery | OBC Care",
  description: "Secure hand-carry delivery for confidential documents. Legal, financial, diplomatic papers. Absolute discretion, 24/7 support.",
  openGraph: {
    title: "High-Value & Confidential Document Delivery | OBC Care",
    description: "Secure hand-carry delivery for confidential documents. Legal, financial, diplomatic papers. Absolute discretion, 24/7 support.",
  },
}

export default function HighValueConfidentialDocumentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

