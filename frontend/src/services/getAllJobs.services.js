import { getAuthToken, baseURL } from "../constants/variables.constants";
import axios from "axios";

const getAllJobsURL = `${baseURL}/user`;
const token = getAuthToken();

export const getAllJobs = async () => {
  return await axios
    .get(getAllJobsURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((data) => data.data)
    .catch((err) => err);
};
