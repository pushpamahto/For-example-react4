import React from "react";
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
import LoadingIndicator from "../component/LoadingIndicator";
import ErrorIndicator from "../component/ErrorIndicator";

const TicketView = () => {
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState({});
  const [err, setErr] = useState(false);
  const { id } = useParams();
  const navigate=useNavigate()
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
 function handleEdit(){
    console.log("why not working>>???")
    navigate(`/ticket/edit/${id}`)
    return 
 }
  async function deleteTicket(){
    try {
        let res=await axios({
            method:"delete",
            url:` http://localhost:3000/tickets/${id}`,
        })
        if(res.status==200){
            navigate("/tickets")
        }
    } catch (error) {
       console.log(error) 
    }
  }
  if (loading) {
    return <LoadingIndicator />;
  }
  if (err) {
    return <ErrorIndicator />;
  }
  const { title, description, status, assignee, priority } = ticket;
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                status
              </Heading>
              <Text pt="2" fontSize="sm">
                {status}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Assignee
              </Heading>
              <Text pt="2" fontSize="sm">
                {assignee}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
            <HStack spacing={4}>
          <Button
            variant="outline"
            colorScheme="blue"
            width="40%"
            onClick={handleEdit}
          >
            Edit Ticket
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            width="40%"
            onClick={deleteTicket}
          >
            Delete Ticket
          </Button>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
};

export default TicketView;
