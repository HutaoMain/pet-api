const router = require("express").Router();
const AppointmentController = require("../controllers/AppointmentController");

router.post("/create", AppointmentController.createAppointment);

router.get("/list", AppointmentController.getAppointmentList);

router.get("/:id", AppointmentController.getAppointmentById);

router.delete("/delete/:id", AppointmentController.deleteAppointmentById);

router.put("/update/:id", AppointmentController.updateAppointmentById);

module.exports = router;
