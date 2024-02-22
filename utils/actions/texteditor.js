"use server"
import { v4 } from "uuid"
import imagekit from "../imagekit"
import Users from "../Models/Users"

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
          folder: `forum/posts/${id}`
        }, (e, result) => resolve({image, url: result.url}))
      })
    })
  )
  imageUrls.forEach(img => body = body.replaceAll(img.image, img.url))
}

export async function editPost() {

}