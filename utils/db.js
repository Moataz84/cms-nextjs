import { connections, connect } from "mongoose"

export default async function connectDB() {
  if (!connections[0].readyState) await connect(process.env.DB_URI)
}