const fs = require("fs");

const storeBase64AsImage = async (profile_base64, email, user_type) => {
  // Create a base64 string from an image => ztso+Mfuej2mPmLQxgD ...
  const path = `\assets\\${user_type}_images\\${email}.jpg`;

  // Convert base64 to buffer => <Buffer ff d8 ff db 00 43 00 ...
  const buffer = Buffer.from(profile_base64, "base64"); // Pipes an image with "new-path.jpg" as the name.
  fs.writeFileSync(path, buffer);
  return path;
};

module.exports = storeBase64AsImage;
