import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Reset() {
    const [email, setEmail]=useState('')
    const [massage, setMassage]=useState('')
    const [error, setError]=useState(false)
    const navigate=useNavigate()

    const handleReset = async(e)=>{
        e.preventDefault();
        try{
            setMassage('Password reset email sent! Check your inbox.')
            setTimeout(()=>{
                setMassage('')
            }, 3000)
        }catch(err){
            console.log(err);
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
        }
    }
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
        <div className="sm:w-[380px] w-full mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800">Forgot password?</h1>
                <p className="mt-2 text-sm text-gray-600">
                    To change your password enter your email here
                </p>
                </div>

                <div className="mt-5">
                <form onSubmit={handleReset}>
                    <div className="grid gap-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                        <div className="relative">
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:outline-main-700" required />
                        </div>
                        {massage && <p className="text-xs text-main-800 mt-2" >{massage}</p>}
                        {error && <p className="text-xs text-red-600 mt-2" >Please include a valid email address so we can get back to you</p>}
                    </div>

                    <button type='submit' className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-main-700 text-white hover:bg-main-800 focus:outline-none focus:bg-main-700">Reset password</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div onClick={()=>navigate(-1)} className='mt-3 text-gray-400 font-normal hover:text-gray-700 flex items-center gap-[2px] cursor-pointer justify-center'><MdKeyboardArrowLeft size={23} />Back to login</div>
    </div>
  )
}

export default Reset