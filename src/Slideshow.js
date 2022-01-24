import React from "react";
import "./Slideshow.css";

function Slideshow({
  poster_path,
  title,
  vote_avg,
  popularity,
  overview,
  index,
  current,
}) {
 
  const baseimgurl = "https://image.tmdb.org/t/p/w500/";
  const imgurl = baseimgurl + poster_path;
 
  //    console.log(imgurl);
  return (
    <div className="slideshow">
     
      {index === current && (
        <div className="slideshow-2">
          <img
            className="slideshow__img"
            src={imgurl}
            alt="Now Playing Movie Poster"
          />
          <div className="slideshow__info">
            <h1 text className="info__title">
              {title}
            </h1>
            <h2 className="info__overview">{overview}</h2>
            {vote_avg === 0 ? (
              <h3 className="info__vote-avg">Popularity:{popularity}</h3>
            ) : (
              <h3 className="info__vote-avg">User Rating:{vote_avg}/10</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
