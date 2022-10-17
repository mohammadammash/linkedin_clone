const storeBase64AsImage_helperFunction = require("./helpers/storeImage.helpers");
const UserModel = require("../database/models/user.models.js");
const { CompanyModel } = require("../database/models/company.models");
const JobModel = require("../database/models/job.models");

const updateUser = async (req, res) => {
  const { name, country, profile_base64 } = req.body;
  if (!name || !country || !profile_base64) res.status(400).send({ message: "Invalid Data" });

  const { _id, email } = req.user;
  const profile_url = await storeBase64AsImage_helperFunction(profile_base64, email, "user");

  const result = await UserModel.findByIdAndUpdate(_id, { name, country, profile_url })
    .then(res.status(200).send({ message: "Success" }))
    .catch((err) => res.status(400).send({ message: err.message }));

  res.json({ result });
};

const userFollowCompany = async (req, res) => {
  const { company_id } = req.body;
  if (!company_id) res.status(400).json({ message: "Invalid Data" });

  const { _id } = req.user;

  await UserModel.updateOne({ _id }, { $push: { followingCompanies: company_id } })
    .then((data) => res.status(200).send({ message: data }))
    .catch((err) => res.status(400).send({ message: err.message }));
};

const getAllJobs = async (req, res) => {
  const { _id } = req.user;
  if (!_id) res.status(400).send("Invalid Data");

  await JobModel.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err.message));
};

const searchAvailableJobs = (req, res) => {
  res.send("search Available jobs - user");
};

const applyForJob = (req, res) => {
  res.send("apply for job - user");
};

module.exports = {
  updateUser,
  userFollowCompany,
  getAllJobs,
  searchAvailableJobs,
  applyForJob,
};
