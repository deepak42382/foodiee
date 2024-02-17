import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected =({element})=>{
    const selector = useSelector((state)=>state.cart.cart);
    return selector.length>0? element : <Navigate to="/"/>
}
export default Protected;
