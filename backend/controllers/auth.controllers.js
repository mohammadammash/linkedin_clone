const UserModel = require("../database/models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginUserHelperFunction = require("./helpers/loginUser.helpers");

const registerUser = async (req, res) => {
  const { name, email, profile_url, password, age, country } = req.body;
  //validating no missing credentials
  if (!name || !email || !profile_url || !password || !age || !country) res.send("Missing credentials");

  try {
    const new_user = new UserModel();
    new_user.name = name;
    new_user.email = email;
    new_user.profile_url = profile_url;
    new_user.password = await bcrypt.hash(password, 10);
    new_user.age = age;
    new_user.country = country;

    await new_user.save();
    const req = {};

    const result = await loginUserHelperFunction({ email, password });
    if (!result) res.status(400).send("Invalid Credentials");
    res.status(200).send(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const registerCompany = (req, res) => {
  res.send("registerCompanyyy");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUserHelperFunction({ email, password });

  if (!result) res.status(400).send("Invalid Credentials");
  res.status(200).send(result);
};

module.exports = {
  loginUser,
  registerUser,
  registerCompany,
};
