import { Schema, Document, model } from "mongoose";
import Location from "../interfaces/LocationInterface";

interface LocationModel extends Location, Document {}

const locationSchema = new Schema<LocationModel>({
  name: { type: String, required: true },
  country: { type: String, required: true },
  description: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const LocationModel = model<LocationModel>("Location", locationSchema);

export default LocationModel;
