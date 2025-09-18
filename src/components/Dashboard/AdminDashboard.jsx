import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <div>
        <form>
            <h3> Task Tittle </h3>
            <input type='text' placeholder='Make a UI Design'className='bg-white' />
            <h3> Description </h3>
            <textarea name='' id='' cols="30" rows="10" className='bg-white'> </textarea>
            <h3> Date </h3>
            <input type='date' className='bg-white'/>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
