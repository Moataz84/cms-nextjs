import TextEditor from "@/app/components/TextEditor"
import "@/app/styles/editor.css"

export const metadata = {
  title: "Create Post"
}

export default function CreatePost() {
  return (
    <div className="post-form">
      <h2>Create Post</h2>
      <TextEditor postId="" postTitle="" postBody="" />
    </div>
  )
}