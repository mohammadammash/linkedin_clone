import { getAuthToken, baseURL } from "../constants/variables.constants";
import axios from "axios";

const getAllJobsURL = `${baseURL}/user`;

export const getAllJobs = () => {
  const token = JSON.parse(getAuthToken());
  return axios
    .get(getAllJobsURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((data) => data.data)
    .catch((err) => err);
};
