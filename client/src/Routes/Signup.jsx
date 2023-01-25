import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { register } from '../redux/auth/actions';
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
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Signup = () => {
    const dispatch = useDispatch()
    const store = useSelector((store)=>store.auth)
  
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const handleChange = (event) => {
    const {name,value} = event.target
    setUser({
      ...user,
      [name]: value
    })
  }

  
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(register(user))
    }

 useEffect(()=>{
     if(store.isRegister){
        navigate("/login")
    }
 },[store.isRegister])
    
    return (
  <form onSubmit={handleSubmit}>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('grey.200', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    
         <Box margin={'auto'}>
            <Image width='200px' mt='70px' src='https://www.masaischool.com/img/navbar/logo.svg'></Image>
         </Box>
        
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} w='sm' mt='-60px'>
                     <Stack align={'center'}>
                     <Heading fontSize={'3xl'}>Signup</Heading>
                 </Stack>
                 <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input onChange={handleChange} value={user.name} name="name" type={"text"}  />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange} value={user.email} name="email" type={"text"}  />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={handleChange} value={user.password} name="password" type={"text"}  />
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
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
       
        </form>
    );
}

export default Signup;
