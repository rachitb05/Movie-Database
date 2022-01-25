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
      <hr
        style={{
          colour: "white",
          border: "2px white solid",
          width: "25%",
        }}
      />
      <h2 style={{ fontSize: "50px", fontWeight: "lighter" }}>{movie.title}</h2>
      {movieData.backdrop_path === null ? (
        <img src={NoImg} alt="no img" />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w780/${movieData.backdrop_path}`}
          alt=""
        />
      )}
      <h2>Realease Date:{movie.release_date}</h2>
      <h2>Runtime:{movieData.runtime} Minutes</h2>
      {/* console.log({movieData.genres[0].name} */}
    </div>
  );
  //   }
}

export default SearchedMovie;
