import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import Header from "./Header";
import Footer from "./Footer";
import SpinnerLoader from "./SpinnerLoader";
import { useLocation } from "react-router-dom";
function MovieDetails() {
  const location = useLocation();
  const movieData = location.state.data;
  const [Crew, setCrew] = useState([]);
  // console.log(movieData);
  const movie_id = movieData.id;
  useEffect(() => {
    const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const getCrew = async () => {
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setCrew(data.cast);
        });
    };
    getCrew();
  }, [movie_id]);

  // console.log(movieData);
  // console.log(Crew);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      if (loading === false) {
        setLoading(true);
      }
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, [movie_id]);
  if (loading) return <SpinnerLoader />;
  else
    return (
      <div>
        {/* DO SET LOADING PAGE */}
        <Header />
        {Crew.map((member) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w185/${member.profile_path}`}
                alt="Cast Member"
              />
              <h1>{member.character}</h1>
              <h1>{member.name}</h1>
            </div>
          );
        })}
        <Footer />
      </div>
    );
}

export default MovieDetails;
