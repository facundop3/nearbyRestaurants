import React from "react";
import "./NavBar.css";
import { User } from "../interfaces";
const NavBar = (props: { user: User | null }) => {
  const name = props.user?.name;
  return <div className="NavBar-container">{name && <h1>{name}</h1>}</div>;
};

export default NavBar;
