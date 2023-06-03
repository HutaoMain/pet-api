const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");

const categoryRouter = require("./routes/CategoryRouter");

dotEnv.config(); // use to load the variables in the env file

const app = express();
app.use(express.json()); // automatically parse all incoming request into json format

app.use(cors()); // use to enable cross origin resource sharing, transmitting http headers

app.get("/sample", (req, res) => {
  res.send("sample");
  console.log("sample");
});

//mongoose connection here
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

app.use("/api/category", categoryRouter);

app.listen(5000, () => {
  connect();
  console.log("server is listening to port 5000");
});
