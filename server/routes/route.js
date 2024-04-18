const userSignup = require("../controller/userController");
const userLogin = require("../controller/userLogin");
const getProducts = require("../controller/productController");
const getProduct = require("../controller/eachProductController");
const express = require("express");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);


router.get("/products",getProducts);
router.get("/product/:id",getProduct);
module.exports = router;
