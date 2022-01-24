import React, { useState } from "react";
import "./SearchBox.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
   let navigate=useNavigate();
  function handleSubmit() {
    // // alert(`value returned is ${searchQuery}`);
    // <Link to="/search"
    // ><button>hi</button></Link>;
    // console.log(searchQuery);
    // event.preventDefault();
  
   navigate('/search',{state:{search:searchQuery}});
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
          />
        </label>
       
        <SearchIcon className="form__submitbtn" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default SearchBox;
