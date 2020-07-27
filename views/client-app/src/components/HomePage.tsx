import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Map from "./Map";
import Restaurants from "./Restaurants";
import NavBar from "./NavBar";
import "./HomePage.css";
import { User, Restaurant } from "../interfaces";

const defaultCoords = {
  lat: -34.9043524,
  lng: -56.1690071,
};
const HomePage = ({ user }: { user: User | null }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const { search } = useLocation();
  const [coords, setCoords] = useState(defaultCoords);
  useEffect(() => {
    const query = new URLSearchParams(search);
    const lat = Number(query.get("lat"));
    const lng = Number(query.get("lng"));
    setCoords({ lat, lng });
  }, [search]);

  useEffect(() => {
    console.log("coords: ");
    console.log(coords);
  }, [coords]);
  return (
    <div>
      <NavBar user={user} />
      <div className="HomePage-container">
        <Restaurants restaurants={restaurants} />
        <Map
          user={user}
          restaurants={restaurants}
          setRestaurants={setRestaurants}
          urlCoords={coords}
        />
      </div>
    </div>
  );
};

export default HomePage;
