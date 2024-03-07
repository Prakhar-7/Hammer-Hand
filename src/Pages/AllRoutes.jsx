import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../Components/NavbarFooter/Footer'

import Home from './Allpage/Home'
import AllServices from './AllServices/AllServices'
import Final from './Blog/Final'
import About from './Allpage/About'
import Signin from './shubham/LoginSignin/Signin'

import SingleService from './Allpage/SingleService'
import Haircare from './Blog/Haircare'

import Summary from './Blog/Summary'
import { Secpay } from './shubham/Sec_payment'
import Booking from './Allpage/Booking'

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/allservices" element={<AllServices/>}/>

            <Route path="/login" element={<Signin/>}/>
            <Route path="/booking" element={<Booking/>}/>

            <Route path="/login" element={<Home/>}/>
            <Route path="/signup" element={<Signin/>}/>

            <Route path="/blog" element={<Final/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<SingleService/>}/>
            <Route path="/haircare" element={<Haircare/>}/>
            <Route path="/cart" element={<Summary/>}/>
            <Route path="/payment" element={<Secpay/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes