"use client"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import getLoggedIn from "@/utils/actions/loggedIn"
import { default as logout_server } from "@/utils/actions/logout"
import { MdLogout } from "react-icons/md"
import Link from "next/link"
import "@/app/styles/globals.css"

export default function Menu() {
  const router = useRouter()
  const pathname = usePathname()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    getLoggedIn().then(result => setLoggedIn(result))
  }, [pathname])

  async function logout() {
    setLoggedIn(false)
    await logout_server()
    router.push("/")
  }
  return (
    <nav>
      <Link href="/">Home</Link>
      {!loggedIn? <></> :
        <>
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/post">Create Post</Link>
          <button onClick={logout}>
            <MdLogout size={24} />
            Logout
          </button>
        </>
      }
    </nav>
  )
}