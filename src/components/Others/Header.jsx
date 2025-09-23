import React from 'react'

const Header = ({handleLogout, employee}) => {
  console.log("Header received employee:", employee)
  
  // Extract email from employee object
  const displayName = employee?.email || 'User'

  return (
    <div className='flex items-end justify-between m-10'>
      <h1 className='text-2xl font-medium text-white'> 
        Hello  <br /> 
        <span className='text-3xl font-semibold text-white'> {displayName} 👋 </span>  
      </h1>
      <button className='bg-red-600 text-lg font-medium px-5 py-2 rounded-xl cursor-pointer' onClick={handleLogout}> 
        Log Out 
      </button>
    </div>
  )
}

export default Header
