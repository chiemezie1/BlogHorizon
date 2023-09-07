import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white mt-8">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                
          
                <div>
                    <h1 className="text-2xl font-bold">News Blog</h1>
                </div>

                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
                
            </div>
          
            <div className="text-center py-2 text-gray-400">
                &copy; 2023 News Blog. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
