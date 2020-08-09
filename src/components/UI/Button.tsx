import React, { FC } from "react";
import "./Button.css";

interface Props {
  onClick?: (ev: any) => void;
  children: React.ReactNode;
}
const Button: FC<Props> = ({ onClick = () => {}, children }) => {
  return (
    <button className="UI-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
