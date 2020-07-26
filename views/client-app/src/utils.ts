import axios from "axios";
const localStorageKey = "peya_user_data";

export const isValidEmail = (email: string): boolean =>
  /(.+)@(.+){2,}\.(.+){2,}/.test(email);

const getClientAccessToken = () =>
  document.getElementById("client_access_token")?.innerText;

export const getUserAccessToken = (email: string, password: string) => {
  if (isValidEmail(email) && password) {
    return axios.post("http://localhost:3030/login", {
      userName: email,
      password,
      Authorization: getClientAccessToken(),
    });
  }
  return Promise.reject("both fields are required");
};

export const getUserLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem(localStorageKey) || "null");
};

export const setUserLocalStorage = (user: object) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(user));
};

export const getUserPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getRestaurants = (user: any, point: any) => {
  const { Authorization } = user;
  const params = new URLSearchParams(point).toString();
  return axios.get("http://localhost:3030/restaurants?" + params, {
    headers: { Authorization },
  });
};

export const parseCoordinates = (coordinates: string) => {
  const [lat, lng] = coordinates.split(",").map(Number);
  return { lat, lng };
};

export const getArrivingTime = (maxDeliveryMinutes: number) => {
  const maxDeliveryMiliseconds = maxDeliveryMinutes * 60000;
  const currentDate = new Date();
  const arrivingDate = new Date(currentDate.getTime() + maxDeliveryMiliseconds);
  return `${arrivingDate.getHours()}:${arrivingDate.getMinutes()}`;
};

export const sortByratingScore = (restaurants: any) => {
  return restaurants
    .sort((restaurantA: any, restaurantB: any) =>
      restaurantA.ratingScore < restaurantB.ratingScore ? 1 : -1
    )
    .filter(({ opened }: { opened: number }) => opened);
};

export const getRestaurantPeYaLink = (link: string) => {
  return `https://www.pedidosya.com.uy/restaurantes/montevideo/${link}-menu`;
};
