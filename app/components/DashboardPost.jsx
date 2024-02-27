"use client"
import { deletePost as deleteServer } from "@/utils/actions/manage-posts"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPost({ post }) {

  const router = useRouter()

  async function deletePost(postId) {
    const confirmed = confirm("Are you sure you want to delete this post? This action is irreversible.")
    if (confirmed) {
      await deleteServer(postId)
      router.refresh()
    }
  }

  return (
    <div key={post.postId} className="dashboard-post">
      <Link href={`/posts/${post.postId}`}>
        <h3>{post.title}</h3>
      </Link>
      <Link href={`/posts/${post.postId}/edit`}>Edit</Link>
      <button onClick={() => deletePost(post.postId)}>Delete</button>
    </div>
  )
}