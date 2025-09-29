import React from 'react'

const AcceptTask = ({data, task}) => {
  console.log("From Accepted task", data?.tasks)
  console.log("From task", task)
  return (
    <div>
       <div className=' w-[300px] p-5 bg-yellow-400 rounded-xl flex-shrink-0'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High </h3>
                    <h4> 17 Sep 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> {task.taskTitle} </h2>
                <p className='text-sm mt-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam voluptatem voluptas sint. Enim, ex a quaerat ad labore alias libero voluptate fugit voluptatem odio at, tempore quasi molestias voluptates.
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-600 py-1 px-2 text-sm'> Mark as Completed </button>
                    <button className='bg-red-600 py-1 px-2 text-sm'> Mark as Failed </button>
                </div>
            </div>
    </div>
  )
}

export default AcceptTask
