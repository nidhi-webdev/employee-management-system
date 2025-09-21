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
    if(authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  
    
  }, [authData])
  

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('Admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({role: 'Admin'}))
    } else if (authData && authData.employees.find(e => e.email == email && e.password == password)) {
      setUser('Employee')
      localStorage.setItem('LoggedInUser', JSON.stringify({role: employees}))
    }
    else {
      alert("Invalid Credentail")
    }
  }


  return (
    <div className='m-10'>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'Admin' && < AdminDashboard />}
      {user === 'employees' && <EmployeeDashboard />}
    </div>
  )
}

export default App
