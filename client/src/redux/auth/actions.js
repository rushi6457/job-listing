import { LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from "./types"
import axios from "axios";

export const login = (creds) => async(dispatch) =>{
        dispatch({type:LOGIN_REQUEST})

        try {
            
            let res = await axios.post("https://auth-backend-6ld3.onrender.com/user/login",creds)

            dispatch({type:LOGIN_SUCCESS,payload:res.data})
        } catch (error) {
            dispatch({type:LOGIN_FAIL,payload:error})
        }
}

export const logout = () =>({type:LOGOUT})

export const register = (creds) =>async(dispatch) =>{
    dispatch({type:REGISTER_REQUEST})

    try {
        
        let res = await axios.post("https://auth-backend-6ld3.onrender.com/user/signup",creds)
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
            console.log(res);
    } catch (error) {
        dispatch({type:REGISTER_FAIL,payload:error})
    }
}