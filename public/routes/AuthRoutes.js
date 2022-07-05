import express from 'express';
import * as authController from '../controllers/AuthController.js';

const authRoutes = express.Router();

authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);
authRoutes.delete('/logout', authController.logout);
authRoutes.get('/refreshToken', authController.refreshToken);

export default authRoutes;