"use client"
import getPosts from "@/utils/actions/dashboard/get-posts"
import { useState, useRef, useEffect } from "react"

export default function Posts({ data }) {
  const observerRef = useRef()
  const containerRef = useRef()
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(1)
  const [posts, setPosts] = useState(data)

  useEffect(() => {
    const observer = new IntersectionObserver(async entries => {
      const intersecting = entries[0].isIntersecting
      if (intersecting) {
        const newPosts = await getPosts(current)
        setPosts(prev => [...prev, ...newPosts])
        setCurrent(prev => prev + 1)
        observer.unobserve(entries[0].target)
      }
    }, {threshold: 1})
    observerRef.current = observer

    observer.observe(containerRef.current.lastElementChild)
  }, [posts.length])

  return (
    <div className="posts-list" ref={containerRef}>
      {
        posts.map(post => <div key={post.postId}>{post.title}</div>)
      }
    </div>
  )
}