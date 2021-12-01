import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes/routes'

import '@shared/typeorm';
import AppError from './Error/AppError';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  console.log(error.message)
  
  return response.status(500).json({
    success: false,
    message: 'internal server error',
  });
})

app.listen(process.env.APP_PRIVATE_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333! 🏆');
});