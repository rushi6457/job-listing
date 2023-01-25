import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types"

const token = JSON.parse(localStorage.getItem("token"))
const initState = {
    isAuth:!!token,
    isError:false,
    token:token,
    isLoading:false,
    isRegister:false    ,
    isRegisterLoading:false,
    isRegisterError:false,
    role:''
}

export const reducer = (state = initState,{type,payload}) =>{

    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
                isAuth:false,
                token:''
            }    
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",JSON.stringify(payload))
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload,
                isAuth:true,
            
            }
        }

        case LOGIN_FAIL:{
            return{
                ...state,
                isAuth:false,
                isError:true,
                isAuth:false,
                token:''
            }
        }
        case LOGOUT:{
            localStorage.removeItem("token")
            return {
                   ...state,
                   isAuth:false,
                   token:'',
                 
             }
         }
   
        case REGISTER_REQUEST:{
            return {
                ...state,
                isRegister:false,
                isRegisterError:false,
                isRegisterLoading:true
            }
        }

        case REGISTER_SUCCESS:{
            return {
                ...state,
                isRegister:true,
                isRegisterError:false,
                isRegisterLoading:false,
                role:payload
        }
    }

    case REGISTER_FAIL:{
        return {
            ...state,
            isRegister:false,
            isRegisterError:true,
             isRegisterLoading:false
        }
    }
        default:{
            return state
        }
    }
}