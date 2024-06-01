import { Box, Heading ,Input,Button,VStack,Container } from '@chakra-ui/react'
import React,{useState,useContext} from 'react'
import axios from 'axios'
import {AuthContext} from "../context/AuthContext"
import { Navigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const{login,authDetails: {isLoggedIn}}=useContext(AuthContext)

  async function handleClick(){
    try {
      let res=await axios({
        method:'post',
        url:'https://reqres.in/api/login',
        data:{
          email,
          password,
        },
      })
      login(res?.data?.token);
    
    } catch (error) {
      
    }
  }
  if(isLoggedIn){
    return <Navigate to="/" />
  }
  return (
    <Container maxW="600px">
   <VStack spacing={6}>
    <Heading as="h1" size="xl">
        Login Page
    </Heading>
    <Input placeholder='Email' type='email' value={email} onChange={(e)=>{
      setEmail(e.target.value)
    }} />
    <Input placeholder='Password' type='password' value={password} onChange={(e)=>{
      setPassword(e.target.value)
    }} />
    <Button variant="outline" colorScheme='green' onClick={handleClick}>Login</Button>
   </VStack>
   </Container>
  )
  
}

export default Login