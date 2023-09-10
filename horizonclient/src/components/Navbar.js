// import React, { useState } from 'react';
// import SearchBar from "../components/SearchBar";

// const Navbar = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleSearch = (query) => {
//         console.log("Searching for:", query);
//     };

//     return (
//         <nav className="bg-white shadow-lg m-2">
//             <div className="container mx-auto px-4 py-4 sm:flex sm:justify-between sm:items-center">
//                 {/* Logo on the Left */}
//                 <div className="mb-4 sm:mb-0">
//                     <h1 className="text-xl font-bold text-gray-700">Logo</h1>
//                 </div>
//                 <SearchBar onSearch={handleSearch} />
//                 {/* Depending on login status, show appropriate links */}
//                 {isLoggedIn ? (
//                     <div className="flex space-x-2 sm:space-x-4 items-center mt-4 sm:mt-0">
//                         <button className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-600">Create Post</button>
//                         <button onClick={() => setIsLoggedIn(false)} className="text-gray-700 hover:text-gray-900">Logout</button>
//                         <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
//                             Profile 🚹
//                         </span>
//                     </div>
//                 ) : (
//                     <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-0">
//                         <button className="text-gray-700 hover:text-gray-900">Register</button>
//                         <button onClick={() => setIsLoggedIn(true)} className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-600">Login</button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleSearch = (query) => {
        console.log("Searching for:", query);
    };

    return (
        <nav className="bg-white shadow-lg m-2">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo on the Left */}
                <div className="flex-grow">
                    <h1 className="text-xl font-bold text-gray-700">Logo</h1>
                </div>

                {/* Search Bar */}
                <div className="hidden md:block">
                    <SearchBar onSearch={handleSearch} />
                </div>

                {/* Navigation for large screens */}
                <div className="hidden md:flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Post</button>
                            <button onClick={() => setIsLoggedIn(false)} className="text-gray-700 hover:text-gray-900">Logout</button>
                            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Profile 🚹</span>
                        </>
                    ) : (
                        <>
                            <button className="text-gray-700 hover:text-gray-900">Register</button>
                            <button onClick={() => setIsLoggedIn(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
                        </>
                    )}
                </div>

                {/* Hamburger and Navigation for small screens */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setShowNav(!showNav)} className="text-gray-600 hover:text-gray-900">
                        ☰
                    </button>
                </div>
                <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${showNav ? 'block' : 'hidden'} md:hidden`} onClick={() => setShowNav(false)}>
                    <div className="bg-white w-64 h-full fixed top-0 right-0 overflow-y-auto py-4">
                        {isLoggedIn ? (
                            <div className="flex flex-col space-y-4">
                                <button onClick={() => setIsLoggedIn(false)} className="text-gray-700 hover:text-gray-900 px-4 py-2">Logout</button>
                                <span className="text-gray-700 hover:text-gray-900 cursor-pointer px-4 py-2">
                                    Profile 🚹
                                </span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Post</button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-4">
                                <button className="text-gray-700 hover:text-gray-900 px-4 py-2">Register</button>
                                <button onClick={() => setIsLoggedIn(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
