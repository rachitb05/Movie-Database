import React from "react";
import { useNavigate } from "react-router-dom";
import NoImg from "./noimg.jpg";
import "./SearchedMovie.css";
function SearchedMovie({ movie }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/movie", { state: { id: movie.id } });
  }
  return (
    <div className="movie-container">
      <hr
        style={{
          border: "2px black solid",
          width: "25%",
        }}
      />
      <h1 className="movie-title" onClick={handleClick}>
        {movie.title}
      </h1>
      <div className="movie-imginfo">
        {movie.backdrop_path === null || movie.backdrop_path === undefined ? (
          <img
            className="movie-img"
            src={NoImg}
            alt="no img"
            onClick={handleClick}
          />
        ) : (
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt=""
            onClick={handleClick}
          />
        )}
        <div
          className="movie-info"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.3)),url("https://image.tmdb.org/t/p/w780/${movie.backdrop_path}")`,
          }}
        >
          <h2>Release Date:{movie.release_date}</h2>
          {movie.vote_count > 0 && (
            <h2>
              User Rating:{movie.vote_average}/10({movie.vote_count})
            </h2>
          )}
        </div>
      </div>
    </div>
  );
  //   }
}

export default SearchedMovie;
