import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ placeholder, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="custom-button" onClick={handleSearchClick}>Buscar</button>
    </div>
  );
}

export default SearchBar;

