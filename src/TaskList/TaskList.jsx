import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from './NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from './FailedTask'


const TaskList = ({employee}) => {
    const tasks = employee?.tasks || []
    return (
        <div id="tasklist" className='h-[55vh] w-full  mt-10 flex items-center  gap-20 flex-nowrap overflow-x-auto'>
        
            {tasks.map((ele, index) => {
                const key = `task-${index}`
                if(ele.active) {
                    return <AcceptTask key={key} task={ele} />
                }
                if(ele.newTask) {
                    return <NewTask key={key} task={ele} />
                }
                if(ele.completed) {
                    return <CompleteTask key={key} task={ele} />
                }
                if(ele.failed) {
                    return <FailedTask key={key} task={ele} />
                }
                 return null

            })}
           
          
        </div>
    )
}

export default TaskList
