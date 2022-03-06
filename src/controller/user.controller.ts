import User, { FindByCredentials } from "../models/user.model";
import Request from "../types/Request";
import { Response } from "express";
import HttpStatusCodes from "http-status-codes";

export const signup = async (req: Request, res: Response) => {
  try {
    const user = new User({ ...req.body });
    const token = await user.generateAuthToken();
    res.status(HttpStatusCodes.CREATED).send({ user, token });
  } catch (error) {
    res.status(HttpStatusCodes.BAD_GATEWAY).send({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await FindByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(HttpStatusCodes.OK).send({ user, token });
  } catch (error) {
    res.status(HttpStatusCodes.BAD_GATEWAY).send({ error: error.message });
  }
};