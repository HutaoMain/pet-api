const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");

const CategoryRouter = require("./routes/CategoryRouter");
const ProductRouter = require("./routes/ProductRouter");

dotEnv.config(); // use to load the variables in the env file

const app = express();
app.use(express.json()); // automatically parse all incoming request into json format

app.use(cors("*")); // use to enable cross origin resource sharing, transmitting http headers

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

app.use("/api/category", CategoryRouter);
app.use("/api/product", ProductRouter);

const PORT = 5001;

app.listen(PORT, () => {
  connect();
  console.log(`server is listening to port ${PORT}`);
});
