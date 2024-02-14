import { Schema, models, model } from "mongoose"

const schema = new Schema({
  username: String,
  password: String
})

const Users = models.users || model("users", schema)
export default Users