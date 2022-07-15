import axios from "axios"

export const loginUserService = ({email, password})=>{
    return axios.post('api/auth/login',{email, password})
}