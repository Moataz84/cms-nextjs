"use client"
import { useState, useEffect } from "react"
import "@/app/styles/posts.css"

export default function Posts({ postData, Post }) {
  const [data, setData] = useState(postData)
  const [posts, setPosts] = useState(data)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setPosts(data.filter(post => post.title.includes(search) || post.body.includes(search)))
  }, [search, data])

  return (
    <>
      <div className="search">
        <label>Search</label>
        <input type="text" onChange={e => setSearch(e.target.value)} />
      </div>
      {
        posts.length > 0?
          <div className="posts-list">
            { posts.map(post => <Post key={post.postId} post={post} setPosts={setData} />) }
          </div>
        : <h3 style={{textAlign: "center"}}>No results found</h3>
      }
    </>
  )
}