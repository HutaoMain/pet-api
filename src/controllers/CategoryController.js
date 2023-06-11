const CategoryModel = require("../models/CategoryModel");

const createCategory = async (req, res) => {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

const getCategoryList = async (req, res) => {
  try {
    const categoryList = await CategoryModel.find();
    res.status(200).json(categoryList);
  } catch (err) {
    console.log(err);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
};
