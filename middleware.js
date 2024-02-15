import { NextResponse } from "next/server"
import getLoggedIn from "@/utils/loggedIn"

export async function middleware(request) {
  if (request.method === "POST") {
    if (request.headers.get("sec-fetch-site") !== "same-origin") 
      return NextResponse.json({msg: "Forbiden"}, {status: 403})
    return NextResponse.next()
  }

  const cookie = request.cookies.get("JWT-Token")
  const loggedIn = await getLoggedIn(cookie)

  const baseUrl = new URL(request.url)

  
  if (loggedIn) {
    if (baseUrl.pathname === "/login") return NextResponse.redirect(`${baseUrl.origin}/dashboard`)
    return NextResponse.next()
  }

  if (baseUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(`${baseUrl.origin}/login`)
  }

  return NextResponse.next()
  
}

export const config = {
  matcher: ["/", "/login", "/dashboard", "/posts/:path*", "/create-post"]
}