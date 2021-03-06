import "./App.css";
import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import TopMoviesHeader from "./TopMoviesHeader";
import Header from "./Header";
import Footer from "./Footer";
const api_key = process.env.REACT_APP_API_KEY;
const API_KEY = api_key;
function App() {
  const baseurl = "https://api.themoviedb.org/3/";
  const [nowPlaying, setNowPlaying] = useState([]);
  const [current, setCurrent] = useState(0);
  // const [posterPath, setposterPath] = useState("");
  useEffect(() => {
    const getData = async () => {
      await fetch(
        baseurl +
          "movie/now_playing?api_key=" +
          API_KEY +
          "&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          setNowPlaying(data.results);
          // console.log(data.results);
          // console.log(nowPlaying);
        });
    };
    getData();
  }, []);
  const nextSlide = () => {
    setCurrent(current === nowPlaying.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? nowPlaying.length - 1 : current - 1);
  };
  return (
    <div className="App">
      <Header />
      <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />

      {/* {(function () {
        setTimeout(nextSlide, 5000);
      })()} */}
      {nowPlaying.map((movie, index) => {
        return (
          <Slideshow
            movieData={movie}
            index={index}
            current={current}
            id={movie.id}
            key={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
