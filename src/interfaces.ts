export interface User {
  name: string;
  lastName: string;
  Authorization: string;
  id: number;
  country: { id: string };
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface Restaurant {
  coordinates: string;
  deliveryTimeMaxMinutes: string;
  link: string;
  logo: string;
  name: string;
  opened: number;
  ratingScore: string;
}
