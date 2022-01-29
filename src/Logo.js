import React from "react";
import LogoImg from "./movie_database_2.PNG";
import "./Logo.css";
import { useNavigate } from "react-router-dom";

function Logo() {
  let navigate = useNavigate();
  function handleClick(event) {
    navigate("/");
    // event.preventDefault();
  }
  return (
    <div className="logo">
      <img
        className="logo-img"
        src={LogoImg}
        alt="Logo"
        onClick={handleClick}
      />
    </div>
  );
}

export default Logo;
