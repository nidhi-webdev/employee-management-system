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
  const [employee, setemployee] = useState(null)

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
        setemployee(userData.employeeData)
      }
    }
  }, [authData])
  

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('Admin')
      setemployee({ email: 'admin@example.com', role: 'Admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Admin', employeeData: { email: 'admin@example.com', role: 'Admin' }}))
    } else if (authData && authData.employees && authData.employees.find(e => e.email === email && e.password === password)) {
      const employeeObj = authData.employees.find(e => e.email === email && e.password === password)
      setUser('Employee')
      setemployee(employeeObj)
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'Employee', employeeData: employeeObj}))
      // console.log("From HandleLogin function:", employeeObj)
    }
    else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = () => {
    setUser(null)
    setemployee(null)
    localStorage.removeItem('loggedInUser')
  }


  return (
    <div className='m-10'>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'Admin' && <AdminDashboard handleLogout={handleLogout} employee={employee} />}
      {user === 'Employee' && <EmployeeDashboard handleLogout={handleLogout}  employee={employee}  />}
    </div>
  )
}

export default App
