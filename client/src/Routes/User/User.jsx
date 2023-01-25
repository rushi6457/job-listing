import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Flex } from '@chakra-ui/react'
import axios from 'axios';

const getData =async () =>{

    let res = await axios.get('https://job-listing-app.onrender.com/admin/alljobs')
    // let data = await res.json()
  return res.data
}

const User = () => {

  const [data,setData] = useState([])
  useEffect(()=>{
    getData()
    .then((res)=>setData(res))
  },[])
  console.log(data);

    return (
        <div style={{marginTop:'2%'}}>
            <Heading marginBottom={'2%'}>User Dashboard</Heading>
        <SimpleGrid  width={'100%'} margin={'auto'} spacing={4} templateColumns='repeat(4,1fr)'>
        {
            data.map((el)=>{
    return (<Card padding={'30px'}>
                    <CardHeader>
                    <Heading size='md'> {`Position: ${el.position}`}</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text fontSize={'22px'}>{`Company: ${el.company_name}`}</Text>
                    </CardBody>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Text fontSize={'1.1rem'} >{`Location: ${el.location}`}</Text>
                            <Text fontSize={'1rem'}>{`Contract? :${el.contract}`}</Text>
                    </Flex>
                      <Text mt='2%'>{`Posted on: ${el.createdAt}`}</Text>
                      <Button mt='5%' variant={'solid'} colorScheme={'green'}>Apply</Button>
                </Card>)
            })
        }
  
</SimpleGrid>
        </div>
    );
}

export default User;
