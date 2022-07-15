const reducerFunc = (state, action)=>{
    switch(action.type){
        case "initial state":
            return
        case "LoginUser":
            return{
                ...state,
                token: action.payload.encodedToken,
                user: action.payload.foundUser
            }
        default:
            return state
    }
}

export {reducerFunc}