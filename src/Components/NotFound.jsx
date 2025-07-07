import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center bg-gray-100  '>
            <h1 className=' text-center font-semibold text-5xl mb-5'>404 | Page Not Found</h1>
            <Link to="/" className='bg-amber-400 p-3 rounded-xl hover:bg-amber-600'>Go to Home Page</Link>
        </div>
    )
}

export default Home
