const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");

const CategoryRouter = require("./routes/CategoryRouter");
const ProductRouter = require("./routes/ProductRouter");
const PetRouter = require("./routes/PetRouter");
const StaffRouter = require("./routes/StaffRouter");
const AppointmentRouter = require("./routes/AppointmentRouter");
const MedicalHistoryRouter = require("./routes/MedicalHistoryRouter");
const UserRouter = require("./routes/UserRouter");
const Email = require("./routes/Email");

dotEnv.config(); // use to load the variables in the env file

const app = express();
app.use(express.json()); // automatically parse all incoming request into json format

app.use(cors("https://pet-shop-management-system.vercel.app")); // use to enable cross origin resource sharing, transmitting http headers

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
app.use("/api/pet", PetRouter);
app.use("/api/staff", StaffRouter);
app.use("/api/appointment", AppointmentRouter);
app.use("/api/medicalHistory", MedicalHistoryRouter);
app.use("/api/user", UserRouter);
app.use("/api/email", Email);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  connect();
  console.log(`server is listening to port ${port}`);
});
