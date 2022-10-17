const JobModel = require("../database/models/job.models.js");
const { CompanyModel } = require("../database/models/company.models");

const getownPostedJobs = async (req, res) => {
  const { _id: company_id } = req.user;

  const { postedJobs } = await CompanyModel.findById(company_id)
    .populate("postedJobs")
    .then((data) => data)
    .catch((err) => res.json({ message: err.message }));

  res.status(200).send(postedJobs);
};

const getJobApplicants = async (req, res) => {
  const { job_id } = req.params;

  const { applicants } = await JobModel.findById(job_id)
    .populate("applicants")
    .then((data) => data)
    .catch((err) => res.json({ message: err.message }));

  res.status(200).send(applicants);
};

const postJob = async (req, res) => {
  const { title, description, workspace } = req.body;
  if (!title || !description || !workspace) res.status(400).send({ message: "Invalid Data" });

  const company = req.user;
  company.password = "empty";
  company.followers = [];
  company.postedJobs = [];

  const new_job = new JobModel();
  new_job.title = title;
  new_job.description = description;
  new_job.workspace = workspace;
  new_job.company = company; //to make sure we don't add unneeded data like postedJobs and followers in JobModel embedded Company

  if (new_job.save())
    await CompanyModel.updateOne({ _id: company._id }, { $push: { postedJobs: new_job._id } })
      .then((data) => res.status(200).send({ message: data }))
      .catch((err) => res.status(400).send({ message: err.message }));

  res.status(400).send("Something went wrong");
};

module.exports = {
  getownPostedJobs,
  getJobApplicants,
  postJob,
};
