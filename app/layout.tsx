import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "../components/Header"
import ScrollToTop from "../components/ScrollToTop"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Rossana Altez - Coaching & Mentorías Holísticas",
  description:
    "Transforma tu vida con coaching holístico personalizado. Descubre tu mejor versión a través de mentorías que integran mente, cuerpo y espíritu.",
  generator: "Next.js",
  applicationName: "Rossana Altez",
  referrer: "origin-when-cross-origin",
  keywords: ["Desarrollo Personal", "Coaching Holístico", "Mentorías", "Espiritualidad", "Rossana Altez", "Bienestar", "Crecimiento Personal"],
  authors: [{ name: "Rossana Altez" }],
  creator: "Rossana Altez",
  publisher: "Rossana Altez",
  metadataBase: new URL("https://rossanaaltez.com"), // Placeholder URL - recommended to update when domain is known
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rossana Altez - Coaching & Mentorías Holísticas",
    description: "Transforma tu vida con coaching holístico personalizado. Descubre tu mejor versión.",
    url: "https://rossanaaltez.com",
    siteName: "Rossana Altez",
    images: [
      {
        url: "/logo-new.png",
        width: 800,
        height: 600,
        alt: "Rossana Altez Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rossana Altez - Coaching & Mentorías Holísticas",
    description: "Transforma tu vida con coaching holístico personalizado.",
    images: ["/logo-new.png"],
  },
  icons: {
    icon: "/logo-new.png",
    apple: "/logo-new.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
