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
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// PORT
const PORT = process.env.PORT || 3000;

// Listen
app.listen(PORT, () => {
  console.log(`App is Running at PORT ${PORT}`);
});
