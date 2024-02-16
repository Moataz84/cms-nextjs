"use server"
import Posts from "@/utils/Models/Posts"

export default async function getPosts(start) {
  const posts = await Posts.find().skip(start * 20).limit(20)
  return posts.map(post => {
    const postData = post._doc
    return {
      postId: postData.postId,
      title: postData.title,
      body: postData.body,
      createdAt: postData.createdAt
    }
  })
}