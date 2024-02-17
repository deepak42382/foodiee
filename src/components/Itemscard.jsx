import React from 'react'
import toast from 'react-hot-toast';
import { AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeToCart , decrementQty,incrementQty} from '../redux/slices/CartSlices';
const Itemscard = ({img,name,price,qty,id}) => {
    const dispatch =useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdDelete onClick={()=>{
            dispatch(removeToCart({img,name,price,qty,id}));
            toast(`${name} Removed!`,{
                icon: "👋",
            });
        }} className='absolute right-7 text-gray-600 cursor-pointer'/>
        <img src={img} alt="" className='w-[50px] h-[50px]' />
        <div>
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div >
                <div className='flex justify-between'>
                    <span className='text-green-500 font-bold'>₹{price}</span>
                    <div className='flex justify-center items-center absolute right-7'>
                        <AiOutlineMinus onClick={()=>qty>1 ? dispatch(decrementQty({id})): qty=0} className='className-"border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover: border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                        <span>{qty}</span>
                        <AiOutlinePlus onClick={()=>dispatch(incrementQty({id}))} className='className-"border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover: border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Itemscard