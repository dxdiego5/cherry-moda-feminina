import app from './app';

// import { NextFunction, Request, Response } from 'express';

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use((req, resp, next) => {
//   resp.set('Access-Control-Allow-Origin', '*');
//   next();
// });


app.listen(process.env.PORT_SERVER_LISTEN, () => {
    console.log("--------------------------------------------------------");
    console.log('START SERVER............');
    console.log("SERVER PORT", process.env.PORT_SERVER_LISTEN, ".......");
    console.log('RUNNING.................');
});



