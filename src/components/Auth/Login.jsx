import React from 'react'

const Login = () => {
    return (
        <div className='flex h-screen w-screen  items-center justify-center'>
            <div className='border-1 border-emerald-600 px-6 py-10 rounded-xl'>
                <form className='flex flex-col justify-between items-center'>
                    <input required className='border-2 rounded-full border-emerald-600 py-3 px-3 text-xl 
                    outline-none placeholder:text-gray-400 mb-5 '
                        type='email' placeholder='Enter Your email' />
                    <input required className='border-2 rounded-full border-emerald-600 py-3 px-3 text-xl
                    outline-none placeholder:text-gray-400 mb-5'
                        type='password' placeholder='Enter your password' />
                    <button className='border-2 rounded-full bg-emerald-600 py-3 px-5 text-xl
                    outline-none text-emerald-100 mt-5'>
                        Log in 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
