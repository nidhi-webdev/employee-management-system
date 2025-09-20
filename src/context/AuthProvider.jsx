import React, { createContext } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../utils/locaStorage'



export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
  // const [userData, setuserData] = useState(null)

  const data = getLocalStorage()
  console.log(data)

  return (
    <div>
      <AuthContext.Provider value={"Nidhi"}>
        {children}
      </ AuthContext.Provider>

    </div>
  )
}

export default AuthProvider
