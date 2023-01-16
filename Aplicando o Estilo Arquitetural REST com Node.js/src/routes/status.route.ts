import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
const statusRoute = Router();

statusRoute.get(
  "/status",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  }
);

export default statusRoute;
