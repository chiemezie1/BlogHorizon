import React from "react";
import { bg } from "../svg/index"; // Import the bg variable
import Navbar from "../components/Navbar";
function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        
        <Navbar />

        <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
            <section className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    
                    {/* Sample Article Container - You can loop through these based on your data */}
                    <div className="flex flex-col border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="relative h-48 md:h-56 lg:h-64">
                            <img 
                                src="https://via.placeholder.com/400" 
                                alt="News" 
                                className="w-full h-full object-cover absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-start p-4">
                                <span className="text-white text-sm bg-red-500 px-2 py-1 rounded">Category</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 truncate">Article Title</h2>
                            <p className="text-gray-600 text-sm mb-2">By Author Name - Date</p>
                            <p className="text-gray-700 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
        
        {/* <Footer /> */}
    </div>
);
}

export default Home;
