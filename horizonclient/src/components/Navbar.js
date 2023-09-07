import React, { useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="bg-white shadow-lg m-2">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo on the Left */}
                <div>
                    <h1 className="text-xl font-bold text-gray-700">Logo</h1>
                </div>

                {/* Depending on login status, show appropriate links on the right */}
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
        </nav>
    );
}

export default Navbar;
