import TextEditor from "@/app/components/TextEditor"
import Posts from "@/utils/Models/Posts"
import "@/app/styles/editor.css"

export const metadata = {
  title: "Edit Post"
}

export default async function EditPost({ params: { postId }}) {
  const { title, body } = await Posts.findOne({postId})

  return (
    <div className="post-form">
      <h2>Edit Post</h2>
      <TextEditor postId={postId} postTitle={title} postBody={body} />
    </div>
  )
}