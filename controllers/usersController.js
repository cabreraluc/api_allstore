const usersModel = require("../models/Users");

const registerUser = async (req, res) => {
  try {
    const userEmailRegistered = await usersModel.findOne({
      email: req.body.email,
    });

    console.log(userEmailRegistered);

    if (!userEmailRegistered) {
      const user = await usersModel.create(req.body);
      return res.status(200).json(user);
    } else {
      return res.status(400).json({ error: "Email ya registrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await usersModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json({ error: "Usuario no registrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
