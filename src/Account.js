import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Account.css"
function Account() {
  return (
    <div className="profile">
      {/* <FontAwesomeIcon icon={faUserCircle} size={"3x"} color="white"/> */}
      <AccountCircleIcon className="profile__icon"
        
      />
    </div>
  );
}

export default Account;
