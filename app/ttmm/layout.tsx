import React from "react"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={"bg-contain bg-blend-screen bg-no-repeat"}>{children}</body>
    </html>
  )
}
