import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Amadou GUISSE",
  description: "Portfolio professionnel de Amadou GUISSE, Développeur Web",
  // icons: {
  //   icon: "/favicon.ico", // Icône principale
  //   shortcut: "/favicon.ico", // Icône de raccourci
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
