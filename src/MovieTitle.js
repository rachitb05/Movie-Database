import React from "react";
import "./MovieTitle.css";
import StarRatings from "react-star-ratings";
function MovieTitle({ title, rating, votes }) {
  return (
    <div className="title-container">
      <h1 className="title-name slide-in-elliptic-top-fwd">{title}</h1>
      {votes !== 0 ? (
        <h3 className="title-rating slide-in-elliptic-top-fwd">
          User Approval:
          <StarRatings
            rating={rating / 2}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
          />
        </h3>
      ) : null}
    </div>
  );
}

export default MovieTitle;
