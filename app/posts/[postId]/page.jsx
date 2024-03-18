import connectDB from "@/utils/db"
import Posts from "@/utils/Models/Posts"
import getPost from "@/utils/actions/get-post"
import "react-quill/dist/quill.snow.css"
import "@/app/styles/posts.css"
import "@/app/styles/editor.css"

export const revalidate = 10

export async function generateMetadata({ params: { postId } }) {
  const post = await getPost(postId)
  return {
    title: post.title
  }
}

export async function generateStaticParams() {
  await connectDB()
  const posts = await Posts.find()
  const postIds = posts.map(post => ({postId: post.postId}))
  return postIds
}

export default async function Post({ params: { postId } }) {
  const post = await getPost(postId)

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <div className="date">{new Date(parseInt(post.createdAt)).toLocaleDateString("en-US", {day: "2-digit", month: "long", year: "numeric"})}</div>
      <div className="ql-snow">
        <div className="post-body ql-editor" dangerouslySetInnerHTML={{__html: post.body}} />
      </div>
    </div>
  )
}