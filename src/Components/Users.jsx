import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';



const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {  //Mount
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err)) //update
    },[]) //unmount 




    return (

        <div className='flex flex-col w-full max-w-lg min-h-screen  mx-auto bg-amber-200 shadow-md rounded-lg p-4 sm:p-6'>
         <div className='flex flex-col'>
               <h1 className=' text-center font-semibold text-5xl p-5'>Users</h1>

            {users.map((user) => {

                return (
                     <Link to={user.id .toString()} key={user.id} className='block text-blue-800  bg-amber-500 rounded-xl p-3 m-3 border-amber-500 border-b-2 hover:bg-amber-100 transition duration-300 '>
                        <div className=' p-2 text-center text-m lg:text-xl'>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </div>
                     </Link>



                
                );
               

            })}
         </div>

        </div>

    )

}



export default Users



