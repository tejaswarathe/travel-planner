import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("List of users");
});
router.get("/:userId", (req: Request, res: Response) => {
  let userId = req.params.userId;
  res.send("Details of user with Id: " + userId);
});

export { router as userRouter };
