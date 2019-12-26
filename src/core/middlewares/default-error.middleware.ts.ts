import { Response, NextFunction, Request } from "express";
import { ErrorRequestHandler } from "express-serve-static-core";
import { HttpException } from "core/common/http-exception";
export const DefaultErrorMiddleware: ErrorRequestHandler = async (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  const error = err as Error;
  if (err instanceof HttpException) {
    res.status(400).send((error as HttpException).messages);
    return;
  }
  console.log("INTERNAL_SERVER_ERROR_500: ", error);
  //TODO: log this error
  res.sendStatus(500).send("Internal Server Error!");
};
