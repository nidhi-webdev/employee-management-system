import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from './NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from './FailedTask'

const TaskList = (employee) => {
    return (
        <div id="tasklist" className='h-[55vh] w-full  mt-10 flex items-center  gap-20 flex-nowrap overflow-x-auto'>
            <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask />

            <div className=' w-[300px] p-5 bg-amber-800 rounded-xl flex-shrink-0'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High </h3>
                    <h4> 17 Sep 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a react project </h2>
                <p className='text-sm mt-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam voluptatem voluptas sint. Enim, ex a quaerat ad labore alias libero voluptate fugit voluptatem odio at, tempore quasi molestias voluptates.
                </p>
            </div>

            <div className=' w-[300px] p-5 bg-purple-400 rounded-xl flex-shrink-0'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High </h3>
                    <h4> 17 Sep 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a react project </h2>
                <p className='text-sm mt-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam voluptatem voluptas sint. Enim, ex a quaerat ad labore alias libero voluptate fugit voluptatem odio at, tempore quasi molestias voluptates.
                </p>
            </div>

            <div className=' w-[300px] p-5 bg-amber-300 rounded-xl flex-shrink-0'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High </h3>
                    <h4> 17 Sep 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a react project </h2>
                <p className='text-sm mt-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam voluptatem voluptas sint. Enim, ex a quaerat ad labore alias libero voluptate fugit voluptatem odio at, tempore quasi molestias voluptates.
                </p>
            </div>
        </div>
    )
}

export default TaskList
