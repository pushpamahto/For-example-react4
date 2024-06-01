import React from 'react'

import { useParams ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  StackDivider,
  HStack,
  
} from "@chakra-ui/react";
import { Container, Input, Textarea, VStack, Select} from "@chakra-ui/react";

import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";

const TicketEdit = () => {
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState({});
    const [err, setErr] = useState(false);
    const { id } = useParams();
    const navigate=useNavigate()

   // form state

    async function fetchAndUpdateData(id) {
        setLoading(true);
        try {
          let res = await axios({
            method: "get",
            url: ` http://localhost:3000/tickets/${id}`,
          });
          let data = res?.data;
          setLoading(false);
          setTicket(data);
        } catch (error) {
          setLoading(false);
          setErr(true);
        }
      }
      useEffect(() => {
        fetchAndUpdateData(id);
      }, [id]);
      async function handleEdit(){
        try {
            let updatedTicket={
                title:ticket.tittle,
                description:ticket.description,
                assignee:ticket.assignee,
                status:ticket.status,
                priority:ticket.priority  
            }
            let res = await axios({
                method: "put",
                url: ` http://localhost:3000/tickets/${id}`,
                data:updatedTicket,
              });
              if(res.status==201){
                navigate('/tickets')
              }
        } catch (error) {
            console.log(error)
        }
      }
      if(loading){
        return<LoadingIndicator/>
      }
      if(err){
        return <ErrorIndicator/>
      }
      const { title, description, status, assignee, priority } = ticket;
  return (
   
     <Container>
      <VStack spacing={8} my={4}>
        <Input
          placeholder="Enter Title"
          size="lg"
          value={title}
          onChange={(e) => {
            setTicket({
                ...ticket,
                title:e.target.value,
            });
          }}
        />
        <Textarea
          placeholder="Enter Description"
          size="lg"
          value={description}
          onChange={(e) => {
            setTicket({
                ...ticket,
                description:e.target.value,
            });
          }}
        />
        <Select placeholder="large size" size="lg" value={assignee} onChange={(e)=>{setTicket({
            ...ticket,
            assignee:e.target.value
        })}}>
          <option value="Lily">Lily</option>
          <option value="vijaya">Vijaya</option>
          <option value="sandy">Sandy</option>
          <option value="kajal">Kajal</option>
          <option value="rohini">Rohini</option>
        </Select>
        <Select placeholder="status" size="lg" value={status} onChange={(e)=>{setTicket({
            ...ticket,
            status:e.target.value,
        })}}>
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </Select>
        <Select placeholder="Priority" size="lg" value={priority} onChange={(e)=>{setTicket({
            ...ticket,
            priority:Number(e.target.value),
        })}}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
        <Button variant="outline" colorScheme="red" onClick={handleEdit}>Edit Ticket</Button>
      </VStack>
    </Container>
  
  )
}

export default TicketEdit