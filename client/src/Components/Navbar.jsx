import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Navbar.css"
import { Button,Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { logout } from '../redux/auth/actions';
import { useEffect } from 'react';
const Navbar = () => {
    const navigate= useNavigate()
      const isAuth = useSelector(store=>store.auth.isAuth)
    console.log(isAuth);
    const dispatch = useDispatch()
    const handleClick = () =>{
       
            if(isAuth){
                dispatch(logout())
                navigate("/login")
            }
            
      
    }
    return (
        <div>
            <div className='navbar' style={{display:"flex",justifyContent:"space-between",fontSize:"25px",padding:'20px',alignItem:"center"}}>
            <Link  to={'/'}>
                 <Image width='150px'  src="https://www.masaischool.com/img/navbar/logo.svg"></Image>
            </Link>
            <div style={{display:"flex",justifyContent:"space-between",gap:'20px'}}>
            <Link  to={'/signup'}>
                <Button colorScheme='red' variant='solid'>SIGNUP</Button>
            </Link>
            <Link  to={'/login'}>
               <Button colorScheme='red' variant='outline' onClick={handleClick}>{isAuth ? "LOGOUT" : "LOGIN"}</Button>
            </Link>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
