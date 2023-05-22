const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db connected"));

async function connectDb({ host, port, dbName }) {
  const url = `mongodb+srv://cabreralucaspatricio:123@allstore2023.7opk11y.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(url, { useNewUrlParser: true });
}

module.exports = connectDb;
