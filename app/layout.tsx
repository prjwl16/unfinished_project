import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"

export const metadata: Metadata = {
  title: "Prajwal",
  description: "Software Engineer",
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-contain bg-blend-screen bg-no-repeat`}>{children}</body>
    </html>
  )
}
