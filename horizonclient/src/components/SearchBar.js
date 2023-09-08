import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNav, setShowNav] = useState(false); // New state to control the visibility of the navigation

    const handleSearch = (query) => {
        console.log("Searching for:", query);
    };

    return (
        <nav className="bg-white shadow-lg m-2">
            <div className="container mx-auto px-4 py-4 sm:flex sm:justify-between sm:items-center">
                {/* Logo on the Left */}
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-700">Logo</h1>
                    <button onClick={() => setShowNav(!showNav)} className="sm:hidden text-gray-600 hover:text-gray-900">
                        ☰
                    </button>
                </div>

                <SearchBar onSearch={handleSearch} />

                {/* Main Navigation */}
                <div className={`mt-4 sm:mt-0 ${showNav ? 'block' : 'hidden'} sm:flex`}>
                    {isLoggedIn ? (
                        <div className="flex space-x-4 items-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Post</button>
                            <button onClick={() => setIsLoggedIn(false)} className="text-gray-700 hover:text-gray-900">Logout</button>
                            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                Profile 🚹
                            </span>
                        </div>
                    ) : (
                        <div className="flex space-x-4">
                            <button className="text-gray-700 hover:text-gray-900">Register</button>
                            <button onClick={() => setIsLoggedIn(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
