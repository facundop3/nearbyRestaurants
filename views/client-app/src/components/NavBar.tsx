import React from "react";
import "./NavBar.css";
const NavBar = (props: any) => {
  const {
    user: { name },
  } = props;
  return <div className="NavBar-container">{name && <h1>{name}</h1>}</div>;
};

export default NavBar;
