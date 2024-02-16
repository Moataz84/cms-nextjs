"use client"
import Link from "next/link"
import "@/app/styles/posts.css"

export default function PagePost({ post }) {

  function getPostPreview() {
    const tempElement = document.createElement("div")
    tempElement.innerHTML = post.body
    const text = tempElement.textContent
    if (text.length <= 150) return text
    return `${text.substring(0, 150)} ...`
  }

  return (
    <div key={post.postId} className="page-post">
      <Link href={`/posts/${post.postId}`}>
        <h3>{post.title}</h3>
      </Link>
      <div className="preview">{getPostPreview()}</div>
      <b>posted on {new Date(parseInt(post.createdAt)).toLocaleDateString("en-US", {day: "2-digit", month: "short", year: "numeric"})}</b>
    </div>
  )
}