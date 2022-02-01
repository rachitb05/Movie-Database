import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import Header from "./Header";
import Footer from "./Footer";
import MovieTitle from "./MovieTitle";
import MovieImage from "./MovieImage";
import MovieInfo from "./MovieInfo";
import SpinnerLoader from "./SpinnerLoader";
import ScrollButton from "./ScrollButton";
import { useLocation } from "react-router-dom";
function MovieDetails() {
  const location = useLocation();
  const movie_id = location.state.id;
  const [movieData, setMovieData] = useState({});
  const [Crew, setCrew] = useState([]);
  const [Images, setImages] = useState({});
  const [Recommended, setRecommended] = useState({});

  useEffect(() => {
    const getMovieData = async () => {
      const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setMovieData(data);
          // console.log(data);
        });
    };
    const getCrew = async () => {
      const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setCrew(data.cast.slice(0, 25));
        });
    };
    const getImages = async () => {
      const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=en-US,&include_image_language=en,null`;
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setImages(data);
        });
    };
    const getRecommended = async () => {
      const baseurl = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
      await fetch(baseurl)
        .then((response) => response.json())
        .then((data) => {
          setRecommended(data);
        });
    };
    getMovieData();
    getCrew();
    getImages();
    getRecommended();
    // return () => {
    //   setMovieData({});
    //   setCrew([]);
    //   setImages({});
    //   setRecommended({});
    // };
  }, [movie_id]);

  // console.log(movieData);
  // console.log(Crew);
  // console.log(Images);
  // console.log(Recommended);

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
        <Header />
        <MovieTitle
          title={movieData.title}
          rating={movieData.vote_average}
          votes={movieData.vote_count}
        />
        <MovieImage images={Images} />
        <MovieInfo crew={Crew} data={movieData} recommended={Recommended} />
        <ScrollButton />
        <Footer />
      </div>
    );
}

export default MovieDetails;
