import React  from 'react'
import {   useAuth } from './Context'
import { Navigate, Outlet } from 'react-router-dom'


export function Protect({}) {

    const {user}=useAuth()

    if(user){
        return <Outlet/>
    } else{
        return <Navigate to='/'/>
    }
    
}



