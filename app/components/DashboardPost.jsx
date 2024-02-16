"use client"
import Link from "next/link"

export default function DashboardPost({ post }) {
  return (
    <div key={post.postId}>
      <h3>{post.title}</h3>
      <div className="options">
        <Link href={`/posts/${post.postId}/edit`}>Edit</Link>
        <button>Delete</button>
      </div>
    </div>
  )
}