import React, { useEffect, useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import UserList from './UserList';
import { TiDocumentAdd } from "react-icons/ti";

function Admin() {
  const [search, setSearch]=useState('')
  const [debounce, setDebounce] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search)
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);
  const navigate=useNavigate()
  return (
    <div className='w-full min-h-screen mt-3 px-3' >

      {/* TopBar With Search */}
      <div className='w-full max-md:flex-col max-md:gap-y-3 flex justify-between items-center py-2 mt-10 '>
          <div className='w-full md:max-w-[600px] flex items-center gap-6'>
              <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <LuSearch color='#6b7280' size={20} strokeWidth={1.5} />
                  </div>
                  <input onChange={(e)=>setSearch(e.target.value)} type="search" id="default-search" className="w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-200" placeholder="Search" required />
              </div>
          </div>
          <button onClick={()=>navigate('add')} className=' bg-main-800 hover:bg-main-900 text-white py-2 px-6 max-md:w-full  font-medium  rounded-full min-w-28 h-full flex items-center justify-center gap-1 hover:ring-2 hover:ring-main-100'>Add Doc <TiDocumentAdd size={20} /> </button>
      </div>

      <div className='mt-10'>
      <UserList search={debounce} />
      </div>
    </div>
  )
}

export default Admin
