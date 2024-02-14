import Link from "next/link"
import "@/app/styles/globals.css"

export default function Menu() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  )
}