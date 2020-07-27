import React, { useState, useEffect, FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  getUserPosition,
  getRestaurants,
  parseCoordinates,
  sortByratingScore,
} from "../utils";
import { Coords, User, Restaurant } from "../interfaces";

const containerStyle = {
  width: "70%",
  height: "93vh",
};

interface Props {
  user: User | null;
  restaurants: Restaurant[];
  setRestaurants: (r: Restaurant[]) => void;
  urlCoords: Coords;
}

const MyComponent: FC<Props> = (props: any) => {
  const { user, restaurants, setRestaurants, urlCoords } = props;
  const [position, setPosition] = useState<Coords>(urlCoords);
  const handleMapClick = (ev: any) => {
    const lat = ev.latLng.lat();
    const lng = ev.latLng.lng();
    setPosition({ lat, lng });
  };
  useEffect(() => {
    getUserPosition().then(({ coords }: any) => {
      // If the coords are given by the url we don't call setPosition with user position coords
      const nextCoords = urlCoords.lat || urlCoords.lng ? urlCoords : coords;
      setPosition(nextCoords);
    });
  }, []);
  useEffect(() => {
    setPosition(urlCoords);
  }, [urlCoords]);

  useEffect(() => {
    getRestaurants(user, position)
      .then(({ data }) => {
        console.log(data);
        setRestaurants(sortByratingScore(data.data));
      })
      .catch((err) => console.log(err));
  }, [position, user]);
  return (
    <LoadScript googleMapsApiKey="AIzaSyADj2G0wNcasYrFvrLnoMYkmw8L6V1AR2M">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={13}
        onClick={handleMapClick}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {restaurants?.map(({ coordinates }: { coordinates: string }) => {
            return <Marker position={parseCoordinates(coordinates)} />;
          })}
          <Marker position={position} />
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MyComponent);
