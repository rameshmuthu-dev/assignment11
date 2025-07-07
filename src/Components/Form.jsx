import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //alert message
        alert('Your message has been sent')
          
        //Reset form
        e.target.reset();
        //Redirect to contact page
        navigate('/contact');
    }
    return (
        <div className='p-8 bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl'>

            <div className='bg-amber-100 bg-opacity-20  p-8 rounded-xl shadow-neumorphic-base'>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder='Enter Name' className='w-full p-3 rounded-xl bg-amber-100 border border-opacity-40 border-amber-200  shadow-inner
                        focus:ring-opacity-60  text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300 ease-in-out' required />
                    </div>
                    <div>
                        <input type="email" className='w-full p-3 rounded-xl bg-amber-100 border border-opacity-40 border-amber-200 shadow-inner 
                        focus:ring-opacity-60  text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300 ease-in-out' placeholder='Enter Email' required/>
                    </div>

                    <div>
                        <textarea className='w-full p-3 rounded-xl bg-amber-100 border border-opacity-40 border-amber-200 shadow-inner 
                        focus:ring-opacity-60  text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300 ease-in-out'  placeholder='Type Your Message ' required></textarea>
                    </div>
                    <button className=' w-full border-2 border-amber-300 border-opacity-60  p-2 rounded-xl bg-amber-100 bg-opacity-70  backdrop-blur-2xl shadow-inner  hover:bg-opacity-40 hover:border-amber-500 transition-all duration-300 ease-in-out'>Send Message</button>
                </form>

            </div>
        </div>

    )
}

export default Form
