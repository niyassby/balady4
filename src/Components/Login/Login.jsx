import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineEye, HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineEyeOff } from "react-icons/hi";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { supabase } from '../../Context/supabaseClient';

function Login() {

  const [showPass, setShowpass]= useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginerr, setLoginerr] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault()
    
    setLoginerr(false)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      return setLoginerr(true)
    }
    navigate("/admin");

  }


  return (
    <div className='w-full h-screen' >
      <div className='w-screen px-3 h-full flex flex-col items-center justify-center'>
      <div className=" w-[350px] max-sm:w-full  bg-white border border-gray-200 rounded-xl shadow-sm ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?
              <span className="block text-gray-300 pointer-events-none decoration-2 hover:underline focus:outline-none focus:underline font-medium" >
                Sign up here
              </span>
            </p>
          </div>

          <div className="mt-5">
            

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Signin</div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                  <div className="relative">
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" className={`py-3 px-4 block w-full border ${loginerr ? 'border-red-600' : 'border-gray-200'} rounded-lg text-sm focus:outline-main-700 `} placeholder='Email'/>
                    <div className={`absolute top-[50%] translate-y-[-50%] end-0 pointer-events-none pe-3 ${!loginerr && 'hidden'}`}>
                      <HiOutlineInformationCircle size={26} color='#dc2626' strokeWidth={1} />
                    </div>
                  </div>
                  {/* <p className={`text-xs text-red-600 ${!loginerr && 'hidden'} mt-2`}>Please include a valid email address</p> */}
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2">Password</label>
                    <Link className="inline-flex items-center gap-x-1 text-sm text-main-700 decoration-2 hover:underline focus:outline-none focus:underline font-medium" to="/reset">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <input onChange={(e)=>setPassword(e.target.value)} type={showPass ? "text" : "password"} id="password" name="password" className={`py-3 px-4 block w-full border ${loginerr ? 'border-red-600' : 'border-gray-200'} rounded-lg text-sm focus:outline-main-700`} placeholder='Password'/>
                    <div className={`absolute top-[50%] translate-y-[-50%] end-0 pointer-events-none pe-3 ${!loginerr && 'hidden'}`}>
                      <HiOutlineInformationCircle size={26} color='#dc2626' strokeWidth={1} />
                    </div>
                    <div onClick={()=>{setShowpass(!showPass)}} className={`absolute top-[50%] translate-y-[-50%] end-0 pe-3 cursor-pointer`}>
                      {showPass ? <HiOutlineEyeOff size={24} color='#2c2c2c' strokeWidth={1.2}/> :
                      <HiOutlineEye size={24} color='#07706c' strokeWidth={1.2}/>}
                    </div>
                  </div>
                  <p className={`text-xs text-red-600 mt-2 ${!loginerr && 'hidden'}`} id="password-error">Please include a valid email & password</p>
                </div>

                <div className="flex items-center">
                  <div className="flex">
                    <input id="remember-me" name="remember-me" type="checkbox"  className="shrink-0 mt-0.5 border-gray-200 rounded  checked:bg-main-800"/>
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm">Remember me</label>
                  </div>
                </div>

                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-main-800 text-white hover:bg-main-700 focus:outline-none focus:bg-main-700 disabled:opacity-50 disabled:pointer-events-none">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div onClick={()=>navigate(-1)} className='mt-3 text-gray-400 font-normal hover:text-gray-700 flex items-center gap-[2px] cursor-pointer justify-center'><MdKeyboardArrowLeft size={23} />Back to home</div>
      </div>
    </div>
  )
}

export default Login
