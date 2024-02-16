"use client"
import { useRouter } from "next/navigation"
import { CiLogout } from "react-icons/ci"
import { default as logout_server } from "@/utils/actions/dashboard/logout"
import "@/app/styles/dashboard.css"

export default function LogoutButton() {
  const router = useRouter()

  async function logout() {
    await logout_server()
    router.push("/")
  }

  return (
    <button onClick={logout}>
      <CiLogout />
      Logout
    </button>
  )
}