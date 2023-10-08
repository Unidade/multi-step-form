"use client"

export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-11/12 md:mt-0 md:w-full md:flex md:flex-col  rounded-md md:justify-self-auto relative bg-white -mt-10 p-8 h-full justify-self-center shadow-md md:shadow-none text-start">
      {children}
    </main>
  )
}
