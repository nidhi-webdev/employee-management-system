import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ handleLogout, employee }) => {
    console.log("From Admin Dashboard:", employee)
    return (
        <div className='h-screen w-full p-7'>
            <Header handleLogout={handleLogout} employee={employee} />
           <CreateTask />
           <AllTask />
        </div>
    )
}

export default AdminDashboard
