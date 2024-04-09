const userSignup = require("../controller/userController");
const userLogin = require("../controller/userLogin");
const getProducts = require("../controller/productController");
const express = require("express");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);


router.get("/products",getProducts);
module.exports = router;
