import React from 'react'
// import AcceptTask from '../TaskList/AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from '../TaskList/CompleteTask'
// import FailedTask from './FailedTask'


const TaskList = ({employee}) => {
    // console.log("From TaskList:", employee.tasks)
    return (
        <div id="tasklist" className='h-[55vh] w-full  mt-10 flex items-center  gap-20 flex-nowrap overflow-x-auto'>
            {/* <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask /> */}
            {employee.tasks.map((ele) => {
                console.log("form ele", ele)
            })}
           
          
        </div>
    )
}

export default TaskList
