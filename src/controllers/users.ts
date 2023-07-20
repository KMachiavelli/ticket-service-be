import { Request, Response } from "express";
import User from "../models/users";

const getUser = async (req: Request, res: Response) => {
  const { user } = res as any;
  res.json({ user });
};

const addUser = async (req: Request, res: Response) => {
  console.log("SSS");

  const { username, password } = req.body;
  const user = new User({
    username,
    password,
  });
  try {
    await user.save();
    res.sendStatus(201);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const patchUser = async (req: Request, res: Response) => {};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {};

export default { getUser, addUser, deleteUser, patchUser, updateUser };
