const { where } = require("sequelize/dist");
const { sequelize, Product } = require("../models");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (err) {
    console.error(err);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const product = await Product.findByPk(id);
  } catch (err) {
    console.error(err);
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, url } = req.body;
    const newProduct = await Product.create({ name, description, url });
    res.json(newProduct);
  } catch (err) {
    console.error(err);
  }
};

const updateProduct = (req, res) => {
  try {
    const { id, name, description, url } = req.body;
    const oldProduct = await Product.findPyPk(id);
  } catch (err) {
    console.error(err);
  }
};

const deleteProduct = (req, res) => {};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
