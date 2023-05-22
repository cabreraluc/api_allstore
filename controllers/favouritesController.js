const favouritesModel = require("../models/Favourites");
const ObjectId = require("mongoose");

// getFavourites,
// deleteProductFromFavourites,

const addProductToFavourites = async (req, res) => {
  const { product, user } = req.body;
  try {
    const isTheProduct = await favouritesModel.findOne({
      product: product,
      users: user,
    });

    if (isTheProduct) {
      await favouritesModel.findOneAndDelete({
        product: product,
        users: user,
      });

      return res.status(200).json({ response: "deleted" });
    } else {
      await favouritesModel.create({
        product: product,
        users: user,
      });

      return res.status(200).json({ response: "created" });
    }

    console.log(product, user);
  } catch (error) {
    console.log(error);
  }
};

const getFavourites = async (req, res) => {
  try {
    const { id } = req.params;
    let favourites = await favouritesModel
      .find({ users: { _id: id } })
      .populate("product")
      .populate("users");
    return res.status(200).json(favourites);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProductToFavourites, getFavourites };
