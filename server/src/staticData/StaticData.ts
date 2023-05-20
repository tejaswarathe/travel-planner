import Location from "../models/LocationModel";

const cities: Location[] = [
  new Location({
    name: "New York City",
    country: "United States",
    description: "The Big Apple",
    latitude: 40.7128,
    longitude: -74.006,
  }),
  new Location({
    name: "London",
    country: "United Kingdom",
    description: "The Great Smoke",
    latitude: 51.5074,
    longitude: -0.1278,
  }),
  new Location({
    name: "Paris",
    country: "France",
    description: "The City of Love",
    latitude: 48.8566,
    longitude: 2.3522,
  }),
  new Location({
    name: "Tokyo",
    country: "Japan",
    description: "The Capital of Japan",
    latitude: 35.6895,
    longitude: 139.6917,
  }),
  new Location({
    name: "Sydney",
    country: "Australia",
    description: "The Harbour City",
    latitude: -33.8651,
    longitude: 151.2099,
  }),
];

export default cities;
