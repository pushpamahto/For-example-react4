import { Box, Heading ,Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


  

const Home = () => {
  const Navigate=useNavigate()
  const toast = useToast()
  function handleClcik(){
    toast({
      title: 'You are going About Page',
      description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    Navigate("/about")
  }
  return (
   <Box>
    <Heading as="h1" size="xl"  >
        Home Page
    </Heading>
    
   
       <Button colorScheme='blue' variant='solid' onClick={handleClcik}>
    Go to About page
  </Button>
      
    
   </Box>
  )
}

export default Home