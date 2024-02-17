import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodData from '../fooddata/FoodData';
import { setCategory } from '../redux/slices/CategorySlice';



const Categorymenu = () => {
  const[categories,setCategories] = useState([]);
  const uniqueList = ()=>{
    const uniqueCategories = [
      ...new Set(FoodData.map((food)=> food.category))]
    
    setCategories(uniqueCategories);
  };
  useEffect(()=>{
    uniqueList();
  },[]);
  const dispatch = useDispatch();
  const selectedtCategory = useSelector((state)=>state.category.category);
  return (
    <div className='ml-6'>
        <h3 className='text-lg font-semibold'>find the best food</h3>
        <div className='my-5 flex gap-3 overflow-x-auto scroll-smooth'>
        <button onClick={()=>dispatch(setCategory("All"))} className='px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white'>All</button>
            {categories.map((category,index)=>{
              return(
                <button key={index} onClick={()=>dispatch(setCategory(category))} className='px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white'>{category}</button>
              )
            })}
        </div>
    </div>
  )
}
// onClick={()=>dispatch(setCategory(category))} 

export default Categorymenu;