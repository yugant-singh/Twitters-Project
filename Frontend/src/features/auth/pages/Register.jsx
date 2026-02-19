import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
 

    async function registerSubmitHandler(e) {
        e.preventDefault()

       setLoading(true)

        axios.post("http://localhost:3000/api/auth/register", {
            username,
            email,
            password
        }, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                setUsername("")
                setEmail("")
                setPassword("")
            })
            .catch((err) => {
                console.log(err.res.message)
            })
           .finally(()=>{
            setLoading(false)
           })

    }
    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={registerSubmitHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder='Username'
                        value={username}
                        onChange={e => { setUsername(e.target.value) }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <button disabled={loading}>{loading?"Creating account...":"Register"}</button>
                </form>
                <p>Already have an account ? <Link className='toggle' to={'/login'} >Login</Link> </p>
            </div>
        </main>
    )
}

export default Register