const mongoose = require("mongoose");
const {companySchema} = require("./company.models");

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
    enum: ["On-site, Remotely"],
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  company: companySchema,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
