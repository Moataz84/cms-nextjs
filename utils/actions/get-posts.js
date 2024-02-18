"use server"
import { JSDOM } from "jsdom"
import Posts from "@/utils/Models/Posts"
import connectDB from "@/utils/db"

function getPreview(body) {
  const document = new JSDOM(body).window.document
  const tempElement = document.createElement("div")
  tempElement.innerHTML = body
  const text = tempElement.textContent
  if (text.length <= 150) return text
  return `${text.substring(0, 150)} ...`
}

export default async function getPosts(start, search = "") {
  await connectDB()
  const regex = new RegExp(search, "i")
  const posts = await Posts.find({$or: [{title: regex}, {body: regex}]}).skip(start * 20).limit(20)
  return posts.map(post => {
    const postData = post._doc
    return {
      postId: postData.postId,
      title: postData.title,
      body: postData.body,
      createdAt: postData.createdAt,
      preview: getPreview(postData.body)
    }
  })
}