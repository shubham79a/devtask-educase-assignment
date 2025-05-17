import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='max-w-xs max-sm:w-[280px] mx-auto h-[90vh] border border-gray-200 flex flex-col justify-end my-[5vh] rounded-md shadow' >
            <div className='flex flex-col gap-5 p-5 '>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-extrabold text-2xl'> Welcome to Popx </h1>
                    <p className='text-base text-gray-500 leading-[19px] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, possimus.</p>
                </div>
                <div className='flex gap-3 flex-col'>
                    <Link to="/signup">
                        <button className='w-full bg-[#6c25ff] rounded-md py-1.5 text-white cursor-pointer'>
                            Create Account
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className='w-full bg-[#cfb9fb] text-black font-medium  rounded-md py-1.5 cursor-pointer'>
                            Already Registered? Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
