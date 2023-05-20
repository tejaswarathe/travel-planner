import Location from "../models/LocationModel";
import { Request, Response } from "express";
import cities from "../staticData/StaticData";

export const getAll = (req: Request, res: Response) => {
  let allLocations: Location[] = cities;

  // const response = allLocations.map((city) => {
  //   "name": city.name,
  //   "country": city.country,
  //   "description": city.description,
  //   "latitude": city.latitude,
  //   "longitude": city.longitude,
  // });

  // console.log(response);

  console.log("returning all locations");
  const response = { data: allLocations };

  return res.send(response);
};

export const getOneByName = (req: any, res: any) => {
  let locationName = req.params.name;
  let response = "Details of Location: " + locationName;
  return res.json(response);
};

// exports.create = (req: any, res: any) => {
//   if (!req.body.text) {
//     return res.status(400).send({
//       message: "Improper Location Body",
//     });
//   }
//   const newLocation = new LocationSchema({
//     name: req.body.name,
//     googleMapsLink: req.body.googleMapsLink,
//     coordinates: req.body.coordinates,
//     description: req.body.description,
//     image: req.body.image,
//     reviews: req.body.reviews,
//     thingsToDo: req.body.thingsToDo,
//     placesToExplore: req.body.placesToExplore,
//   });
//   newLocation
//     .save()
//     .then((data: any) => {
//       res.sent(data);
//     })
//     .catch((err: any) => {
//       res.status(500).send({
//         message: err.message || "Some error occured",
//       });
//     });
// };
