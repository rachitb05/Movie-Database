import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recommendations.css";
function Recommendations({ data }) {
  let navigate = useNavigate();
  return (
    <div className="recommended-container">
      {data.map((movie, index) => (
        <div key={index} className="recommended-details">
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
      {data.length === 0 && (
        <h2 style={{ textAlign: "center" }}>
          Currently Unavailable
          <br /> Check back later !
        </h2>
      )}
    </div>
  );
}

export default Recommendations;
