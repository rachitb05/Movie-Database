import React, { useState, useEffect } from "react";
import NoImg from "./noimg.jpg";
import "./SearchedMovie.css";
function SearchedMovie({ movie }) {
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    const movie_id = movie.id;
    const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const getData = async () => {
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setMovieData(data);
          // console.log(data);
        });
    };
    getData();
  }, [movie]);

  return (
    <div className="movie-container">
      <hr
        style={{
          border: "2px black solid",
          width: "25%",
        }}
      />
      <h1 className="movie-title">{movie.title}</h1>
      <div className="movie-imginfo">
        {movieData.backdrop_path === null ||
        movieData.backdrop_path === undefined ? (
          <img className="movie-img" src={NoImg} alt="no img" />
        ) : (
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w780/${movieData.poster_path}`}
            alt=""
          />
        )}
        <div
          className="movie-info"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.3)),url("https://image.tmdb.org/t/p/w780/${movieData.backdrop_path}")`,
          }}
        >
          <h2>Release Date:{movie.release_date}</h2>
          <h2>
            User Rating:{movieData.vote_average}/10({movie.vote_count})
          </h2>
        </div>
      </div>
    </div>
  );
  //   }
}

export default SearchedMovie;
