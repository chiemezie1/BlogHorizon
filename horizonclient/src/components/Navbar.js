import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { logout } from "../svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLogin, login, logout } = useAuth();

  const [showNav, setShowNav] = useState(false);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <nav>
      {/* Search Bar */}
      <div className="md:hidden m-2">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="bg-white shadow-lg m-1">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo on the Left */}
          <div className="flex-grow">
            <h1 className="text-xl font-bold text-gray-700">Logo</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block md:pr-4 ">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Navigation for large screens */}
          <div className="hidden md:flex items-center space-x-4">
            {isLogin ? (
              <>
                <Link to="/create-post">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Post
                  </button>
                </Link>

                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Logout
                </button>

                <Link to="/user-profile">
                  <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
                    Profile
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Register
                </Link>

                <Link
                  to="/login"
                  className=" text-gray-700 px-4 py-2 rounded hover:bg-blue-600 text-center"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Hamburger and Navigation for small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowNav(!showNav)}
              className="text-gray-600 hover:text-gray-900"
            >
              ☰
            </button>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${showNav ? "block" : "hidden"
              } md:hidden`}
            onClick={() => setShowNav(false)}
          >
            <div className="bg-white w-64 h-auto fixed top-0 right-0 overflow-y-auto p-2">
              {isLogin ? (
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/user-profile"
                    className=" text-gray-700 px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    <button>Profile</button>
                  </Link>
                  <Link
                    to="/create-post"
                    className=" text-gray-700 px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    <button>Create Post</button>
                  </Link>

                  <button
                    onClick={logout}
                    className=" text-gray-700 px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link
                    to="/register"
                    className=" text-gray-700 px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    <button>Register</button>
                  </Link>
                  <Link
                    to="/login"
                    className=" text-gray-700 px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    <button>Login</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
