require('module-alias/register')
const express = require("express")
const { config } = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const { createServer } = require("http");
const cors = require("cors")
config({ path: './.env' })
const app = express();
const https = createServer(app);

// const apiRoute = require('@/routes')
const apiRoute = require('@/routes')

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT ?? 8000

mongoose
  .connect(`${process.env.MongoDB}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))


app.use('/api', apiRoute)

https.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })