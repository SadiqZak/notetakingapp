import { useContext } from "react"
import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from "../context/auth-context"

const RequiresAuth = ({children})=>{
    const {stateAuth} = useContext(AuthContext)
    const {token} = stateAuth
    const location = useLocation()
    return token? (
        children
    ):(
        <Navigate to="/login" state={{from: location}} replace/>
    )
}

export {RequiresAuth}