export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid pb-20 place-items-baseline  lg:place-content-center">
      <div className="px-4 relative bg-magnolia">
        <div className="relative z-20">
          <div className="flex justify-center flex-col pb-8  t-4 gap-8">
            <div className="bg-white shadow-2xl shadow-light-blue rounded-md px-6 py-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
