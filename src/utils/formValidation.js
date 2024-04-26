const signUpFormValidation = (userName, email, password, confirmPassword) => {
  if (!userName && !email && !password && !confirmPassword)
    return "All Fields Are Required";

  if (userName && !email && !password && !confirmPassword)
    return "Email , Password and Confirm Password Are Required";

  if (!userName && email && !password && !confirmPassword)
    return "Name,Password and Confirm password Are Required";

  if (!userName && !email && password && !confirmPassword)
    return "Name,Email Are Required";

  if (!userName && !email && !password && confirmPassword)
    return "Name,Email and Password are Required";

  if (userName && email && !password && !confirmPassword)
    return "Password and Confirm Password are Required";

  if (!userName && !email && password && confirmPassword)
    return "Name,Email are Required";

  if (userName && !email && !password && confirmPassword)
    return "Email and Confirm Password are Required";

  if (userName === "") return "Name Is Required";

  if (email === "") return "Email Is Required";

  if (password === "") return "Password Is Required";

  if (confirmPassword === "") return "Confirm Password Is Required";
  const isNameValid = /^[A-Za-z]+$/.test(userName);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!isEmailValid && !isNameValid && !isPasswordValid) {
    return "All Fields Are Not In Correct Format";
  }
  if (!isEmailValid && isNameValid && !isPasswordValid) {
    return "Email and Password are Not In Correct Format";
  }
  if (isEmailValid && !isNameValid && !isPasswordValid) {
    return "Name and Password are Not In Correct Format";
  }
  if (!isEmailValid && !isNameValid && !isPasswordValid) {
    return "All Fields Are Not In Correct Format";
  }

  if (!isNameValid) return "Name Not Valid";
  if (!isEmailValid) return "Email Not Valid";
  if (!isPasswordValid) return "Password Not Valid";

  if (!isEmailValid && !isPasswordValid)
    return "Both Email and Password are Not Valid";
  if (confirmPassword !== password)
    return "Password and Confirmed Password are Mismatched";
};

const signInFormValidation = (email, password) => {
  if (!email && !password) return "All Fields are Required";
  if (email && !password) return "Password is required";
  if (!email && password) return "Email is required";

  // if (password === "") return "Password is Required";
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isEmailValid) return "Email Not Valid";
};

export { signUpFormValidation, signInFormValidation };
