"use client"
import Link from "next/link"

export default function PagePost({ post }) {
  return (
    <div key={post.postId}>
      <Link href={`/posts/${post.postId}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.createdAt}</p>
    </div>
  )
}