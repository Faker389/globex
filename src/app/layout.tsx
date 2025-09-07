import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Letnie Perełki - Najlepsze Oferty Wakacyjne",
  description:
    "Odkryj najpiękniejsze destynacje wakacyjne z Letnie Perełki. Znajdź swoje wymarzone wakacje w najlepszych cenach.",
  generator: "v0.app",
  keywords: "wakacje, podróże, oferty wakacyjne, Grecja, Tajlandia, Hiszpania, Włochy, Turcja, Chorwacja",
  authors: [{ name: "Letnie Perełki" }],
  openGraph: {
    title: "Letnie Perełki - Najlepsze Oferty Wakacyjne",
    description: "Odkryj najpiękniejsze destynacje wakacyjne z Letnie Perełki",
    type: "website",
    locale: "pl_PL",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">

    <head>
    <Script
      src="https://emrld.cc/NDU1ODE2.js?t=455816"
      strategy="beforeInteractive"
      async
      data-noptimize="1"
      data-cfasync="false"
      data-wpfc-render="false"
    />
    </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>{children}</body>

    </html>
  )
}
