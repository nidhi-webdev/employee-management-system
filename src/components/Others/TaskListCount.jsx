import React from 'react'

const TaskListCount = ({employee}) => {
    console.log("From TaskListCount", employee)
    return (
        
        <div className='flex mt-10 justify-between screen gap-5'>
            <div className=' rounded-xl w-[45%] py-5 px-10 bg-yellow-400 '>
                <h2 className='text-3xl font-semibold'> {employee.tastCounts.active} </h2>
                <h3> Accepted task </h3>
            </div>

             <div className=' rounded-xl w-[45%] py-5 px-10  bg-green-400'>
                <h2 className='text-3xl font-semibold'> {employee.tastCounts.completed} </h2>
                <h3> Completed Task </h3>
            </div>

             <div className=' rounded-xl w-[45%] py-5 px-10  bg-blue-400'>
                <h2 className='text-3xl font-semibold'> {employee.tastCounts.newTask} </h2>
                <h3> New task </h3>
            </div>

             <div className=' rounded-xl w-[45%] py-5 px-10  bg-red-400'>
                <h2 className='text-3xl font-semibold'> {employee.tastCounts.active} </h2>
                <h3> Failed Task </h3>
            </div>

        </div>
    
        
    )
}

export default TaskListCount
