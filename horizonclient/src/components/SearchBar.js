// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-white shadow-md rounded px-3 py-2 w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input 
          type="text" 
          className="flex-grow p-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-sm"
          placeholder="Search..."
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit" className="bg-indigo-500 text-white px-3 py-2 rounded-r-md hover:bg-indigo-600 transition duration-150">
          <i className="fas fa-search"></i> {/* Optional Font Awesome Search Icon */}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
