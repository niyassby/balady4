import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/Context'
import Navbar from '../Components/NavBar/Navbar'

function MainPage() {
  const {user}=useContext(AuthContext)
  return (
    <>
    <Navbar/>
    <div className='w-full h-screen flex flex-col items-center justify-center' >
      <h1 className='font-bold text-xl text-main-800 '>Plece login to admin page</h1>      
      {user ? (
        <Link to='/admin' className='bg-main-800 py-2 px-4 rounded-md mt-3 text-white'>Admin Page</Link>
        ) : (
          <Link to='/login' className='bg-main-800 py-2 px-4 rounded-md mt-3 text-white'>Loging</Link>
      )
      }
    </div>
    </>
  )

}

export default MainPage
