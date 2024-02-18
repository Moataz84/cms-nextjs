"use client"
import Link from "next/link"
import "@/app/styles/posts.css"

export default function PagePost({ post }) {

  return (
    <div key={post.postId} className="page-post">
      <Link className="title" href={`/posts/${post.postId}`}>{post.title}</Link>
      <span>{new Date(parseInt(post.createdAt)).toLocaleDateString("en-US", {day: "2-digit", month: "long", year: "numeric"})}</span>
      <div className="preview">{post.preview}</div>
      <Link href={`/posts/${post.postId}`}>Read more</Link>
    </div>
  )
}