import { Routes,Route ,Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import Tickets from "../Pages/Tickets";
import TicketView from "../Pages/TicketView";
import CreateTicket from "../Pages/CreateTicket";
import TicketEdit from "../Pages/TicketEdit";
export default function AllRoutes(){
    return(
        <Routes>
           {/* private pages */}
            <Route path="/" element={
                <PrivateRoutes>
                    <Home/>
                </PrivateRoutes>
            
            }/>
            <Route path="/about" element={
                <PrivateRoutes>
                    <About/>
                </PrivateRoutes>
            
            }/>
            <Route path="/contact" element={
                <PrivateRoutes>
                     <Contact/>
                </PrivateRoutes>
           
            }/>

            
            <Route path="/tickets" element={
                <PrivateRoutes>
                    <Tickets/>
                </PrivateRoutes>
            }/>
            <Route path="/ticket/create" element={
                <PrivateRoutes>
                    <CreateTicket/>
                </PrivateRoutes>
            }/>
             <Route path="/ticket/view/:id" element={
                <PrivateRoutes>
                    <TicketView/>
                </PrivateRoutes>
            }/>
             <Route path="/ticket/edit/:id" element={
                <PrivateRoutes>
                    {/* <h2>ello</h2> */}
                    <TicketEdit />
                </PrivateRoutes>
            }/>
            {/* Public page */}
            <Route path="/login" element={<Login/> }/>
            
        </Routes>
    )
} 