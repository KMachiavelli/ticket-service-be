import { NextFunction } from "express";
import { Request, Response } from "express";
import User from "../models/users";

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  let user;
  try {
    user = await User.findById(id);
    if (user === null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }

  (res as any).user = user;
  next();
};
