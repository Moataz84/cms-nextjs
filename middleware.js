import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"

export async function middleware(request) {
  if (request.method === "POST") {
    if (request.headers.get("sec-fetch-site") !== "same-origin") 
      return NextResponse.json({msg: "Forbiden"}, {status: 403})
    return NextResponse.next()
  }

  let loggedIn = false
  const base = new URL(request.url)
  const cookie = request.cookies.get("JWT-Token")

  try {
    const result = verify(cookie.value, process.env.ACCESS_TOKEN)
    loggedIn = true
  } catch {}
  

  console.log(request.url)
}

export const config = {
  matcher: ["/", "/login", "/dashboard", "/posts/:path*", "/create-post"]
}