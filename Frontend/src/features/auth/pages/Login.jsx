import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [lodaing, setLodaing] = useState(false)
    async function loginSubmitHandler(e) {

        e.preventDefault()
        setLodaing(true)

        axios.post("http://localhost:3000/api/auth/login",{
            username,
            password
        },{withCredentials:true})
        .then((res)=>{
            console.log(res.data)
             setUsername("")
            setPassword("")
        })
        .catch((err)=>{
            console.log(err) 
        })
        .finally(()=>{
            setLodaing(false)
        })
    }
    return (
        <div>
            <main>
                <div className="form-container">
                    <h1>Login</h1>
                    <form onSubmit={loginSubmitHandler}>
                        <input
                            type="text"
                            name="username"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <button disabled={lodaing} >{lodaing?"Loading...":"Login"}</button>
                    </form>
                    <p>Don't have an account ? <Link className='toggle' to={'/register'} >Register</Link> </p>
                </div>
            </main>
        </div>
    )
}

export default Login