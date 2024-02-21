"use client"
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "@/app/styles/editor.css"

const modules = {
  toolbar: {
    container: [
      [{"header": [1, 2, false]}],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "image", "link"]
    ]
  }
}

export default function TextEditor() {

  const [title, setTitle] = useState("")
  const [body, setbody] = useState("")

  return (
    <div className="create-post">
      <label>Title</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} onFocus={() => setError("")} />
      <label>Body</label>
      <ReactQuill theme="snow" modules={modules} body={body} setbody={setbody} />
      <button>Post</button>
    </div>
  )
}