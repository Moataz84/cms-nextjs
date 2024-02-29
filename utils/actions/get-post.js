import Posts from "@/utils/Models/Posts"
import connectDB from "@/utils/db"
import { notFound } from "next/navigation"

export default async function getPost(postId) {
  connectDB()
  const post = await Posts.findOne({postId})
  if (!post) return notFound()
  return post
}