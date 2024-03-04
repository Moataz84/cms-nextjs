"use server"
import { v4 } from "uuid"
import { JSDOM } from "jsdom"
import imagekit from "@/utils/imagekit"
import Posts from "@/utils/Models/Posts"
import connectDB from "@/utils/db"

export async function createPost(title, body) {
  await connectDB()
  const postId = v4()
  const document = new JSDOM(body).window.document
  const images = new Set([...document.querySelectorAll("img")].map(elem => elem.src))

  const imageUrls = await Promise.all(
    [...images].map(image => {
      return new Promise(resolve => {
        imagekit.upload({
          file: image,
          fileName: v4(),
          folder: `next-cms/${postId}`
        }, (e, result) => resolve({image, url: result.url}))
      })
    })
  )
  imageUrls.forEach(img => body = body.replaceAll(img.image, img.url))

  await new Posts({
    postId,
    title,
    body,
    createdAt: new Date().getTime()
  }).save()

  await new Promise(resolve => imagekit.createFolder({folderName: postId, parentFolderPath: "/next-cms"}, () => {resolve("folder-created")}))
  return postId
}

export async function editPost(postId, title, body) {
  await connectDB()
  const document = new JSDOM(body).window.document
  const images = new Set([...document.querySelectorAll("img")].map(elem => elem.src))
  const imageUrls = await Promise.all(
    [...images].map(image => {
      if (!image.includes("https://ik.imagekit.io/pk4i4h8ea/next-cms/"))
      return new Promise(resolve => {
        imagekit.upload({
          file: image,
          fileName: v4(),
          folder: `next-cms/${postId}`
        }, (e, result) => resolve({image, url: result.url}))
      })
    })
  )

  imageUrls.filter(img => img !== undefined).forEach(img => body = body.replaceAll(img.image, img.url))
  await Posts.findOneAndUpdate({postId}, {$set: {title, body}})
}

export async function deletePost(postId) {
  await connectDB()
  await Posts.findOneAndDelete({postId})
  await new Promise(resolve => imagekit.deleteFolder(`/cms-next/${postId}`, () => resolve("folder-deleted")))
}