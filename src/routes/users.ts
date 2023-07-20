import express, { Request, Response } from "express";
import usersController from "../controllers/users";
import { getUserById } from "../middleware/users";

const router = express.Router();

router.post("/", usersController.addUser);

router.get("/cookie", (req: Request, res: Response) => {
  res
    .cookie("cookie1", "cookievalue", {
      sameSite: "strict",
      domain: ".onrender.com",
    })
    .send();
});

router.get("/cookie/test", (req: Request, res: Response) => {
  res.send();
});

router
  .route("/:id")
  .get(getUserById, usersController.getUser)
  .patch(getUserById, usersController.patchUser)
  .put(getUserById, usersController.updateUser)
  .delete(getUserById, usersController.deleteUser);

export default router;
