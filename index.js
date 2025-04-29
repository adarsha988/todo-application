require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const port = +process.env.PORT || 3000;
const indexRouter = require("./routes");
const { mongoose } = require("mongoose");

// MongoDB Connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DATABASE CONNECTED !!!");
  })
  .catch((err) => {
    console.error("DATABASE CONNECTION ERROR:", err);
  });

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3005",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Routes
app.use("/", indexRouter);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  err = err ? err.toString() : "Something is wrong...";
  res.status(500).json({ data: "", msg: err });
});

// Start the server
app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});