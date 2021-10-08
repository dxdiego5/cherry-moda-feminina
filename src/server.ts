import app from './app';

import '../src/container/index';

import { NextFunction, Request, Response } from 'express';
import { AppError } from './config/errors/AppError';

// instance of error initialize middleware
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: 'Error',
            message: `Internal server error - ${err.message}`,
        });
    }
);

// start server
app.listen(process.env.PORT_SERVER_LISTEN, () => {
    console.log('-----------------💀--------------------');
    console.log(
        '====== SERVER RUNNING PORT',
        process.env.PORT_SERVER_LISTEN,
        '======='
    );
    console.log('---------------------------------------');
    console.log('          -----P.L.A.Y-----');
});
