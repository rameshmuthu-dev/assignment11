import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Info from './Components/info'
import Form from './Components/Form'
import NotFound from './Components/NotFound'
import UserLayout from './UserLayout/UserLayout'
import Users from './Components/Users'
import User from './Components/User'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* nested route for contact page in info and form */}
        <Route path='/contact' element={<Contact />} >
          <Route path='info' element={<Info />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* nested route for users details */}
        <Route path='users' element={<UserLayout />} >

          <Route index element={<Users />} />
          <Route path=':id' element={<User />} />
        </Route>


      </Routes>
    </div>

  );
}

export default App;
