const AppointmentModel = require("../models/AppointmentModel");

const createAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentModel.create(req.body);
    res.status(200).json(appointment);
  } catch (err) {
    console.log(err);
  }
};

const getAppointmentList = async (req, res) => {
  try {
    const appointmentList = await AppointmentModel.find();
    res.status(200).json(appointmentList);
  } catch (err) {
    console.log(err);
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findById(req.params.id);
    res.status(200).json(appointment);
  } catch (err) {
    console.log(err);
  }
};

const deleteAppointmentById = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findByIdAndDelete(req.params.id);
    res.status(200).json(appointment);
  } catch (err) {
    console.log(err);
  }
};

const updateAppointmentById = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(appointment);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createAppointment,
  getAppointmentList,
  getAppointmentById,
  deleteAppointmentById,
  updateAppointmentById,
};
