import TextEditor from "@/app/components/TextEditor"
import getPost from "@/utils/actions/get-post"
import "@/app/styles/editor.css"

export async function generateMetadata({ params: { postId } }) {
  const post = await getPost(postId)
  return {
    title: `Edit ${post.title}`
  }
}

export default async function EditPost({ params: { postId }}) {
  const { title, body } = await getPost(postId)

  return (
    <div className="post-form">
      <h2>Edit Post</h2>
      <TextEditor postId={postId} postTitle={title} postBody={body} />
    </div>
  )
}