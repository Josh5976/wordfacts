import React from "react";
import "../styles/Search.css";

const onSearchSubmit = (e) => {
  e.preventDefault();
  console.log("hello world");
};

function Search() {
  return (
    <div className="search">
      <form className="search__form" onSubmit={onSearchSubmit}>
        <input
          name="search"
          label="search"
          type="text"
          placeholder="type in word"
          className="search__form-bar"
        />
        <button className="search__form-button" type="submit"></button>
      </form>
      <button className="search__params" type="button">Synonyms</button>
      <button className="search__params" type="button">Rhymes</button>
      <button className="search__params" type="button">Pronunciation</button>
      <button className="search__params" type="button">Syllabus</button>
      <button className="search__params" type="button">Frequency</button>
      <button className="search__params" type="button">Relation</button>
    </div>
  );
}

export default Search;
