const MedicalHistoryModel = require("../models/MedicalHistoryModel");

const createMedicalHistory = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.create(req.body);
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const getMedicalHistoryList = async (req, res) => {
  try {
    const medicalHistoryList = await MedicalHistoryModel.find();
    res.status(200).json(medicalHistoryList);
  } catch (err) {
    console.log(err);
  }
};

const getMedicalHistoryById = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.findById(req.params.id);
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const deleteMedicalHistoryById = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const updateMedicalHistoryById = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const getMedicalHistoryListByPetId = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.find({
      petId: req.body.petId,
    });
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createMedicalHistory,
  getMedicalHistoryList,
  getMedicalHistoryById,
  deleteMedicalHistoryById,
  updateMedicalHistoryById,
  getMedicalHistoryListByPetId,
};
