import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { loading, user, registerHandler } = useAuth()
    const navigate = useNavigate()


    async function submitHandler(e) {
        e.preventDefault()
        await registerHandler(username, email, password)

        navigate("/")
    }
    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder='Enter username'
                        onChange={(e) => { setUsername(e.target.value) }}
                        value={username}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter Email'
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter Password'
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                    <button>Register</button>
                </form>
                <p>Already have an Account ? <Link to={"/login"}>Login</Link> </p>
            </div>
        </main>
    )
}

export default Register