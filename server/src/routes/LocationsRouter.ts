import { Router } from "express";
import {
  getAll,
  getOneByName,
  createNew,
  deleteAllWithName,
} from "../controllers/LocationController";

const router = Router();

router.get("/", getAll);
router.get("/:name", getOneByName);
router.post("/", createNew);
router.delete("/:name", deleteAllWithName);

export { router as locationRouter };
