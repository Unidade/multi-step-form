import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { initialData } from "./lib/initialData"
import { STEPS } from "./types"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const lastStep = request.cookies.get("lastStep")?.value

  let response

  if (!lastStep || !STEPS.includes(lastStep as any)) {
    response = NextResponse.redirect(new URL("/your-info", request.nextUrl.href))
    response.cookies.set("lastStep", "your-info")
    response.cookies.set("data", JSON.stringify(initialData))

    return response
  } else if (
    STEPS.indexOf(lastStep as any) <
    STEPS.indexOf(request.nextUrl.pathname.slice(1) as any)
  ) {
    response = NextResponse.redirect(new URL(`/${lastStep}`, request.nextUrl.href))

    return response
  }

  return NextResponse.next()
}
