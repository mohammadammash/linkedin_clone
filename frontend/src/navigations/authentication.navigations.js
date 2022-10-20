const authenticateCurrentUser = (user_type, token) => {
  if (user_type === "user") {
    localStorage.setItem("token", JSON.stringify(token));
    window.location.href = "/feed";
  } else if (user_type === "company") {
    localStorage.setItem("token", JSON.stringify(token));
    window.location.href = "/company";
  }
};

export default authenticateCurrentUser;
