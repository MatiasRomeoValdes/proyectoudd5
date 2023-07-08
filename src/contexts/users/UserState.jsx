import UserReducer from "./UserReduce"

const UserState = (props) => {
    const initialState = {
        user: {
            id: null,
            fullName: null,
            email: null
        },
        authStatus: false
    
    }
    const [globalState, dispatch] = UserReducer(UserReducers, initialState)
    const registerUser = async (dataForm) => {
        try {
            const res = await fetch("http://local:5173/auth/signup", {method: 'POST', headers: {"Content-type": 'application/json', "Accept": 'application/json' }, body: JSON.stringify(dataForm)})
            const payLoad = await res.json()
        dispatch( {type: "REGISTRO_EXITOSO",
        payLoad: payLoad}) 
            
        }catch (error) {

            }
        }
    }
    const loginUser = async (dataForm) => {
        try {
            const res = await fetch("http://local:5173/auth/login", {method: 'POST', headers: {"Content-type": 'application/json', "Accept": 'application/json' }, body: JSON.stringify(dataForm)} )
            const payLoad = await res.json()
        dispatch( {type: "LOGIN_EXITOSO",
        payLoad: payLoad}) 
            
        }catch (error) {

            }
        }


return (
    <UserContext.Provider value={ {...globalState, registerUser, loginUser}}>
        {props.children}
    </UserContext.Provider>
)

export default UserState