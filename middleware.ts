import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { STEPS, initialData } from "./lib/initialData"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const lastAllowedStep = request.cookies.get("lastStep")?.value
  const confirmedForm = request.cookies.get("confirmed")?.value === "true"

  const pathname = request.nextUrl.pathname.replace("/", "")

  const isCurrentPathNameAllowed =
    // current pathname is the next step or the the current pathname is a previousStep or equal the lastAllowedStep
    // for example if the last allowed step is "your-info" and the current pathname can be "your-info" or "select-plan", otherwise redirect to the last allowed step
    pathname === STEPS[STEPS.indexOf(lastAllowedStep as any) + 1] ||
    STEPS.indexOf(pathname as any) >= STEPS.indexOf(lastAllowedStep as any)

  let response

  if (confirmedForm) {
    return NextResponse.next()
  }

  if (
    !lastAllowedStep ||
    !STEPS.includes(lastAllowedStep as any) ||
    !STEPS.includes(pathname as any)
  ) {
    response = NextResponse.redirect(new URL("/your-info", request.nextUrl.href))
    response.cookies.set("lastStep", "your-info")
    response.cookies.set("data", JSON.stringify(initialData))

    return response
  } else if (!isCurrentPathNameAllowed) {
    response = NextResponse.redirect(new URL(`/${lastAllowedStep}`, request.nextUrl.href))
    console.log(response)

    return response
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
     * - Query string ?_rsc
     */
    "/((?!api|_next/static|_next/image|favicon.ico|:path?_rsc=*).*)",
  ],
}
