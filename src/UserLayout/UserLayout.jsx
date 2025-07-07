import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-100 p-4 md:p-8'>
            <div className='flex flex-col items-center mb-6   '>

                <h1 className='p-5 text-4xl text-amber-700 '>List of Users</h1>
                <p className='p-5 text-2xl'>Lorem ipsum dolor sit amet.</p>
                <Outlet />

            </div>
        </div>
    )
}

export default UserLayout
