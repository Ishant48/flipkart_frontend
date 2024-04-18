const productModel = require('../models/products');

const getProducts = async (req, res, next) => {
  try {
    const productsData = await productModel.find({});

    if (productsData) {
      return res.status(200).json({ message: productsData });
    }
    else {
      return res.status(401).json({ message: "No products are present!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProducts;