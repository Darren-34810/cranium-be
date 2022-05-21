import express from 'express';
import * as authController from '../controller/AuthController.js';

const authRoutes = express.Router();

authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);
authRoutes.delete('/logout', authController.logout);

export default authRoutes;