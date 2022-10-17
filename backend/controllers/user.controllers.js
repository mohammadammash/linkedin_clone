const storeBase64AsImage_helperFunction = require("./helpers/storeImage.helpers");
const UserModel = require("../database/models/user.models.js");

const updateUser = async (req, res) => {
  const { name, country, profile_base64 } = req.body;
  if (!name || !country || !profile_base64) res.status(400).json({ message: "Invalid Data" });

  const { _id, email } = req.user;
  const profile_url = await storeBase64AsImage_helperFunction(profile_base64, email, "user");

  const result = await UserModel.findByIdAndUpdate(_id, { name, country, profile_url })
    .then(res.status(200).send({ message: "Success" }))
    .catch((err) => res.status(400).send(err.message));

  res.json({ result });
};

const userFollowCompany = (req, res) => {
  res.send("FolowCompanyyy");
};

module.exports = {
  updateUser,
  userFollowCompany,
};
