require("dotenv").config();
const cors=require("cors")
const express = require("express");
const app = express();
const port = +process.env.PORT || 3000;
const indexRouter = require("./routes");
const { mongoose } = require("mongoose");

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("DATABASE CONNECTED !!!");
});
app.use(cors());
app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something is wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
