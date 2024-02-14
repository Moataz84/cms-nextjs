import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request) {
  if (request.method === "POST") {
    if (request.headers.get("sec-fetch-site") !== "same-origin") 
      return NextResponse.json({msg: "Forbiden"}, {status: 403})
    return NextResponse.next()
  }

  let loggedIn = false
  const cookie = request.cookies.get("JWT-Token")

  const baseUrl = new URL(request.url)
  const protectedRoutes = ["/dashboard", "/edit"]

  try {
    jwtVerify(cookie.value, new TextEncoder().encode(process.env.ACCESS_TOKEN))
    loggedIn = true
  } catch {
    loggedIn = false
  }
  
  if (loggedIn) {
    if (baseUrl.pathname === "/login") return NextResponse.redirect(`${baseUrl.origin}/dashboard`)
    return NextResponse.next()
  }

  if (protectedRoutes.some(route => baseUrl.pathname.endsWith(route))) {
    return NextResponse.redirect(`${baseUrl.origin}/login`)
  }

  return NextResponse.next()
  
}

export const config = {
  matcher: ["/", "/login", "/dashboard", "/posts/:path*", "/create-post"]
}