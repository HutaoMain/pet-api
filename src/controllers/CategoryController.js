const categoryModel = require("../models/CategoryModel");

const createCategory = async (req, res) => {
  try {
    const category = await categoryModel.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

const findCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

const findAllCategories = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createCategory, findCategoryById, findAllCategories };
