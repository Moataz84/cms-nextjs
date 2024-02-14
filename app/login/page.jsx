"use client"
import { useState } from "react"
import Input from "@/app/components/Input"
import "@/app/styles/auth.css"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function login() {

  }
  
  return (
    <div className="auth">
      <form className="login">
        <h2>Sign In</h2>
        <Input name="Email" type="email" value={email} setValue={setEmail} setMsg={setError} />
        <Input name="Password" type="password" value={password} setValue={setPassword} setMsg={setError} />
        <button onClick={login}>Sign In</button>
        <p className="error-msg">{error}</p>
      </form>
    </div>
  )
}