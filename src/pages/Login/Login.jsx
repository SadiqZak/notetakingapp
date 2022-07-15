import React, {useContext, useState} from 'react'
import { AuthContext } from '../../context/auth-context'

const Login = () => {
    const [userLog, setUserLog] = useState({email:"", password:""})
    const {loginUser} = useContext(AuthContext)

    const submitHandler = (e)=>{
        e.preventDefault()
        loginUser({email:userLog.email, password: userLog.password})
    }

  return (
    <div>
        <form onSubmit={submitHandler} action="submit">
            <label>Email:</label>
            <input type="email" onChange={(e)=>setUserLog({...userLog, email:e.target.value})}/>
            <label>Password:</label>
            <input type="password" onChange={(e)=>setUserLog({...userLog, password:e.target.value})} />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login