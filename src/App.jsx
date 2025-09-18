import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage, getLocalStorage } from './utils/locaStorage'


const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },)


  return (
    <div className='m-10'>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
