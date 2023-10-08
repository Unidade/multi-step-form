import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { STEPS, initialData } from "./lib/initialData"

export function middleware(request: NextRequest) {
  const furthestVisitedStep = request.cookies.get("furthestVisitedStep")?.value
  const data = request.cookies.get("data")?.value ?? JSON.stringify(initialData)

  const pathname = request.nextUrl.pathname.replace("/", "")
  const isCurrentPathTheFirstStep = pathname === STEPS[0]

  const indexOfTheFurthestAllowedStep = STEPS.indexOf(furthestVisitedStep as any) + 1

  const isCurrentPathAllowed =
    STEPS.includes(pathname as any) &&
    STEPS.indexOf(pathname as any) <= indexOfTheFurthestAllowedStep

  // First visit, set the default cookies values
  if (isCurrentPathTheFirstStep && !furthestVisitedStep) {
    // redirect to itself to revalidate the cookies, in the next request will be Next
    const response = NextResponse.redirect(new URL(`/${STEPS[0]}`, request.url))
    response.cookies.set("data", data)
    response.cookies.set("furthestVisitedStep", STEPS[0])

    return response
  }

  // else redirect to the furthest allowed step
  else if (!isCurrentPathAllowed) {
    return NextResponse.redirect(
      new URL(`/${furthestVisitedStep || STEPS[0]}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Query string ?_rsc (pre-fetch requests)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|:path?_rsc=*).*)",
  ],
}
