import { Router, Request, Response } from "express";
import { locationRouter } from "./LocationsRouter";
import { userRouter } from "./UserRouter";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("This is the central route");
});

router.use("/location", locationRouter);
router.use("/users", userRouter);

export { router as router };
