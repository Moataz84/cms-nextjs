import getPosts from "@/utils/actions/get-posts"
import Posts from "@/app/components/Posts"
import PagePost from "@/app/components/PagePost"

export const revalidate = 10

export const metadata = {
  title: "Home"
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      <Posts postData={posts} Post={PagePost} />
    </div>
  )
}