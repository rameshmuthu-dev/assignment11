import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"



const Navbar = () => {
    //const isOpen = false
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    //navbar active css class
    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'text-amber-600 border-b-2 border-amber-600 font-semibold transition duration-300'
            : 'text-black hover:text-amber-600 transition duration-300'

    //page redirect hook
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
        navigate('/login')
    }

    return (
        <nav className=' bg-amber-100 shadow-md sticky top-0 p-4 z-50 w-full '>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <div>
                    <NavLink to='/'>
                        <h1 className='text-amber-700 text-2xl'>Router</h1>
                    </NavLink>
                </div>

                <div>
                    <ul className='hidden md:flex gap-4 '>
                        <NavLink to={'/'} className={navLinkClass}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={'/products'} className={navLinkClass}>
                            <li>Products</li>
                        </NavLink>
                        <NavLink to={'/about'} className={navLinkClass}>
                            <li>About</li>
                        </NavLink>
                        <NavLink to={'/contact'} className={navLinkClass}>
                            <li>Contact</li>
                        </NavLink >
                        <NavLink to={'/users'} className={navLinkClass}>
                            <li>Users</li>
                        </NavLink >
                    </ul>

                </div>

                <button onClick={handleLoginClick} className='bg-amber-300 p-2 rounded-xl font-semibold hover:bg-amber-400 '>Login</button>


                <div className='md:hidden'>
                    <button onClick={(toggleMenu)}>{isOpen ? <X /> : <Menu />}</button>
                </div>


            </div>


            {/* mobile design */}

            {
                isOpen && (
                    <div className='md:hidden  '>
                        <ul className='p-2  gap-3 text-center '>
                            <NavLink to={'/'} className={navLinkClass}>
                                <li className='active-'>Home</li>
                            </NavLink>
                            <NavLink to={'/products '} className={navLinkClass}>
                                <li>Products</li>
                            </NavLink>
                            <NavLink to={'/about'} className={navLinkClass}>
                                <li>About</li>
                            </NavLink>
                            <NavLink to={'/contact'} className={navLinkClass}>
                                <li>Contact</li>
                            </NavLink>

                            <NavLink to={'/users'} className={navLinkClass}>
                                <li>Users</li>
                            </NavLink >
                        </ul>
                    </div>
                )
            }



        </nav >
    )
}

export default Navbar
