"use client"
import Link from "next/link"

export default function DashboardPost({ post }) {
  return (
    <div key={post.postId} className="dashboard-post">
      <Link href={`/posts/${post.postId}`}>
        <h3>{post.title}</h3>
      </Link>
      <Link href={`/posts/${post.postId}/edit`}>Edit</Link>
      <button>Delete</button>
    </div>
  )
}