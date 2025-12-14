import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | OBC Care - Our Story, Mission & Team",
  description: "Learn about OBC Care's journey since 2018. Founded by Eugen Reimer, we deliver urgent logistics with trust, precision, and care. Meet our team.",
  openGraph: {
    title: "About Us | OBC Care - Our Story, Mission & Team",
    description: "Learn about OBC Care's journey since 2018. Founded by Eugen Reimer, we deliver urgent logistics with trust, precision, and care. Meet our team.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

