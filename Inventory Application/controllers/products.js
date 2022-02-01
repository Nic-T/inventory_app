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
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id);
    res.json(product);
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

const updateProduct = async (req, res) => {
  try {
    const { name, description, url } = req.body;
    const id = req.params.id;
    const updatedProduct = await Product.update(
      {
        description: description,
        name: name,
        url: url,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json("Product updated succesfully");
  } catch (err) {
    console.error(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteProduct = await Product.destroy({
      where: {
        id: id,
      },
    });
    res.json("Product deleted sucesfully");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
