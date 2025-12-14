import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/smooth-scroll"
import "../globals.css"

// Inter for body text and paragraphs (highly readable, professional)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Poppins for headers, titles, and navbar (modern, professional, slightly bold)
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "OBC Care - Global Logistics Solutions You Can Trust",
  description:
    "Fast. Secure. Reliable. — We move your time-critical shipments across the globe, 24/7.",
  generator: "v0.app",
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!["en", "de", "es"].includes(locale)) {
    // notFound() // Middleware catches this usually, but good for safety
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
