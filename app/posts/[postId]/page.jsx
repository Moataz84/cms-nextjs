import Posts from "@/utils/Models/Posts"
import connectDB from "@/utils/db"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Post"
}

export default async function Post({ params: { postId } }) {
  connectDB()
  const post = await Posts.findOne({postId})
  if (!post) notFound()

  return (
    <div>Post</div>
  )
}