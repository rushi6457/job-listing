
import React from 'react';
import { useSelector } from 'react-redux';
import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
   const isAuth = useSelector(store=>store.auth.isAuth)
    console.log(isAuth)
    let {pathname} = useLocation()
    if(isAuth){
        return children
    }
    else{
      return ( <Navigate 
        to="/login"
        state= {{from:pathname}}
        replace
        />)
    }
   
}

export default PrivateRoute;