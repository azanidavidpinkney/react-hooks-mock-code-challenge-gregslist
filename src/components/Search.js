import React, { useState } from "react";

function Search({setFilter}) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setFilter(inputValue);
    console.log("submitted");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
