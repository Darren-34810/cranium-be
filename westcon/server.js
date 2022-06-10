import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './src/models/index.js';
import westconRoutes from './src/routes/UserWestconRoutes.js';

dotenv.config();

// console.log(process.env.MAILGUN_API_KEY);

const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// Parsing body in the request as JSON Object
app.use(express.json());
// Parsing Requst Object as string / arrays
app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync();

app.use('/api/westcon', westconRoutes);

app.listen(4000, () => {
  console.log('4000 - Westcon Service');
});


// https://dev.to/richienabuk/setting-up-express-js-rest-api-postgres-and-sequelize-orm-with-es6-4m08
