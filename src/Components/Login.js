import { useRef, useState } from "react";
import Header from "./Header";
import { validateCreds } from "../Utilities/validation";

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef();
  const passwordRef = useRef(null);

  const toggalSignIn = () => {
    setIsSigningIn(!isSigningIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(
      validateCreds(emailRef.current.value, passwordRef.current.value)
    );
  };
  const inputClass = "p-4 my-4 w-full rounded-sm  bg-gray-700";
  const buttonClass = "p-4 my-6 bg-red-700 w-full rounded-sm";
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="main img"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-36 bg-black bg-opacity-70 mx-auto right-0 left-0 text-white rounded-sm">
        <h1 className="py-4 my-4 font-bold text-3xl">
          {isSigningIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigningIn && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className={inputClass}
          />
        )}

        <input
          ref={emailRef}
          type="text"
          placeholder="Email or Mobile"
          className={inputClass}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className={inputClass}
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button className={buttonClass} onClick={handleSubmit}>
          Sign in
        </button>
        <h2 className="p-2 cursor-pointer" onClick={toggalSignIn}>
          {isSigningIn ? "New To CTFlix? Sing Up" : "Aready a member? Sign In"}
        </h2>
      </form>
    </div>
  );
};

export default Login;
