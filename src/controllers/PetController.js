const PetModel = require("../models/PetModel");

const createPet = async (req, res) => {
  try {
    const pet = await PetModel.create(req.body);
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
  }
};

const getPetList = async (req, res) => {
  try {
    const petList = await PetModel.find();
    res.status(200).json(petList);
  } catch (err) {
    console.log(err);
  }
};

const getPetById = async (req, res) => {
  try {
    const pet = await PetModel.findById(req.params.id);
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
  }
};

const deletePetById = async (req, res) => {
  try {
    const pet = await PetModel.findByIdAndDelete(req.params.id);
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
  }
};

const updatePetById = async (req, res) => {
  try {
    const pet = await PetModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(pet);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createPet,
  getPetList,
  getPetById,
  deletePetById,
  updatePetById,
};
