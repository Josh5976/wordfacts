import React from "react";

function Search({ searchButtonClick }) {
  const [word, setWord] = React.useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    searchButtonClick(word);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSearchSubmit}>
        <input
          name="search"
          label="search"
          type="text"
          value={word}
          placeholder="type in word"
          className="search__form-bar"
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="search__form-button" type="submit"></button>
      </form>
    </div>
  );
}

export default Search;
