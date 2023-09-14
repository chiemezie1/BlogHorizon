import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();

    const userPayload = {
      username,
      firstname,
      lastname,
      email,
      password
    };

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userPayload)
      });

      const responseData = await response.json();

      if (response.ok) {
        // Notify user of successful registration
        alert("Registration successful!");
        // Optionally, redirect to a login/dashboard page or clear form
      } else {
        // Display error message from server or a general error message
        alert(`Registration failed: ${responseData.message || "An unknown error occurred."}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed due to network or server issues.");
    }
}


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 md:w-3/5 lg:w-[400px] h-auto p-8 shadow-lg rounded-lg m-auto">
        <div className="font-bold text-2xl">Create an account</div>
        <div className="text-neutral-600 text-sm font-normal leading-relaxed">
          Start bloging with Horizon
        </div>
        <form onSubmit={register}>
          <div className="mt-3">
            <input
              type="text"
              name="firstname"
              placeholder="FirstName"
              value={firstname}
              onChange={(ev) => setFirstname(ev.target.value)}
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="lastname"
              placeholder="LastName"
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>

          <div className="mt-3">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="text-zinc-500 text-xs font-normal leading-relaxed
              border-b-2 border-gray-500 focus:border-zinc-200 py-2 w-full outline-none"
            />
          </div>
          <div className="mt-3">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
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
              Already have account?
              <Link to="/login" className="font-bold hover:text-neutral-400">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
