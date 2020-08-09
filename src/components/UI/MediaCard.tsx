import React, { FC } from "react";
import Card from "./Card";
import "./MediaCard.css";

interface Props {
  title: string;
  titleLink: string;
  imageUrl: string;
  imageAlt: string;
  middleText?: string;
  bottomText?: string;
}
const MediaCard: FC<Props> = ({
  title,
  middleText,
  bottomText,
  titleLink,
  imageAlt,
  imageUrl,
}) => {
  return (
    <Card>
      <img className="UI-MediaCard-logo" src={imageUrl} alt={imageAlt} />
      <div className="UI-MediaCard-Info-container">
        <a target="_blank" rel="noopener noreferrer" href={titleLink}>
          <h1>{title}</h1>
        </a>
        <p>{middleText}</p>
        <p>{bottomText}</p>
      </div>
    </Card>
  );
};

export default MediaCard;
