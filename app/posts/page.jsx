import getPosts from "@/utils/actions/get-posts"
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
      <h2>Posts</h2>
      <Posts data={posts} Post={PagePost} />
    </div>
  )
}