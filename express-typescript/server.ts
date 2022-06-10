import express, { Express, Request, Response } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server is running');
});

app.listen(4001, () => {
  console.log('4001 - Express Typescript');
});