import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchedMovie from "./SearchedMovie";
import ScrollButton from "./ScrollButton";
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
    const loadData = async () => {
      if (loading === false) {
        setLoading(true);
      }
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, [searchQuery]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="spinner">
          <div className="spinner__loader"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
          Search Results for "{searchQuery}"{" "}
        </h1>
        <div className="result-container">
          {data.map((movie, index) => {
            return <SearchedMovie movie={movie} key={index} />;
          })}
        </div>
        <ScrollButton />
      </div>
    );
  }
}

export default SearchResult;
