import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../utils/locaStorage'



export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    const { employeesData, adminData } = getLocalStorage()
    setuserData({ employeesData, adminData })

  }, [])


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </ AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
