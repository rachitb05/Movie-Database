import React from "react";
import "./Cast.css";
import NoImg from "./noimg.jpg";
function Cast({ cast }) {
  return (
    <div className="cast-container">
      {cast.map((member) => (
        <div className="cast-details">
        <div className="profile-pic-div">
          {member.profile_path === null || member.profile_path === undefined ? (
            <img className="profile-pic" src={NoImg} alt="no img"  style={{height:"278px",width:"185px"}} />
          ) : (
            <img
              className="profile-pic"
              src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
              alt="profile pic"
             
            />
          )}
          </div>
          <h3 className="name">{member.name}</h3>
          <p style={{textAlign:"center"}}>as</p>
          <h4 className="character">{member.character}</h4>
        </div>
      ))}
    </div>
  );
}

export default Cast;
