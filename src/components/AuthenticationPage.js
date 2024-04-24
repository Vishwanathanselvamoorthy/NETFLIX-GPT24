import React, { useEffect, useState } from "react";
import { NETFLIX_BACKGROUND_IMAGE, NETFLIX_LOGO } from "../utils/constants";
import useResponsiveAdjust from "../hooks/useResponsiveAdjust";

const AuthenticationPage = () => {
  const [signInPage, setSignInPage] = useState(true);
  const isForMobile = useResponsiveAdjust();

  const handleLoginPageFunc = () => {
    setSignInPage(!signInPage);
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
              className="w-full mb-4 p-4 bg-[#564d4d]/30 border border-gray-500 rounded-md font-semibold"
              placeholder="Name"
            />
          )}

          <input
            className="w-full mb-4 p-4 bg-[#564d4d]/30   border border-gray-500 rounded-md font-semibold"
            placeholder="E-mail"
          />
          <input
            className="w-full mb-4 p-4 bg-[#564d4d]/30   border border-gray-500 rounded-md font-semibold"
            placeholder="password"
          />
          <div className="w-full bg-[#E50914] p-4 text-center text-white font-semibold rounded-md cursor-pointer">
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
