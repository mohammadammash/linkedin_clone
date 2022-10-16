const UserModel = require("../database/models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    return loginUser(req.body);
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
  let user_type = "";

  const user = await UserModel.findOne({ email }).select("+password");
  if (user) {
    user_type = "user";
  } else {
    const user = await CompanyModel.findOne({ email }).select("+password");
    if (!user) return res.status(404).json({ message: "Invalid Credentials" });
    user_type = "company";
  }

  const validCredentials = bcrypt.compareSync(password, user.password);
  if (!validCredentials) return res.status(404).json({ message: "Invalid Credentials" });

  const token = jwt.sign({ email: user.email, name: user.name, user_type }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  res.status(200).send(token);
};

module.exports = {
  loginUser,
  registerUser,
  registerCompany,
};
