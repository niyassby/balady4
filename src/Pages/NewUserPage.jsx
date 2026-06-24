import React, { useEffect, useState } from 'react'
import Navebar from '../Components/new design/Navebar'
import Navbar2 from '../Components/new design/Navbar2'
import Footer from '../Components/new design/Footer'
import View from '../Components/View/View'

function NewUserPage() {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='ibm-plex-sans-arabic font-medium'>
      <div className={`contents md:block transition-all duration-300 ease-in-out ${scroll ? 'md:sticky md:top-0 md:z-50' : 'relative'}`}>
        <Navebar />
        <div className={`transition-all duration-300 ease-in-out ${scroll ? 'sticky top-0 z-50 md:relative md:top-auto md:z-auto' : 'relative'}`}>
          <Navbar2 />
        </div>
      </div>
      <View />
      <Footer />
    </div>
  )
}

export default NewUserPage