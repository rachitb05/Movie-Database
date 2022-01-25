import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchedMovie from "./SearchedMovie";
import LoadingGif from "./LoadingGif.gif";
import "./SearchResult.css";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 3000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return (
      // <div style={{hei position:"relative" }}>
      // <img
      //   style={{
      //     position: "absolute",
      //     left: "50%",
      //     top: "50%",
      //     transform: "translate(-50%,-50%)",
      //     clipPath: "inset(0px 125px 0px 125px)",
      //   }}
      //   src={LoadingGif}
      //   alt="Loading..."
      // />
      <div className="spinner">
        <div className="spinner__loader"></div>
      </div>
      // </div>
    );
  }

  // If page is not in loading state, display page.
  else {
    return (
      <div>
        <h1 style={{fontWeight:"lighter"}}>Search Results for "{searchQuery}"  </h1>
        {data.map((movie) => {
          return <SearchedMovie movie={movie} />;
        })}
      </div>
    );
  }
}

export default SearchResult;
