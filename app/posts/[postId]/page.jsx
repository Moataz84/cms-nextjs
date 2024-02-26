import Posts from "@/utils/Models/Posts"
import connectDB from "@/utils/db"
import { notFound } from "next/navigation"
import "@/app/styles/posts.css"

async function getPost(postId) {
  connectDB()
  const post = await Posts.findOne({postId})
  if (!post) return notFound()
  return post
}

export async function generateMetadata({ params: { postId } }) {
  const post = await getPost(postId)
  return {
    title: post.title
  }
}

export default async function Post({ params: { postId } }) {
  const post = await getPost(postId)

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <div className="date">{new Date(parseInt(post.createdAt)).toLocaleDateString("en-US", {day: "2-digit", month: "long", year: "numeric"})}</div>
      <div className="post-body" dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
}