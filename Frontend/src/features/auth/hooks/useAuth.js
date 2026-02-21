import { useContext } from "react";
import { AuthContext } from '../auth.context'
import { login, register } from '../services/auth.api'

export function useAuth() {
    const context = useContext(AuthContext)
    const { loading, setLoading, user, setUser } = context

    const loginHandler = async (username, password) => {
        setLoading(true)
        try {
            const response = await login(username, password)
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    const registerHandler = async (username, email, password) => {
        setLoading(true)

        try {
            const response = await register(username,email, password)
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    return {user,loading,loginHandler,registerHandler}

}