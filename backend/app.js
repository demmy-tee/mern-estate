import express from 'express';
const app = express();
import dotenv from'dotenv';
import router from './routes/userRoutes.js';
import mongoose from 'mongoose'
dotenv.config()

const dbURI = process.env.URI

mongoose.connect(dbURI)
  .then(() => console.log('connected to mongoDB database'))
  .catch(err=> console.error(err)
  )

app.use(router);







const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}`)
)