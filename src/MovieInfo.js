import React, { useState } from "react";
import Cast from "./Cast";
import "./MovieInfo.css";
import Recommendations from "./Recommendations";
function MovieInfo({ crew, data, recommended }) {
  const [show, setShow] = useState("");
  return (
    <div>
      <h1 className="heading">Details</h1>
      <div className="info">
        <div
          className={show === "overview" ? "info-options" : null}
          onClick={() => setShow("overview")}
        >
          Overview
        </div>
        <div
          className={show === "cast" ? "info-options" : null}
          onClick={() => setShow("cast")}
        >
          Cast
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
            <h1 style={{ textAlign: "center" }}>Storyline</h1>{" "}
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
            {data.genres.map((genre) => {
              return <h2>▶{genre.name}</h2>;
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
                Total Box Office Collection:${data.revenue}
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
      <Recommendations data={recommended.results.slice(0,10)} />
    </div>
  );
}

export default MovieInfo;
