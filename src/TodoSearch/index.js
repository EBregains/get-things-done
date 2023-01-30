import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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
      />
    </section>
  );
}

export { TodoSearch };