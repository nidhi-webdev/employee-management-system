import React from 'react'
import Header from '../Others/Header'
import TaskListCount from '../Others/TaskListCount'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, employee }) => {
  
  return (
    <div>
      <Header handleLogout={handleLogout} employee={employee} />
      <TaskListCount  employee={employee} />
      <TaskList  employee={employee} />
    </div>
  )
}

export default EmployeeDashboard
