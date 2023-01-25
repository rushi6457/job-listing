import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { login } from '../redux/auth/actions';

const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(store=>store.auth.token.role)
      console.log(isAuth);
    const [user,setUser] = useState({})
  
    const navigate = useNavigate()
    const handleChange = (event) => {
        const {name,value} = event.target;
        setUser({
            ...user,
            [name]:value
        })
  }
 
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(user))

    }

    if(isAuth ==  "Admin"){
        navigate("/admin")
    }
    else if(isAuth ==  "User"){
        navigate("/user")
    }


    return (
<form onSubmit={handleSubmit}  className='form'>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('grey.200', 'blue.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={6}>
        <Stack align={'center'}>
            <Image width='200px' mt='20%' src="https://www.masaischool.com/img/navbar/logo.svg"></Image>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'pink.700')}
          boxShadow={'lg'}
          p={12}>
          <Stack spacing={4} >
            <Heading fontSize={'3xl'}>Signin </Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange}  name="email" type={"text"}  />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={handleChange}  name="password" type={"text"}  />
            </FormControl>
            <Stack spacing={2}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
                type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
              Signin
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        
        </form>
    );
}

export default Login;
