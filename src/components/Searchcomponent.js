
import React from 'react';

const SearchComponent = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;
