import { useState } from "react";
import { IoMdClose } from "react-icons/io"
import { useSelector } from "react-redux"
import Itemscard from "./Itemscard"
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Cart =()=>{
const selector = useSelector((state)=>state.cart.cart);
const [activeCart, setactiveCart] = useState(false);
const totalQty = selector.reduce((totalQty,item)=>totalQty+item.qty,0);
const totalPrice = selector.reduce((total,item)=>total+item.qty*item.price,0)
const navigate = useNavigate();
    return(
        <>
        <div className={`top-0 fixed right-0 w-full lg:w-[20vw] h-full bg-white p-5 mb-3 ${activeCart?"translate-x-0" : "translate-x-full"} transition-all duration-500`}>
            <div className="flex justify-between my-6">
                <span className="text-xl font-bold text-gray-600">
                My Order
                </span>
             <IoMdClose onClick={()=>setactiveCart(!activeCart)} className="border-2 border-gray-600 rounded-md text-lg hover:border-red-300 cursor-pointer"/>
            </div>
            {
               selector.length>0 ? selector.map((food)=>{
                    return <Itemscard key={food.id} id ={food.id} name ={food.name} price={food.price} img={food.img} qty={food.qty}/>
                }) : <h2 className="text-center text-gray-500 text-xl">This cart is empty</h2>
            }
            
            <div className="absolute bottom-0">
            <h3 className="text-gray-500 font-semibold">Items: {totalQty}:</h3>
            <h3 className="text-gray-500 font-semibold">Total: {totalPrice}</h3>
            <hr />
            <button onClick={()=>navigate("/success")} className="bg-green-600 text-white rounded-lg w-[90vw] lg:w-[18vw] font-bold mb-5">Checkout</button>
        </div>
        </div>
        <PiShoppingCartFill onClick={()=>setactiveCart(!activeCart)} className={`text-4xl rounded-full bg-white cursor-pointer fixed bottom-7 right-4 shadow-md ${totalQty>0&&"animate-bounce duration-500"}`}/>
        </>
    )
}
export default Cart