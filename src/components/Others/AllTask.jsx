import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authdata = useContext(AuthContext)
    console.log("All Task", authdata.employees)

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-50'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                <h2 className='w-1/5 bg-red-600 px-2 py-2'> Employee Name </h2>
                <h3 className='w-1/5 bg-red-600 px-2 py-2'> New Task </h3>
                <h5 className='w-1/5 bg-red-600 px-2 py-2'> Active Task </h5>
                <h5 className='w-1/5 bg-red-600 px-2 py-2'> Completed Task </h5>
                <h5 className='w-1/5 bg-red-600 px-2 py-2'> Failed Task </h5>

            </div>
            <div className='h-[80%] overflow-auto' >
                {authdata.employees.map(function (elem) {
                    return <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                        <h2 className='w-1/5 bg-red-600 px-2 py-2'> {elem.name} </h2>
                        <h3 className='w-1/5 bg-red-600 px-2 py-2'> Make a UI Design </h3>
                        <h5 className='w-1/5 bg-red-600 px-2 py-2'> Status </h5>
                        <h5 className='w-1/5 bg-red-600 px-2 py-2'> Status </h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask
