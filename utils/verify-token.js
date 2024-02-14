import { jwtVerify } from "jose"

export default async function(cookie) {
  try {
    await jwtVerify(cookie.value, new TextEncoder().encode(process.env.ACCESS_TOKEN))
    return true
  } catch {
    return false
  }
}