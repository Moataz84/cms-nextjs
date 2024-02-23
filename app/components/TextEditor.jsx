"use client"
import { useState } from "react"
import ReactQuill from "react-quill"
import { createPost, editPost } from "@/utils/actions/manage-posts"
import "react-quill/dist/quill.snow.css"
import "@/app/styles/editor.css"
import { useRouter } from "next/navigation"

const modules = {
  toolbar: {
    container: [
      [{"header": [1, 2, false]}],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "image", "link"]
    ]
  }
}

export default function TextEditor({ postId, postTitle, postBody }) {

  const router = useRouter()

  const [title, setTitle] = useState(postTitle)
  const [body, setbody] = useState(postBody)
  const [error, setError] = useState("")

  async function submit() {
    setError("")
    if (!title || !body) return setError("All fields are required")
    if (!postTitle) {
      const id = await createPost(title, body)
      router.push(`/posts/${id}`)
      return
    }
    await editPost(title, body)
    router.push(`/posts/${postId}`)
  }
  
  return (
    <div className="create-post">
      <label>Title</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} onFocus={() => setError("")} />
      <label>Body</label>
      <div>
        <ReactQuill theme="snow" modules={modules} value={body} onChange={setbody} onFocus={() => setError("")} />
      </div>
      <button onClick={submit}>Post</button>
      <p className="msg">{error}</p>
    </div>
  )
}