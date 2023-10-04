import { NextFunction, Request, Response } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: "The user is not authorized" });
  }

  if (err.name === 'ValidationError') {
    return res.status(401).json({ message: err });
  }

  // Default to 500 server error
  return res.status(500).json(err);
}

export default errorHandler;
