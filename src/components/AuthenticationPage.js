import React, { useRef, useState } from "react";
import { NETFLIX_BACKGROUND_IMAGE, NETFLIX_LOGO } from "../utils/constants";
import useResponsiveAdjust from "../hooks/useResponsiveAdjust";
import formValidation from "../utils/formValidation";

const AuthenticationPage = () => {
  const [signInPage, setSignInPage] = useState(true);
  const isForMobile = useResponsiveAdjust();
  const [validationMessage, setValidationMessage] = useState();

  const handleLoginPageFunc = () => {
    setSignInPage(!signInPage);
    setValidationMessage("");
    // name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  const handleKeyPress = () => {
    setValidationMessage("");
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const authFunctions = () => {
    if (signInPage) {
      if (email.current.value === "" && password.current.value === "") {
        setValidationMessage("Email and Password are Required");
      } else {
        const validationMessage = formValidation(
          email.current.value,
          password.current.value
        );
        setValidationMessage(validationMessage);
      }
    } else {
      if (
        email.current.value === "" &&
        password.current.value === "" &&
        name.current.value === ""
      ) {
        setValidationMessage("Name , Email and Password are Required");
      } else {
        const validationMessage = formValidation(
          email.current.value,
          password.current.value,
          name.current.value
        );
        setValidationMessage(validationMessage);
      }
      if (password.current.value !== confirmPassword.current.value) {
        setValidationMessage("Password and Confirmed Password are Mismatched");
      }
    }
  };

  return (
    <div className={isForMobile ? "bg-black h-screen" : ""}>
      {!isForMobile && (
        <img
          src={NETFLIX_BACKGROUND_IMAGE}
          className="w-full h-screen "
          alt="netflix-bg-img"
        />
      )}

      <div>
        <img
          className="absolute w-40 top-0"
          src={NETFLIX_LOGO}
          alt="netflix-logo-img"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <form className="bg-black/90 p-5 w-[400px]">
          <h1 className="text-white text-4xl my-5 font-bold">
            {signInPage ? "Sign In" : "Sign Up"}
          </h1>
          {!signInPage && (
            <input
              type="text"
              ref={name}
              onKeyUp={handleKeyPress}
              className="w-full mb-4 p-4 bg-[#564d4d]/30 border border-gray-500 rounded-md font-semibold text-white"
              placeholder="Name"
            />
          )}

          <input
            type="email"
            ref={email}
            onKeyUp={handleKeyPress}
            className="w-full mb-4 p-4 bg-[#564d4d]/30   border border-gray-500 rounded-md font-semibold text-white"
            placeholder="E-mail"
          />
          <input
            type="password"
            ref={password}
            onKeyUp={handleKeyPress}
            className="w-full mb-4 p-4 bg-[#564d4d]/30   border border-gray-500 rounded-md font-semibold text-white"
            placeholder="password"
          />
          {!signInPage && (
            <input
              type="password"
              ref={confirmPassword}
              onKeyUp={handleKeyPress}
              className="w-full mb-4 p-4 bg-[#564d4d]/30   border border-gray-500 rounded-md font-semibold text-white"
              placeholder="confirm password"
            />
          )}

          <h1 className="text-red-600">{validationMessage}</h1>
          <div
            className="w-full bg-[#E50914] p-4 text-center text-white font-semibold rounded-md cursor-pointer"
            onClick={authFunctions}
          >
            {signInPage ? "Sign In" : "Sign Up"}
          </div>
          {signInPage ? (
            <p className="text-gray-300 my-5">
              New To Netflix?
              <span
                className="text-white font-bold cursor-pointer"
                onClick={handleLoginPageFunc}
              >
                {" "}
                Sign up now.
              </span>{" "}
            </p>
          ) : (
            <p className="text-gray-300 my-5">
              Already Registered ?
              <span
                className="text-white font-bold cursor-pointer"
                onClick={handleLoginPageFunc}
              >
                {" "}
                Sign in now.
              </span>{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
