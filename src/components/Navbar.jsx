import React from 'react'
import { setSearch } from '../redux/slices/SearchSlice'
import { useDispatch} from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10'>
        <div>
        <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className='text-bold text-2xl'>food</h1>
        </div>
        <div >
        <input className=' "p-3 border border-gray-400 text-lg rounded-lg outline-none w-full lg:w-[25vw]' type="search" placeholder='search here' onChange={(e)=>dispatch(setSearch(e.target.value))} autoComplete='off'/>
        </div>
    </div>
  )
}

export default Navbar