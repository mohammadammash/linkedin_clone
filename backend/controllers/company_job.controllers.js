
const getownPostedJobs = (req,res) => {
  res.send("getownPostedJobs - companyjob");
};

const getJobApplicants = (req, res) => {
  res.send("get job Applicants - companyjob");
};

const postJob = (req, res) => {
  res.send("post job - companyjob");
};

module.exports = {
  getownPostedJobs,
  getJobApplicants,
  postJob,
};
