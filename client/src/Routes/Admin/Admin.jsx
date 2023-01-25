import React, { useState } from 'react';
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Admin = () => {

    const [details,setDetails] = useState({
        comp:'',
        position:'',
        contract:'',
        location:'',
        // url:''
    })
    const navigate = useNavigate()
    const handleChange=(e) =>{

        const {name,value} = e .target;

        setDetails({
            ...details,
            [name]:value
        })
    }

const handleSubmit =async (e) =>{
    e.preventDefault()

    let res = await axios.post(`https://job-listing-app.onrender.com/admin/job`,details)
    // let data = await res.json()
    navigate("/admin/adminjoblist")
    return res.data
    }
    console.log(details);
    return (
        <form onSubmit={handleSubmit}>

       {/* <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={2} w={'full'} maxW={'sm'}>
          <Heading mt='70px' fontSize={'4xl'}>Add Job</Heading> 
              <FormControl id="comp">
              <FormLabel>Company Name</FormLabel>
              <Input value={details.comp} name='comp' onChange={handleChange} type="text" />
            </FormControl>
            <FormControl id="position">
              <FormLabel>Position</FormLabel>
              <Input value={details.position}  name='position'onChange={handleChange} type="text" />
            </FormControl>
               <FormControl id="contract">
              <FormLabel>Contract</FormLabel>
              <Input value={details.contract} name='contract' onChange={handleChange} type="boolean" />
            </FormControl>
              <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input value={details.location} name="location" onChange={handleChange} type="text" />
            </FormControl>
             <FormControl id="url">
              <FormLabel>Company Image</FormLabel>
              <Input value={details.url} name="url" onChange={handleChange} type="text" />
            </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
             
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              POST JOB
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack> */}


    <Flex
    
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={6}>
               <Stack align={'center'} >
                 <Heading mt='100px' fontSize={'4xl'}>Add Job</Heading> 
             </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          
          <Stack spacing={2}  w='sm' mt='0px' >
               
            <FormControl id="comp">
              <FormLabel>Company Name</FormLabel>
              <Input value={details.comp} name='comp' onChange={handleChange} type="text" />
            </FormControl>
            <FormControl id="position">
              <FormLabel>Position</FormLabel>
              <Input value={details.position}  name='position'onChange={handleChange} type="text" />
            </FormControl>
               <FormControl id="contract">
              <FormLabel>Contract</FormLabel>
              <Input value={details.contract} name='contract' onChange={handleChange} type="boolean" />
            </FormControl>
               <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input value={details.location} name="location" onChange={handleChange} type="text" />
            </FormControl>
            <Stack spacing={10}>
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
               Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </form>
    );
}

export default Admin;
