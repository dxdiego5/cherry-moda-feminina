/**
 * initialize dontENV
 */
require('dotenv/config');

import 'express-async-errors';
import 'express-async-error';

import '../database/infra/typeorm/src/index';
import routes from '../src/routes/index.routes';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
