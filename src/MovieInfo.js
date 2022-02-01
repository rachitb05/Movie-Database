import React, { useState } from "react";
import Cast from "./Cast";
import "./MovieInfo.css";
import Recommendations from "./Recommendations";
import numeral from "numeral";
function MovieInfo({ crew, data, recommended }) {
  const [show, setShow] = useState("cast");
  return (
    <div>
      <h1 className="heading">Details</h1>
      <div className="info">
        <div
          className={show === "cast" ? "info-options" : null}
          onClick={() => setShow("cast")}
        >
          Cast
        </div>

        <div
          className={show === "recommended" ? "info-options" : null}
          onClick={() => setShow("recommended")}
        >
          Recommended
        </div>
        <div
          className={show === "overview" ? "info-options" : null}
          onClick={() => setShow("overview")}
        >
          Overview
        </div>
        <div
          className={show === "genres" ? "info-options" : null}
          onClick={() => setShow("genres")}
        >
          Genres
        </div>
        <div
          className={show === "revenue" ? "info-options" : null}
          onClick={() => setShow("revenue")}
        >
          Revenue
        </div>
      </div>
      <div className="overview ">
        {show === "overview" ? (
          <div className="overview-content slide-in-fwd-center">
            <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>
              Storyline
            </h1>{" "}
            <h2 className="story">{data.overview}</h2>{" "}
          </div>
        ) : null}
      </div>
      <div className="cast">
        {show === "cast" ? (
          <div className="slide-in-fwd-center ">
            {" "}
            <Cast cast={crew} />{" "}
          </div>
        ) : null}
      </div>
      <div className="genre">
        {show === "genres" ? (
          <div className="slide-in-fwd-center">
            {data.genres.map((genre, index) => {
              return <h2 key={index}>▶{genre.name}</h2>;
            })}
          </div>
        ) : null}
      </div>
      <div className="revenue">
        {show === "revenue" ? (
          <div className="revenue-content slide-in-fwd-center">
            {" "}
            {data.revenue !== 0 ? (
              <h2 style={{ textAlign: "center" }}>
                Total Box Office Collection:
                {numeral(data.revenue).format("$ 0,0[.]00")}
              </h2>
            ) : (
              <h2 style={{ textAlign: "center" }}>
                Currently Unavailable
                <br /> Check back later !
              </h2>
            )}{" "}
          </div>
        ) : null}
      </div>
      <div className="recommended">
        {show === "recommended" ? (
          <div className="slide-in-fwd-center">
            {recommended.results.length !== 0 && (
              <h1 className="recommendation-heading">
                If you liked this then Check out...
              </h1>
            )}
            <Recommendations data={recommended.results.slice(0, 10)} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MovieInfo;
