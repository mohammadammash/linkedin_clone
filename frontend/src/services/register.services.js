import axios from "axios";
import authenticateCurrentUser_navigateFunction from "../navigations/authentication.navigations";
import { baseURL, generalConsoleLog } from "../constants/variables.constants";
const registerUserURL = `${baseURL}/new_user`;
const registerCompanyURL = `${baseURL}/new_company`;

const registerUserAPI = async (values, user_type) => {
  if (user_type === "company") {
    const response = await axios
      .post(registerCompanyURL, values)
      .then((data) => data)
      .catch((err) => err);
    authenticateCurrentUser_navigateFunction("company", response.data.token);
    //
  } else if (user_type === "user") {
    const response = await axios
      .post(registerUserURL, values)
      .then((data) => data)
      .catch((err) => err.message);
    authenticateCurrentUser_navigateFunction("user", response.data.result);
  }
};

export default registerUserAPI;
