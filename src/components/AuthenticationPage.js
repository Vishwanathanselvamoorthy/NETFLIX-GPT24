import React, { useRef, useState } from "react";
import { NETFLIX_BACKGROUND_IMAGE, NETFLIX_LOGO } from "../utils/constants";
import useResponsiveAdjust from "../hooks/useResponsiveAdjust";
import formValidation, {
  signInFormValidation,
  signUpFormValidation,
} from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const AuthenticationPage = () => {
  const [signInPage, setSignInPage] = useState(true);
  const isForMobile = useResponsiveAdjust();
  const [validationMessage, setValidationMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const navigate = useNavigate();

  const navigationFunc = () => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        navigate("/home");
        resolve(); // Resolve the promise after navigating
      }, 1000);
    });
  };

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
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const authFunctions = () => {
    if (!signInPage) {
      const nameValue = name.current.value;
      const emailValue = email.current.value;
      const passwordValue = password.current.value;
      const confirmPasswordValue = confirmPassword.current.value;

      let submission = false;

      const validationMessage = signUpFormValidation(
        nameValue,
        emailValue,
        passwordValue,
        confirmPasswordValue
      );
      setValidationMessage(validationMessage);
      if (!validationMessage) {
        submission = true;
      }
      if (submission) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            setSuccessMessage("Sign Up Successfully");
            setUserEmail(emailValue);
            setUserPassword(passwordValue);
          })
          .catch((error) => {
            setValidationMessage("Sign Up Failed.Try Again Later");
          });
      }
    } else {
      const emailValue = email.current.value;
      const passwordValue = password.current.value;

      let submission = false;

      const validationMessage = signInFormValidation(emailValue, passwordValue);
      setValidationMessage(validationMessage);
      if (!validationMessage) {
        submission = true;
      }

      if (submission) {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            setSuccessMessage("Sign In Successful");
          })
          .catch((error) => {
            setValidationMessage("User Not Exist");
          });
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

          {successMessage ? (
            <h1 className="text-green-600 font-bold mb-2">{successMessage}</h1>
          ) : (
            <h1 className="text-red-600 font-bold mb-2">{validationMessage}</h1>
          )}

          {/* <h1 className="text-red-600">{validationMessage}</h1> */}
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
