const ProductModel = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};

const getProductList = async (req, res) => {
  try {
    const productList = await ProductModel.find();
    res.status(200).json(productList);
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};

const updateProductById = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  deleteProductById,
  updateProductById,
};
