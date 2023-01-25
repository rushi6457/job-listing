import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react';
const getData =async () =>{

    let res = await axios.get('https://job-listing-app.onrender.com/admin/alljobs')
    // let data = await res.json()
  return res.data
}
const AdminJobList = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    getData()
    .then((res)=>setData(res))
  },[])
  console.log(data);
    return (
        <div>
<TableContainer mt='1%' marginBottom={'2%'}>
       <Heading>All Jobs</Heading> 
  <Table size='lg' >
    <Thead>
      <Tr >
        <Th fontSize={'20px'}>Company Name</Th>
        <Th fontSize={'20px'}>Location</Th>
        <Th  fontSize={'20px'}>Contract</Th>
        <Th  fontSize={'20px'}>Position</Th>
        {/* <Th >Delete Job</Th>
        <Th >Edit Job</Th> */}
      </Tr>
    </Thead>
      {
        data?.map((el)=>{
    return ( <Tbody>
      <Tr >
        <Td fontSize={'20px'}>{el.company_name}</Td>
        <Td fontSize={'20px'}>{el.location}</Td>
        <Td  fontSize={'20px'}>{el.contract}</Td>
        <Td  fontSize={'20px'}>{el.position}</Td>
        {/* <ButtonGroup>
          <Button>Delete</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Edit</Button>
        </ButtonGroup> */}
      </Tr>
    
    </Tbody>)
        })
      }
 
  </Table>
</TableContainer>
        </div>
    );
}

export default AdminJobList;
