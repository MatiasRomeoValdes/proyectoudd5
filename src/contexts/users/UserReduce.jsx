const reducers = (globalState, action) => {
    const {type, payLoad} = action
     switch (type) {
        case "LOGIN_EXITOSO":
            localStorage.setItem( "token", payLoad.token) 
            return {
                ...globalState,
                authStatus: true
            }
case "REGISTRO_EXITOSO":
    localStorage.setItem( "token", payLoad.token)
    return {
        globalState,
        authStatus: true
    }
    default:
        return globalState
     
    } 

}
export default UserReducer
