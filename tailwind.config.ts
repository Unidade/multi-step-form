import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "marine-blue": "var(--marine-blue)",
      "purplish-blue": "var(--purplish-blue)",
      "pastel-blue": "var(--pastel-blue)",
      "light-blue": "var(--light-blue)",
      "strawberry-red": "var(--strawberry-red)",
      "cool-gray": "var(--cool-gray)",
      "light-gray": "var(--light-gray)",
      magnolia: "var(--magnolia)",
      alabaster: "var(--alabaster)",
      white: "var(--white)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu)"],
      },
      backgroundImage: {
        "mobile-sidebar": "url('../public/assets/images/bg-sidebar-mobile.svg')",
        "desktop-sidebar": "url('../public/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
}
export default config


