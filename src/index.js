import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Search from "./SearchResult";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>{" "}
        <Route exact path="/search" element={<Search />}></Route>{" "}
        <Route exact path="/movie" element={<MovieDetails />}></Route>{" "}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
