import axios from "axios";
import { baseURL, generalConsoleLog } from "../constants/variables.constants";
const registerUserURL = `${baseURL}/new_user`;
const registerCompanyURL = `${baseURL}/new_company`;
const LoginURL = `${baseURL}/login`;

export const SignupUserPostAPI = async (values, user_type) => {
  if (user_type === "company") {
    const response = await axios
      .post(registerCompanyURL, values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((data) => data)
      .catch((err) => err);
    // authenticateCurrentUser_navigateFunction("company", response.data.token);
    //
  } else if (user_type === "user") {
    const response = await axios
      .post(registerUserURL, values, {
        headers: { Accept: "application/json" },
      })
      .then((data) => data)
      .catch((err) => err.message);
    // authenticateCurrentUser_navigateFunction("user", response.data.token);
  }
};

export const LoginUserPostAPI =  (values) => {
  return axios
    .post(LoginURL, values, {
      headers: { Accept: "application/json" },
    })
    .then((data) => data.data)
    .catch((err) => console.log(err.response));
};
