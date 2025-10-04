import React, { useState } from 'react'

const CreateTask = () => {
  const [titleTask, setTitleTask] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const [Task, setTask] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // if (!description.trim()) {
    //   alert('Please enter a description')
    //   return
    // }
    // alert('Task created')
    setTask({titleTask, date, asignTo, category, description, active:false, newTask:true, completed:false, failed: false})
    setTitleTask('')
    setDate('')
    setAsignTo('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={handleSubmit} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'> Task Tittle </h3>
                            <input 
                            value={titleTask} 
                            onChange={(e) => {
                              setTitleTask(e.target.value)
                            }}
                            type='text' placeholder='Make a UI Design' className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400 '
                            />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'> Date </h3>
                            <input 
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value)
                            }}
                            type='date' className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'> Asign To  </h3>
                            <input 
                            value={asignTo} 
                            onChange={(e) => {
                              setAsignTo(e.target.value)
                            }}
                            type='text' placeholder='Employee Name' className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'> Category </h3>
                            <input 
                            value={category}
                            onChange={(e) => {
                              setCategory(e.target.value)
                            }}
                            type='text' placeholder='Design, Dev etc' className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-gray-400' />
                        </div>
                    </div>


                    <div className='w-1/2 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'> Description </h3>
                        <textarea
                          name='description'
                          id='description'
                          cols="30"
                          rows="10"
                          className='w-full  text-white h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                        />
                        <button type='submit' className='w-full mt-4 text-sm rounded px-5 py-3 bg-emerald-500 cursor-pointer hover:bg-emerald-600'> Create Task </button>
                    </div>



                </form>
            </div>
  )
}

export default CreateTask
