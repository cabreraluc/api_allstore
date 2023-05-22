const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavouritesSchema = Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Products",
    },

    users: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favourites", FavouritesSchema);
