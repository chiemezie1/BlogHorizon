import {search} from "../svg/index"
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-white rounded w-full max-w-sm mx-auto border-2 border-gray-300">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input 
          type="text" 
          className="flex-grow p-2 rounded-l-md focus:outline-none focus:border-gray-500 text-sm"
          placeholder="Search..."
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit">
        <img src={search} alt="share" className="h-10 w-10 p-2" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
