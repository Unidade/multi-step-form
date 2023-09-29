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
    <html lang="en" className={`${UbuntuRegular.variable} relative`}>
      <body>
        <SidebarMobile className="fixed z-10" />

        <div className="flex flex-col gap-8">
          <header className="relative mt-4 flex justify-center z-10">
            <StepIndicator />
          </header>
          <Container>{children}</Container>
        </div>
      </body>
    </html>
  )
}
