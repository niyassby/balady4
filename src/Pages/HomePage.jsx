import React, { useContext } from 'react'
import { AuthContext} from '../Context/Context'
import { Protect } from '../Context/Protect'
import { supabase } from '../Context/supabaseClient'


function HomePage() {
  const {user, setUser}=useContext(AuthContext)

  const logout = async ()=>{
    const { error } = await supabase.auth.signOut()
    if (error) alert(error.message)
    else {
  setUser(null)
      
    }
  }
  return (
    <>
        <div className='w-full py-5 bg-main-800 '>
          <div className='container mx-auto flex px-4 items-center justify-between'>
            <h1 className='font-bold text-2xl text-white'>Admin Dashboard</h1>
            {user && <button onClick={logout} className='bg-main-100 py-2 px-4 rounded-full text-main-800 font-medium hover:bg-main-600 hover:text-white' >LogOut</button>}
          </div>
        </div>
      <div className='container mx-auto' >
        <Protect/>
      </div>
    </>
  )
}

export default HomePage