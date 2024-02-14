"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "@/app/components/Input"
import login from "@/utils/actions/login"
import "@/app/styles/auth.css"

export default function LoginPage() {

  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function submit(e) {
    e.preventDefault()

    setError("")
    if (!username || !password) {
      return setError("All fields are required.")
    }

    const result = await login(username, password)
    if (result === true) {
      return router.push("/")
    }

    return setError(result)
  }
  
  return (
    <div className="auth">
      <form className="login">
        <h2>Sign In</h2>
        <Input name="Username" type="text" value={username} setValue={setUsername} setMsg={setError} />
        <Input name="Password" type="password" value={password} setValue={setPassword} setMsg={setError} />
        <button onClick={submit}>Sign In</button>
        <p className="error-msg">{error}</p>
      </form>
    </div>
  )
}