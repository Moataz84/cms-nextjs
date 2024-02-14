"use server"
import { cookies } from "next/headers"
import { compare } from "bcrypt"
import { SignJWT } from "jose"
import Users from "@/utils/Models/Users"
import connectDB from "@/utils/db"

export default async function login(username, password) {
  await connectDB()
  username = username.toLowerCase()
  const user = await Users.findOne({username})
  if (!user) return "Invalid credentials"
  const result = await compare(password, user.password)
  if (!result) return "Invalid credentials"

  const token = await new SignJWT({"id": user._id})
  .setProtectedHeader({alg: "HS256"})
  .setIssuedAt()
  .setExpirationTime("5d")
  .sign(new TextEncoder().encode(process.env.ACCESS_TOKEN))
  
  const cookie = {
    name: "JWT-Token",
    value: token,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 5,
    path: "/"
  }
  cookies().set(cookie)
  cookies().get("JWT-Token")
  return true
}