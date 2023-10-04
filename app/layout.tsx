import { Metadata } from "next"
import { Container } from "../components/shared/Container"
import { SidebarMobile } from "../components/shared/SidebarMobile"
import { StepIndicator } from "../components/shared/StepIndicator"
import "./globals.css"
import localFont from "next/font/local"

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
    <html lang="en" className={`${UbuntuRegular.variable} 2xl:text-[18px]`}>
      <body>
        <header className="relative md:hidden flex justify-center z-10">
          <SidebarMobile className="fixed  md:hidden z-10 w-full h-auto" />
          <StepIndicator className="z-20 mt-4" />
        </header>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
