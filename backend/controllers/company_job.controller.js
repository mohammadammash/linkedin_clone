
const getownPostedJobs = () => {
  res.send("getownPostedJobs - companyjob");
};

const getJobApplicants = () => {
  res.send("get job Applicants - companyjob");
};

const postJob = () => {
  res.send("post job - companyjob");
};

module.exports = {
  getownPostedJobs,
  getJobApplicants,
  postJob,
};
