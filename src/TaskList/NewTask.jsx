import React from 'react'

const NewTask = ({ task }) => {
    return (
        <div className=' w-[300px] p-5 bg-blue-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> {task.category} </h3>
                <h4> {task.taskDate} </h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> {task.taskTitle} </h2>
            <p className='text-sm mt-3'>
                {task.taskDescription}            </p>
            <div className='mt-4'>
                <button> Accepted Task </button>
            </div>
        </div>
    )
}

export default NewTask
