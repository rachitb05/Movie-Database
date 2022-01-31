import React from "react";
import "./Slideshow.css";
import { useNavigate } from "react-router-dom";
function Slideshow({ movieData,index,current }) {
  const baseimgurl = "https://image.tmdb.org/t/p/w500";
  const imgurl = baseimgurl + movieData.poster_path;
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movie", { state: { data: movieData } });
  }
     console.log(movieData);
  return (
    <div className="slideshow">
      {index === current && (
        <div className="slideshow-2">
          <img
            className="slideshow__img slide-in-left"
            src={imgurl}
            alt="Now Playing Movie Poster"
            onClick={handleClick}
          />
          <div className="slideshow__info ">
            <h1 text className="info__title slide-in-top" onClick={handleClick}>
              {movieData.title}
            </h1>
            <h2 className="info__overview slide-in-right">{movieData.overview}</h2>
            {movieData.vote_avg === 0 ? (
              <h3 className="info__vote-avg slide-in-bottom">
                Popularity:{movieData.popularity}
              </h3>
            ) : (
              <h3 className="info__vote-avg slide-in-bottom">
                User Rating:{movieData.vote_average}/10
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
