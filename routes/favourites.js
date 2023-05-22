const express = require("express");
const {
  getFavourites,

  addProductToFavourites,
} = require("../controllers/favouritesController");

const router = express.Router();

router.get("/favourites/:id", getFavourites);
router.post("/addtofavourites", addProductToFavourites);

module.exports = router;
