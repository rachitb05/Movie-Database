import React from "react";
import LogoImg from "./movie_database_2.PNG";
import "./Logo.css"
function Logo() {
  return (
    <div className="logo">
      <img className="logo-img"  src={LogoImg} alt="Logo" />
    </div>
  );
}

export default Logo;
