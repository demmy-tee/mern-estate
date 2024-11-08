import express from 'express';
const app = express();
import dotenv from'dotenv';
import router from './routes/userRoutes.js';
import authRouter from './routes/authRoute.js'
import mongoose from 'mongoose'
dotenv.config()

const dbURI = process.env.URI

mongoose.connect(dbURI)
  .then(() => console.log('connected to mongoDB database'))
  .catch(err=> console.error(err)
)
  app.use(express.json())
app.use(authRouter)
app.use(router);

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode)
    .json({
      sucess: false,
      statusCode,
      message
    });
});







const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}`)
)