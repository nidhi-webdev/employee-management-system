import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/locaStorage'



export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    // Initialize localStorage if empty
    if (!localStorage.getItem('Employees') || !localStorage.getItem('Admin')) {
      setLocalStorage()
    }
    
    const { employees, admin } = getLocalStorage()
    setuserData({ employees, admin })
  }, [])


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
