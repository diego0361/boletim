import AppError from "@shared/Error/AppError";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new AppError(`${errors.array()[0].param} - ${errors.array()[0].msg}`);
  }
  next()
}