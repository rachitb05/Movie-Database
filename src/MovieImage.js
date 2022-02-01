import React, { useEffect, useState } from "react";
import "./MovieImage.css";
function MovieImage({ images }) {
  const [Index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(!animation);
      setIndex(Index + 1 === images.posters.length ? 0 : Index + 1);
    }, 7000);
    return () => clearTimeout(timer);
  }, [Index]);

  return (
    <div className="container">
      <div className="backdrop">
        {images.backdrops.length > 0 && (
          <img
            className="backdrop-img slide-in-elliptic-top-fwd"
            src={`https://image.tmdb.org/t/p/w1280/${images.backdrops[0].file_path}`}
            alt=""
          />
        )}
      </div>
      {images.posters.length > 0 && (
        <div className="poster">
          {images.posters.length > 1 ? (
            <div className="slide-in-elliptic-top-fwd">
              <img
                className={
                  animation === true
                    ? "poster-img poster-img-scale-in-center"
                    : "poster-img poster-img-scale-in-center-2"
                }
                src={`https://image.tmdb.org/t/p/w342/${images.posters[Index].file_path}`}
                alt=""
              />
            </div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w342/${images.posters[0].file_path}`}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MovieImage;
