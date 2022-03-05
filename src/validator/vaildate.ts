import Joi from "joi";
import { Response, NextFunction } from "express";
import Request from "../types/Request";

export default (validator: Joi.ObjectSchema<any>) =>
  async function (req: Request, res: Response, next: NextFunction) {
    const validated = await validator.validateAsync(req.body);
    req.body = validated;
    next();
  };
