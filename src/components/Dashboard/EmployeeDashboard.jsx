import React from 'react'
import Header from '../Others/Header'
import TaskListCount from '../Others/TaskListCount'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout, employee }) => {
  console.log("From Employee Dashboard:", employee)
  return (
    <div>
      <Header handleLogout={handleLogout} employee={employee} />
      <TaskListCount />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
