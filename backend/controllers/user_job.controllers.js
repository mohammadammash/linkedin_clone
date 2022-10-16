const getAllJobs = (req, res) => {
  res.send("getAllJobs- user");
};

const searchAvailableJobs = (req, res) => {
  res.send("search Available jobs - user");
};

const applyForJob = (req, res) => {
  res.send("apply for job - user");
};


module.exports = {
  getAllJobs,
  searchAvailableJobs,
  applyForJob,
};
