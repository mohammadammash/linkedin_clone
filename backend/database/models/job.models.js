const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "title is required",
  },
  description: {
    type: String,
    required: "description is required",
  },
  workspace: {
    type: String,
    required: "workspace is required",
    enum: ['On-site, Remotely'],
  }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
