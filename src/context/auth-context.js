import { createContext, useReducer } from "react";
import { loginUserService } from "../services/auth-services";
import { reducerFunc } from "../utils/reducer";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [stateAuth, dispatch] = useReducer(reducerFunc, {
        token:JSON.parse(localStorage.getItem('login'))?.token,
        user:JSON.parse(localStorage.getItem('login'))?.user
    })

    const loginUser = async({email, password})=>{
        try{
            const response = await loginUserService({email, password})
            dispatch({type:'LoginUser', payload: response.data })
            localStorage.setItem('login', JSON.stringify({
                    token: response.data.encodedToken,
                    user: response.data.foundUser
                }))
            
        }catch(err){
            console.error(err)
        }
    }
    return(
    <AuthContext.Provider value={{stateAuth, dispatch, loginUser}}>
        {children}
    </AuthContext.Provider>
    )
}
    
   

export {AuthContext, AuthProvider}