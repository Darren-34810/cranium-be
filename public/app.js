import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/AuthRoutes.js';
dotenv.config();
const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));          // Future credential from client / API GAteway
app.use(cookieParser());  // Get access to cookie
app.use(express.json());  // JSON 

app.use('/auth', authRoutes);

app.listen(4001, () => {
  console.log('4001 - Public Service');
})

// const express = require('express');

// const app = express();

// app.listen(4001, () => {
//   console.log('4001 - Public Services');
// });
