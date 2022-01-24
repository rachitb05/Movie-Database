import React from "react";
import "./SearchBox.css"
function SearchBox() {
  return (
    <div>
      <form className="form">
        <label className="form__label">
          Search for Movies
          <input className="form__input" type="text" />
        </label>
        <input className="form__submitbtn" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBox;
