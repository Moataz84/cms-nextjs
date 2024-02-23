import Posts from "@/utils/Models/Posts"
import connectDB from "@/utils/db"
import { notFound } from "next/navigation"

export async function generateMetadata({ params: { postId } }) {
  connectDB()
  const post = await Posts.findOne({postId})
  if (!post) notFound()
  return {
    title: post.title
  }
}

export default async function Post({ params: { postId } }) {
  connectDB()
  const post = await Posts.findOne({postId})
  if (!post) notFound()

  return (
    <div>Post</div>
  )
}