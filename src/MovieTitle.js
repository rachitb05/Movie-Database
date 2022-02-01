import React from "react";
import "./MovieTitle.css";
import StarRatings from "react-star-ratings";
function MovieTitle({ title, rating, votes }) {
  return (
    <div className="title-container">
      <h1 className="title-name">{title}</h1>
      {votes !== 0 ? (
        <h3 className="title-rating">
          User Approval: 
          <StarRatings
            rating={rating/2}
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
