"use server"
import { cookies } from "next/headers"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import Users from "@/utils/Models/Users"
import connectDB from "@/utils/database"

export default async function login() {
  await connectDB()
}