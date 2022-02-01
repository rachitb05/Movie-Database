import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recommendations.css";
function Recommendations({ data }) {
  let navigate = useNavigate();
  return (
    <div className="recommended-container">
      {data.map((movie) => (
        <div className="recommended-details">
          <div className="poster-div">
            <img
              className="poster-pic"
              onClick={() => {
                navigate("/movie", { state: { id: movie.id } });
              }}
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <h3
            className="title"
            onClick={() => {
              navigate("/movie", { state: { id: movie.id } });
            }}
          >
            {movie.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
