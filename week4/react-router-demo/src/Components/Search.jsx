import React from "react";
import { useState } from "react";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);

    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Enter search query....."
      />

      {filteredData.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default SearchPage;
