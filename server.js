const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv configuration
dotenv.config();

// rest object
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", function (req, res) {
  res.send("Welcome to Node Server");
});

// PORT
const PORT = process.env.PORT || 3000;

// Listen
app.listen(() => {
    console.log(`App is Running at PORT ${PORT}`);
    
});
