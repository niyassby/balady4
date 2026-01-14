import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/NavBar/Footer'
import Button from '../Components/NavBar/Button'
import logo from "../assets/Image/blurImg1.svg";

function UserPage() {
  return (
    <div className='bg-[#e9eaec]'> 
    <Navbar/>
    <Button/>
    <div style={{backgroundImage: "linear-gradient(220deg, #000 30.33%, #389492 83.58%)"}}  className='w-full bg-no-repeat  h-[450px] absolute  z-0 top-0  overflow-hidden '>
      <img src={logo} className='absolute -left-40  max-w-2xl w-full blur-sm opacity-10' alt="" />
      <img src={logo} className='absolute -right-40 top-12 max-w-sm w-full blur opacity-50' alt="" />
    </div>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default UserPage
