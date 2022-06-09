import express from 'express';
import * as westconController from '../controllers/UserWestconController.js';

const westconRoutes = express.Router();

westconRoutes.post('/create-ticket', westconController.createTicket);

export default westconRoutes;