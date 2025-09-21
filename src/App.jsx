import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { setLocalStorage, getLocalStorage } from './utils/locaStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext)
 
  useEffect(() => {
    // Initialize localStorage with data if not already present
    if (!localStorage.getItem('Employees') || !localStorage.getItem('Admin')) {
      setLocalStorage()
    }
    
    if(authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
      }
    }
  }, [authData])
  

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('Admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Admin'}))
    } else if (authData && authData.employees && authData.employees.find(e => e.email === email && e.password === password)) {
      const employee = authData.employees.find(e => e.email === email && e.password === password)
      setUser('Employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Employee', employeeData: employee}))
    }
    else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('loggedInUser')
  }


  return (
    <div className='m-10'>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'Admin' && <AdminDashboard handleLogout={handleLogout} />}
      {user === 'Employee' && <EmployeeDashboard handleLogout={handleLogout} />}
    </div>
  )
}

export default App
