import getPosts from "@/utils/actions/dashboard/get-posts"
import Posts from "@/app/components/Posts"
import PagePost from "@/app/components/PagePost"

export const revalidate = 10

export const metadata = {
  title: "Posts"
}

export default async function PostsPage() {
  const posts = await getPosts(0)

  return (
    <div className="posts-container">
      <Posts data={posts} Post={PagePost} />
    </div>
  )
}