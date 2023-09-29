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
      <body>{children}</body>
    </html>
  )
}
