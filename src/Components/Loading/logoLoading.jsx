import React from 'react'
import logo from '../../assets/Image/logo.svg'

function Logoloding() {
    return(
        <div className='w-full h-screen flex items-center justify-center fixed inset-0 bg-white z-[999999]' >
                  <img className='w-52 mb-5' src={logo} alt="" />
              
          </div>
    )
}

export default Logoloding
