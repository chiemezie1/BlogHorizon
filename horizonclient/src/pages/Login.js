import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        // setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }


  if(redirect){
    return <Navigate to={'/'} />
  } 
 

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-3/4 md:w-3/5 lg:w-[400px] h-auto p-8 shadow-lg rounded-lg">
        <div className="font-bold text-xl">Welcome</div>
        <div className="text-neutral-600 text-sm font-normal leading-relaxed">
          Login to your account
        </div>
        <form onSubmit={(e) => e.preventDefault()} >
          <div className="mt-3">
            <input
              type="text"
              name='username'
              placeholder="Enter email or phone number"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
          onChange={(ev) => setPassword(ev.target.value)}
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>

          <div className=" flex justify-between">
            <div className="flex gap-1">
              <input type="checkbox" className="rounded-full mt-1" />
              <div className="text-neutral-600 text-sm font-normal leading-relaxed">
                Remember me
              </div>
            </div>
            <div className="text-neutral-600 text-sm font-normal leading-relaxed">
              Forget Password?
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button
              type="submit"
              className="block w-full mt-28 py-2 font-medium text-sm text-center text-black 
            bg-white border border-stone-400 hover:bg-stone-200 active:bg-stone-300 rounded-lg"
            >
              Login
            </button>
            <div className="text-neutral-700 text-sm font-normal leading-relaxed">
              Don’t have an account? <Link to="/register" className='font-bold hover:text-neutral-400'>Sign up</Link> 
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
