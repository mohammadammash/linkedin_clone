const bcrypt = require("bcrypt");
const loginUserHelperFunction = require("./helpers/loginUser.helpers");
const UserModel = require("../database/models/user.models");
const {CompanyModel} = require("../database/models/company.models");

const registerUser = async (req, res) => {
  const { name, email, profile_url, password, age, country } = req.body;

  try {
    const new_user = new UserModel();
    new_user.name = name;
    new_user.email = email;
    new_user.profile_url = profile_url;
    new_user.password = await bcrypt.hash(password, 10);
    new_user.age = age;
    new_user.country = country;

    await new_user.save();

    const result = await loginUserHelperFunction({ email, password });
    if (!result) res.status(400).send("Invalid Credentials");
    res.status(200).send(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const registerCompany = async (req, res) => {
  const { name, email, profile_url, password, offer, services, location } = req.body;

  try {
    const new_company = new CompanyModel();
    new_company.name = name;
    new_company.email = email;
    new_company.profile_url = profile_url;
    new_company.offer = offer;
    new_company.password = await bcrypt.hash(password, 10);
    new_company.location = location;
    new_company.services = services;

    await new_company.save();

    const result = await loginUserHelperFunction({ email, password });
    if (!result) res.status(400).send("Invalid Credentials");
    res.status(200).send(result);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
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
