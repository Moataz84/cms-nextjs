import { headers } from "next/headers"
import getPosts from "@/utils/actions/get-posts"
import Posts from "@/app/components/Posts"
import DashboardPost from "@/app/components/DashboardPost"

export const metadata = {
  title: "Dashboard"
}

export default async function DashboardPage() {
  headers()

  const posts = await getPosts()

  return (
    <div className="posts-container dashboard">
      <h2>Dashboard</h2>
      <Posts data={posts} Post={DashboardPost} />
    </div>
  )
}