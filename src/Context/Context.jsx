import {createContext, useContext, useEffect, useState} from 'react'
import { supabase } from '../Context/supabaseClient'

export const AuthContext = createContext(null)

export default function Context({children}){
    const [user, setUser]= useState(null)
    const [isLoading, setLoading]= useState(false)

    useEffect(() => {
      // Check active sessions and sets the user
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null)
      })
  
      // Listen for changes on auth state
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
      })
  
      return () => subscription.unsubscribe()
    }, [])

    return(
        <AuthContext.Provider value={{user, setUser, isLoading, setLoading  }}>
           {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if(!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}