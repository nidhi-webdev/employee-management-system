import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authdata = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                <h2 className='w-1/5 text-xl font-medium px-2 py-2'> Employee Name </h2>
                <h3 className='w-1/5 text-xl font-medium px-2 py-2'> New Task </h3>
                <h5 className='w-1/5 text-xl font-medium px-2 py-2'> Active Task </h5>
                <h5 className='w-1/5 text-xl font-medium px-2 py-2'> Completed Task </h5>
                <h5 className='w-1/5 text-xl font-medium px-2 py-2'> Failed Task </h5>

            </div>
            <div className='' >
                {authdata.employees.map(function (elem,idx) {
                    return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                        <h2 className='text-xl font-medium w-1/5 text-white-600 px-2 py-2'> {elem.name} </h2>
                        <h3 className='text-xl font-medium w-1/5 text-blue-600 px-2 py-2'> {elem.taskCounts.newTask} </h3>
                        <h5 className='text-xl font-medium w-1/5 text-yellow-600 px-2 py-2'> {elem.taskCounts.active} </h5>
                        <h5 className='text-xl font-medium w-1/5 text-green-600 px-2 py-2'> {elem.taskCounts.completed} </h5>
                        <h5 className='text-xl font-medium w-1/5 text-red-600 px-2 py-2'> {elem.taskCounts.failed} </h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask
