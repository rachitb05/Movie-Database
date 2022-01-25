import React, { useState, useEffect } from "react";
import NoImg from "./noimg.jpg";
import "./SearchedMovie.css";
function SearchedMovie({ movie }) {
  const [movieData, setMovieData] = useState({});
  const movie_id = movie.id;
  const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  useEffect(() => {
    const getData = async () => {
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setMovieData(data);
          console.log(data);
        });
    };
    getData();
}, []);

    return (
      <div>     
        <h2>{movie.title}</h2>
        {movieData.backdrop_path === null ? (
          <img src={NoImg} alt="no img" />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w780/${movieData.backdrop_path}`}
            alt=""
          />
        )}
        <p>Realease Date:{movie.release_date}</p>
        <p>Runtime:{movieData.runtime} Minutes</p>
      </div>
    );
//   }
}

export default SearchedMovie;
