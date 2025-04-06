require('module-alias/register')
const express = require("express")
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const { createServer } = require("http");
const cors = require("cors")
dotenv.config();
const app = express();
const https = createServer(app);

const apiRoute = require('@/routes')

const PORT = process.env.PORT ?? 8000

mongoose
  .connect(`${process.env.MongoDB}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))

app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, sessions, etc.)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD'], // Allow necessary methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allow necessary headers
}));


app.use(express.json());


app.use('/api', apiRoute)

https.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })