import React, { FC } from "react";
import "./Card.css";

interface Props {
  children?: React.ReactNode;
}
const Card: FC<Props> = ({ children }) => {
  return <div className="UI-card">{children}</div>;
};

export default Card;
