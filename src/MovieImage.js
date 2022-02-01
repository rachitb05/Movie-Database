import React from "react";
import "./MovieImage.css"
function MovieImage({ images }) {
  return (
    <div className="container">
    <div className="backdrop">
        <img className="backdrop-img"
          src={`https://image.tmdb.org/t/p/w1280/${images.backdrops[0].file_path}`}
          alt=""
        />
      </div>
      <div className="poster">
        {(images.posters.length > 1) ? (
          <img className="poster-img"
            src={`https://image.tmdb.org/t/p/w342/${images.posters[1].file_path}`}
            alt=""
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w342/${images.posters[0].file_path}`}
            alt=""
          />
        )}
      </div>
      
    </div>
  );
}

export default MovieImage;
