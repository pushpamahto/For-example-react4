import {Button ,Box ,Card, CardHeader, CardBody, CardFooter ,Heading,Stack,Text,StackDivider} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
//title,status,priority

export default function TicketCard({id,title,status,priority}){
    const navigate=useNavigate()
    return(
      <Card>
    <CardHeader>
      <Heading size='md'>{title}</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
            status
          </Heading>
          <Text pt='2' fontSize='sm'>
           {status}
          </Text>
        </Box>
        <Box>
          <Heading size='xs' textTransform='uppercase'>
          priority
          </Heading>
          <Text pt='2' fontSize='sm'>
           {priority}
          </Text>
        </Box>
        
      </Stack>
    </CardBody>
    <Button variant='outline' colorScheme='blue' width="23%"
    onClick={()=>{navigate(`/ticket/view/${id}`)}}>
        View Ticket
      </Button>
  </Card>
    )
  }