import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import westconRoutes from './routes/UserWestconRoutes.js'

dotenv.config();

const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.json());  // Parsing body in the request as JSON Object
// app.use(express.urlencoded({ extended: true }));  // Parsing Requst Object as string / arrays

app.use('/westcon', westconRoutes);


app.listen(4000, () => {
  console.log('4000 - Westcon Service');
});