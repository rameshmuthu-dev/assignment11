import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (

    <div className='flex h-screen justify-center items-center'>
      <div>
        <h1 className='text-4xl font-semibold text-center p-2'>Contact </h1>
        <div className='flex justify-between mt-3 gap-5'>
          <button onClick={() => navigate("info")} className='text-xl   w-full border-2  border-amber-300 border-opacity-60  p-2 rounded-xl bg-amber-400 bg-opacity-70  backdrop-blur-2xl shadow-inner  hover:bg-opacity-40 hover:border-amber-500 cursor-pointer transition-all duration-300 ease-in-out'>Information</button>
          <button onClick={() => navigate("form")} className=' text-xl border-2 w-full border-amber-300 border-opacity-60  p-2 rounded-xl bg-amber-400 bg-opacity-70  backdrop-blur-2xl shadow-inner  hover:bg-opacity-40 hover:border-amber-500 transition-all cursor-pointer duration-300 ease-in-out '>Form</button>
        </div>
        {/* Outlet for rendering nested components */}
        <div className='mt-10 w-full max-w-3xl'>
          <Outlet />
        </div>
      </div>
    </div>


  )
}

export default Contact
