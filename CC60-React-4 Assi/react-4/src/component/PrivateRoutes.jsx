import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
 function PrivateRoutes({children}){
    const{authDetails}=useContext(AuthContext)
    
    if(!authDetails?.isLoggedIn){
        return <Navigate to="/login"/>
    }
    return children
}
export default PrivateRoutes