const productModel = require('../models/products');

const eachProductController = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id)
    const productsData = await productModel.findOne({id:id});
    if (productsData) {
      return res.status(200).json(productsData);
    }
    else {
      return res.status(401).json({ message: "No products are present!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = eachProductController;