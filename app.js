const express = require("express");
const productRoutes = require("./routes/product");
const usersRoutes = require("./routes/users");
const favouritesRoutes = require("./routes/favourites");
const cartRoutes = require("./routes/cart");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use("/v1", productRoutes);
app.use("/v1", usersRoutes);
app.use("/v1", favouritesRoutes);
app.use("/v1", cartRoutes);

module.exports = app;
