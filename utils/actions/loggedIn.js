"use server"
import { jwtVerify } from "jose"
import { cookies } from "next/headers"

export default async function getLoggedIn() {
  const cookie = cookies().get("JWT-Token")
  
  try {
    await jwtVerify(cookie.value, new TextEncoder().encode(process.env.ACCESS_TOKEN))
    return true
  } catch {
    return false
  }
}