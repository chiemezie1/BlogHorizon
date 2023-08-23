import React from 'react'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=''>
      <div className="sm:w-96 h-auto p-8 shadow-lg rounded-lg">
        <div className="font-bold text-2xl">Create an account</div>
        <div className="text-neutral-600 text-sm font-normal leading-relaxed">
        Start bloging with Horizon
        </div>
        <form onSubmit={(e) => e.preventDefault()} >
        <div className="mt-3">
            <input
              type="text"
              placeholder="Name"
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Email"
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              placeholder="Password"
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="block w-full mt-28 py-2 font-medium text-sm text-center text-black 
            bg-white border border-stone-400 hover:bg-stone-200 active:bg-stone-300 rounded-lg"
            >
              Create account
            </button>
            <div className="text-neutral-700 text-sm font-normal leading-relaxed">
            Already have account?<Link to="/login" className='font-bold hover:text-neutral-400'> Login</Link> 
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
