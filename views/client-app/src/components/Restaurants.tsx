import React, { FC } from "react";
import "./Restaurants.css";
import { getArrivingTime, getRestaurantPeYaLink } from "../utils";
import { Restaurant } from "../interfaces";

interface Props {
  restaurants: Restaurant[];
}
const Restaurants: FC<Props> = ({ restaurants }) => {
  return (
    <div className="Restaurants-container">
      {restaurants.map(
        ({ name, ratingScore, deliveryTimeMaxMinutes, link, logo }) => (
          <div className="Restaurant-card">
            <img
              className="Restaurant-logo"
              src={"https://d1v73nxuzaqxgd.cloudfront.net/restaurants/" + logo}
              alt={name + " logo"}
            />
            <div className="RestaurantInfo-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={getRestaurantPeYaLink(link)}
              >
                <h1>{name}</h1>
              </a>
              <p>Rating {ratingScore}</p>
              <p>
                Hora máxima estimada de llegada:{" "}
                {getArrivingTime(deliveryTimeMaxMinutes)}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Restaurants;
