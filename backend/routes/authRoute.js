import express from 'express';
import { signup } from '../controllers/authControllers.js';
const router = express.Router();
router.route('/api/auth/signup')
  .post(signup)

  export default router