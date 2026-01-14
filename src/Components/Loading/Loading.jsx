import React, { useContext } from 'react'
import {Svg2} from '../Svg/svg'
import { AuthContext } from '../../Context/Context'

function Loading() {
    const {isLoading, setLoading}=useContext(AuthContext)
    if(isLoading){
        setTimeout(()=>{
            setLoading(false)
        }, 2500)
        return (
          <div className='w-full h-screen grid place-content-center fixed inset-0 bg-white z-[999999]' >
              <div className='animate-bounce' >
                  <Svg2 color={false}/>
              </div>
          </div>
        )
    } else {
        return null
    }
}

export default Loading
