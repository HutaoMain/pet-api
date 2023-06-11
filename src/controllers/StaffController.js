const StaffModel = require("../models/StaffModel");

const createStaff = async (req, res) => {
  try {
    const staff = await StaffModel.create(req.body);
    res.status(200).json(staff);
  } catch (err) {
    console.log(err);
  }
};

const getStaffList = async (req, res) => {
  try {
    const staffList = await StaffModel.find();
    res.status(200).json(staffList);
  } catch (err) {
    console.log(err);
  }
};

const getStaffById = async (req, res) => {
  try {
    const staff = await StaffModel.findById(req.params.id);
    res.status(200).json(staff);
  } catch (err) {
    console.log(err);
  }
};

const deleteStaffById = async (req, res) => {
  try {
    const staff = await StaffModel.findByIdAndDelete(req.params.id);
    res.status(200).json(staff);
  } catch (err) {
    console.log(err);
  }
};

const updateStaffById = async (req, res) => {
  try {
    const staff = await StaffModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(staff);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createStaff,
  getStaffById,
  getStaffList,
  deleteStaffById,
  updateStaffById,
};
