import { Router } from "express";
import { getAll, getOneByName } from "../controllers/LocationController";

const router = Router();

router.get("/", getAll);
router.get("/:name", getOneByName);
// router.post("/", locationsController.create);

export { router as locationRouter };
