import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue , loading}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <section className="TodoSearch">
      <span className="Icon Icon-search">
        <span className="material-symbols-outlined">
          search
        </span>
      </span>
      <input 
        placeholder="Type to search..." 
        className="TodoSearch-input"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </section>
  );
}

export { TodoSearch };