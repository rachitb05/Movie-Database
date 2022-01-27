import React, { useState } from "react";
import "./SearchBox.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Mic from "./Mic";
function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  let navigate = useNavigate();
  function handleSubmit() {
    if (searchQuery === "") alert("Please enter some movie name");
    else navigate("/search", { state: { search: searchQuery } });
  }
  return (
    <div div="searchbox">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label">
          Search for Movies
          <input
            className="form__input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Try our Mic button"
          />
        </label>

        <SearchIcon className="form__submitbtn" onClick={handleSubmit} />
        <Mic setSearchQuery={setSearchQuery} />
      </form>
    </div>
  );
}

export default SearchBox;
