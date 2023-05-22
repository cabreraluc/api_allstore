const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = Schema(
  {
    name: String,
    email: String,
    password: String,
    image: String,
    favourites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Favourites",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UsersSchema);
