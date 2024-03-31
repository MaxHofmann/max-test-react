import React from "react";
import debounce from "lodash.debounce";
import "./Search.scss";

const Search = ({ onSearch, onSort, sortOrder }) => {
  const debouncedSearch = debounce((query) => onSearch(query), 600);

  const handleSearchChange = (event) => {
    debouncedSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="search by username..."
        onChange={handleSearchChange}
      />
      <button
        onClick={() => onSort("asc")}
        className={sortOrder === "asc" ? "active" : ""}
      >
        Sort by Age
      </button>
      <button
        onClick={() => onSort("desc")}
        className={sortOrder === "desc" ? "active" : ""}
      >
        Sort by Decreasing Age
      </button>
    </div>
  );
};

export default Search;
