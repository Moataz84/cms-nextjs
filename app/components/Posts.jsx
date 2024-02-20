"use client"
import { useState, useEffect } from "react"
import "@/app/styles/posts.css"

export default function Posts({ data, Post }) {
  const [posts, setPosts] = useState(data)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setPosts(data.filter(post => post.title.includes(search) || post.body.includes(search)))
  }, [search])

  return (
    <>
      <div className="search">
        <label>Search</label>
        <input type="text" onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="posts-list">
        { posts.map(post => <Post key={post.postId} post={post} />) }
      </div>
    </>
  )
}