const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config()

const dbURI = process.env.URI

mongoose.connect(dbURI)
  .then(() => console.log('connected to mongoDB database'))
  .catch(err=> console.error(err)
  )








const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}`)
)