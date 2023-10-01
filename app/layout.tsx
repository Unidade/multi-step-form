import { Container } from "./Container"
import { SidebarMobile } from "./SidebarMobile"
import { StepIndicator } from "./StepIndicator"
import "./globals.css"
import localFont from "next/font/local"

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
    <html lang="en" className={`${UbuntuRegular.variable} lg:text-[18px]`}>
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
