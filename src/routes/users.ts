import express from "express";
import usersController from "../controllers/users";
import { getUserById } from "../middleware/users";

const router = express.Router();

router.post("/", usersController.addUser);

router
  .route("/:id")
  .get(getUserById, usersController.getUser)
  .patch(getUserById, usersController.patchUser)
  .put(getUserById, usersController.updateUser)
  .delete(getUserById, usersController.deleteUser);

export default router;
