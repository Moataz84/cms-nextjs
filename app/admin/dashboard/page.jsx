import getPosts from "@/utils/actions/dashboard/get-posts"
import LogoutButton from "@/app/components/dashboard/Logout"
import Posts from "@/app/components/dashboard/Posts"
import "@/app/styles/dashboard.css"

export const metadata = {
  title: "Dashboard"
}

export default async function DashboardPage() {

  const posts = await getPosts(0)

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Posts data={posts} />
      <LogoutButton />
    </div>
  )
}