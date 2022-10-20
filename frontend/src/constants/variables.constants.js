export const user_agreement_link = "https://www.linkedin.com/legal/user-agreement?trk=homepage-basic_intl-segments-join_join-form-user-agreement";
export const privacy_policy_link = "https://www.linkedin.com/legal/privacy-policy?trk=homepage-basic_intl-segments-join_join-form-privacy-policy";
export const cookie_policy_link = "https://www.linkedin.com/legal/cookie-policy?trk=homepage-basic_intl-segments-join_join-form-cookie-policy";

export const baseURL = "http://localhost:3000";
export const userimagesURL = "C:\\Users\\DellPc2\\Desktop\\linkedin_clone\\backend\\assets\\user_images\\";
export const companyimagesURL = "C:\\Users\\DellPc2\\Desktop\\linkedin_clone\\backend\\assets\\company_images\\";

export const generalConsoleLog = (title, data) => {
  console.log("---------------");
  console.log(`----${title}:`);
  console.log(data);
  console.log("---------------");
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
