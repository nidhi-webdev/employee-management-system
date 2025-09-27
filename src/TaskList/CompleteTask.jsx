import React from 'react'

const CompleteTask = () => {
  return (
   
      <div className=' w-[300px] p-5 bg-blue-400 rounded-xl flex-shrink-0'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> High </h3>
                    <h4> 17 Sep 2025 </h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a react project </h2>
                <p className='text-sm mt-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste magnam voluptatem voluptas sint. Enim, ex a quaerat ad labore alias libero voluptate fugit voluptatem odio at, tempore quasi molestias voluptates.
                </p>
                <div className='w-full'>
<button className='w-full'> Complete </button>
                </div>
            </div>
   
  )
}

export default CompleteTask
