import React from 'react'
import Header from '../Others/Header'
import TaskListCount from '../Others/TaskListCount'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      <TaskListCount />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
