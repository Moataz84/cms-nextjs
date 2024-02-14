import { Schema, models, model } from "mongoose"

const schema = new Schema({
  postId: String,
  title: String,
  body: String
})

const Posts = models.posts || model("posts", schema)
export default Posts