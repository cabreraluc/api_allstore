const express = require("express");
const {
  getCart,

  addProductToCart,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/cart/:id", getCart);
router.post("/addtocart", addProductToCart);

module.exports = router;
