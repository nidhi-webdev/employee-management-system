import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage, getLocalStorage } from './utils/locaStorage'


const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('Admin')
    } else if (email == 'john.doe@example.com' && password == '123') {
      setUser('Employee')
    }
    else {
      alert("Invalid Credentail")
    }
  }

  return (
    <div className='m-10'>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'Admin' ? < AdminDashboard /> : <EmployeeDashboard />}
    </div>
  )
}

export default App
