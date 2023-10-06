import { Metadata } from "next"
import { MainContainer } from "../components/MainContainer"
import "./globals.css"
import localFont from "next/font/local"
import { Navigation } from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Multi-Step Form Frontend Mentor Challenge",
  description: "Multi-Step Form created with Next.js + Tailwind CSS + Framer Motion",
}

const UbuntuRegular = localFont({
  src: [
    {
      path: "./Ubuntu-Regular.ttf",
      weight: "400",
    },
    {
      path: "./Ubuntu-Medium.ttf",
      weight: "500",
    },
    {
      path: "./Ubuntu-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-ubuntu",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${UbuntuRegular.variable}`}>
      <body className="app">
        <div className="wrapper">
          <header>
            <Navigation />
          </header>
          <MainContainer>{children}</MainContainer>
        </div>
      </body>
    </html>
  )
}
