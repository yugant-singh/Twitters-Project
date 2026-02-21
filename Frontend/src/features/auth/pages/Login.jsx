import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import '../style/form.scss'
import {useAuth} from '../hooks/useAuth'
const Login = () => {
const navigate = useNavigate()
  const{loginHandler,loading,user} = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
 async function submitHandler(e){
e.preventDefault()
await loginHandler(username,password)
  navigate("/")

 }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form  onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            placeholder='Enter username'
            onChange={(e)=>{setUsername(e.target.value)}}
            value={username}
            
          />

          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
          />
          <button>Login</button>
        </form>
        <p>Don't have an Account ? <Link to={"/register"}>Create one</Link> </p>
      </div>
    </main>
  )
}

export default Login