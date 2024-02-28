"use server"
import { v4 } from "uuid"
import imagekit from "@/utils/imagekit"
import Posts from "@/utils/Models/Posts"

export async function createPost(title, body) {
  const postId = v4()

  const pattern = /<img[^>]+src="([^">]+)"/g
  const images = new Set([...body.matchAll(pattern)].map(match => match[1]))

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

  return postId
}

export async function editPost() {

}

export async function deletePost(postId) {
  await Posts.findOneAndDelete({postId})
  try {
    imagekit.deleteFolder(`/cms-next/${postId}`)
  } catch {}
}