"use client"
import getPosts from "@/utils/actions/get-posts"
import { useState, useRef, useEffect } from "react"
import "@/app/styles/posts.css"

export default function Posts({ data, Post }) {
  const observerRef = useRef()
  const containerRef = useRef()
  const [current, setCurrent] = useState(1)
  const [posts, setPosts] = useState(data)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setCurrent(1)
    getPosts(0, search).then(posts => setPosts(posts))
  }, [search])

  useEffect(() => {
    const observer = new IntersectionObserver(async entries => {
      const intersecting = entries[0].isIntersecting
      if (intersecting) {
        const newPosts = await getPosts(current, search)
        setPosts(prev => [...prev, ...newPosts])
        setCurrent(prev => prev + 1)
        observer.unobserve(entries[0].target)
      }
    }, {threshold: 1})
    observerRef.current = observer

    observer.observe(containerRef.current.lastElementChild)
  }, [posts.length])

  return (
    <>
      <div className="search">
        <label>Search</label>
        <input type="text" onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="posts-list" ref={containerRef}>
        { posts.map(post => <Post key={post.postId} post={post} />) }
      </div>
    </>
  )
}