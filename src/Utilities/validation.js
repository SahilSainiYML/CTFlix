export const validateEmail = (email) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

export const validatePassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};

export const validateCreds = (email, password) => {
  if (!(validateEmail(email) && validatePassword(password))) {
    return "Either the email or the password is incorrect.";
  }
};

export const validateName = (name) => {
  if (!/^[a-zA-Z]+$/.test(name)) {
    console.log("Please", name);
    return "Please enter a valid name";
  }
  console.log(name);
  return null;
};
