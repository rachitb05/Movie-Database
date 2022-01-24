import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchedMovie from "./SearchedMovie";
function SearchResult() {
  const location = useLocation();
  const searchQuery = location.state.search;
  const baseurl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
          // console.log(data);
        });
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {
        data.map((movie)=>{
          return(<SearchedMovie movie={movie} />)
        })
      }
    </div>
  );
}

export default SearchResult;
