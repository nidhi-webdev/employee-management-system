import React from 'react'

const FailedTask = ({task}) => {
    return (
        <div className=' w-[300px] p-5 bg-red-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> {task.category} </h3>
                <h4> {task.taskDate} </h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> {task.taskTitle} </h2>
            <p className='text-sm mt-3'> {task.taskDescription}   
            </p>
            <div className='w-full'>
                <button className='w-full'> Falied </button>
            </div>
        </div>
    )
}

export default FailedTask
