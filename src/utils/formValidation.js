import React from "react";

const formValidation = (email, password, userName) => {
  if (email === "") return "Email Required";
  if (password === "") return "Password Required";
  if (userName === "") return "Name Required";
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );
  const isNameValid = /^[A-Za-z]+$/.test(userName);

  if (!isEmailValid) return "Email Not Valid";
  if (!isPasswordValid) return "Password Not Valid";
  if (!isNameValid) return "Name Not Valid";
  if (!isEmailValid && !isPasswordValid)
    return "Both Email and Password are Not Valid";
};

export default formValidation;
