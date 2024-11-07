import express from 'express'
const router = express.Router();
import { test } from '../controllers/userController.js';


router.route('/test')
  .get(test)

export default router