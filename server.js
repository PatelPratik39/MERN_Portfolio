const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
// const nodemailer = require("nodemailer");
// const { s } = require("framer-motion/client");

// dotenv configuration
dotenv.config();

// rest object
const app = express();
// const transporter = nodemailer.createTransport({
//   service: "gmail",
// })


//Middleware
app.use(cors());
app.use(express.json());

// static files access  //removed this line in production
// 

console.log("Starting server...");
console.log("Current directory:", __dirname);

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// Serve static files from React build folder
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("/health", (req, res) => {
  res.send("Server is alive");
});


// PORT
const PORT = process.env.PORT || 3000;

// Listen
app.listen(PORT, () => {
  console.log(`App is Running at PORT ${PORT}`);
});
