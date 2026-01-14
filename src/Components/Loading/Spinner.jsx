import React from 'react'

function Spinner() {
  return (
    <div className='w-full h-full   grid place-content-center z-50' >
        <span className="rounded-full size-10 border-4 border-teal-800 border-b-transparent animate-spin"></span>
    </div>
  )
}

export default Spinner