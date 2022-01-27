import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Account from "./Account";
import Mic from "./Mic";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      {" "}
      <Logo />
      <SearchBox>
        <Mic />
      </SearchBox>
      <Account />
    </div>
  );
}

export default Header;
