import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchedMovie from "./SearchedMovie";
import LoadingGif from "./LoadingGif.gif";
import "./SearchResult.css";
import Header from "./Header";
function SearchResult() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchQuery = location.state.search;
  // console.log(searchQuery);
  useEffect(() => {
    const baseurl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    const getData = async () => {
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
          // console.log(data);
        });
    };
    getData();
  }, [searchQuery]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      if (loading === false) {
        setLoading(true);
      }
      await new Promise((r) => setTimeout(r, 3000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
    loadData();
  }, [searchQuery]);

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
      <div>
        <Header />
        <div className="spinner">
          <div className="spinner__loader"></div>
        </div>
      </div>
      // </div>
    );
  }

  // If page is not in loading state, display page.
  else {
    return (
      <div>
        <Header />
        <h1 style={{ fontWeight: "lighter" }}>
          Search Results for "{searchQuery}"{" "}
        </h1>
        {data.map((movie, index) => {
          return <SearchedMovie movie={movie} key={index} />;
        })}
      </div>
    );
  }
}

export default SearchResult;
