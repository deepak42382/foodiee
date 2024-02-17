import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlices';
const Foodcard = ({name,rating,desc,price,img,id, handleToast}) => {
 const dispatch = useDispatch();
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
      <img src={img} alt="" className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 easy-in-out'/>
      <div className='flex justify-between'>
        <h2>{name}</h2>
        <span className="text-sm text-green-500">₹{price}</span>
      </div>
      <div className='text-sm font-normal'>
        {desc.slice(0,70)}
      </div>
      <div className='flex justify-between'>
        <span>
          ★  {rating}
        </span>
        <button onClick={()=>{
          dispatch(addToCart({id,name, price, rating, img, qty: 1}));
          handleToast(name);
        }} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg cursor:pointer'>add cart</button>
      </div>
    </div>
  )
}

export default Foodcard;