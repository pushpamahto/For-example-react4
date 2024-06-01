
import {Link as ReactRouterLink} from "react-router-dom"
import {Button, Link as ChakraLink,Flex} from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
//links create Home,about contact login

const links=[
    {
        to:"/",
        label:"Home"
    },
    {
        to:"/about",
        label:"About"
    },
    {
        to:"/contact",
        label:"Contact"
    },
    {
        to:"/login",
        label:"Login"
    },
   
    {
        to:"/tickets",
        label:"Tickets"
    },
    

]

//LINK  is an anchor tag, that can be seen in UI
//Navigate, useNavigate => windown.location.href

export default function Navbar(){
    const {logout}=useContext(AuthContext)
    return(
        <Flex align="center" justify="space-around" background="teal" color="gray.900" fontWeight="bold" fontFamily="sans-serif" p={4}   >
        {links ?.map((link)=>(
            <ChakraLink  as={ReactRouterLink} key={link.to} to={link.to}>
            {link.label}
          </ChakraLink>
                
            
        ))}
        <Button variant="outline" color="orange" onClick={logout}>LOGOUT</Button>
        </Flex>
    )
}