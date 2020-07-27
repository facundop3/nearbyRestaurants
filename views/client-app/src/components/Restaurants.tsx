import React, { FC } from "react";
import "./Restaurants.css";
import { getArrivingTime, getRestaurantPeYaLink } from "../utils";
import { MediaCard } from "./UI";
import { Restaurant } from "../interfaces";

interface Props {
  restaurants: Restaurant[];
}
const Restaurants: FC<Props> = ({ restaurants }) => {
  return (
    <div className="Restaurants-container">
      {restaurants.map(
        ({ name, ratingScore, deliveryTimeMaxMinutes, link, logo }) => (
          <MediaCard
            imageUrl={
              "https://d1v73nxuzaqxgd.cloudfront.net/restaurants/" + logo
            }
            imageAlt={name + " logo"}
            title={name}
            titleLink={getRestaurantPeYaLink(link)}
            middleText={`Rating ${ratingScore}`}
            bottomText={`Hora máxima estimada de llegada: ${getArrivingTime(
              deliveryTimeMaxMinutes
            )}`}
          />
        )
      )}
    </div>
  );
};

export default Restaurants;
