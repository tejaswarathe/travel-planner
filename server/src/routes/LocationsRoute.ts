import { Router } from "express";
import { getAll, getOneByName } from "../controllers/LocationController";

// get a list of locations
// get one location
// add new location
const router = Router();

router.get("/", getAll);
router.get("/:name", getOneByName);
// router.post("/", locationsController.create);

export = router;
module.exports = router;
