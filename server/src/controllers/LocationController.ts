import { Request, Response } from "express";
import { LocationModel } from "../models/LocationModel";

export const getAll = (req: Request, res: Response) => {
  console.log("returning all locations");
  LocationModel.find()
    .then((locations) => {
      res.send(locations);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retriving locations",
      });
    });
};

export const getOneByName = (req: Request, res: Response) => {
  const locationName = req.params.name;
  LocationModel.findOne({
    name: locationName,
  })
    .then((location) => {
      res.send(location);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured" });
    });
};
const createModel = (data: any) => {
  return new LocationModel({
    name: data.name,
    country: data.country,
    description: data.description,
    latitude: data.latitude,
    longitude: data.longitude,
  });
};

export const createNew = (req: Request, res: Response) => {
  createModel(req.body)
    .save()
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};

export const deleteAllWithName = (req: Request, res: Response) => {
  const cityName = req.params.name;
  LocationModel.deleteOne({ name: cityName })
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};
