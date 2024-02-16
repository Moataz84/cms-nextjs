import { NextResponse } from "next/server"
import getLoggedIn from "@/utils/actions/loggedIn"

export async function middleware(request) {
  if (request.method === "POST") {
    if (request.headers.get("sec-fetch-site") !== "same-origin") 
      return NextResponse.json({msg: "Forbiden"}, {status: 403})
    return NextResponse.next()
  }

  const loggedIn = await getLoggedIn()
  const baseUrl = new URL(request.url)

  if (loggedIn) {
    if (baseUrl.pathname === "/admin/login") return NextResponse.redirect(`${baseUrl.origin}/admin/dashboard`)
    return NextResponse.next()
  }

  if ((baseUrl.pathname.startsWith("/admin") || baseUrl.pathname.endsWith("/edit")) && !baseUrl.pathname.endsWith("/login")) {
    return NextResponse.redirect(`${baseUrl.origin}/admin/login`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/admin/:path*", "/posts/:path*"]
}