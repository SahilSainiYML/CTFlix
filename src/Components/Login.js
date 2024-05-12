import { useRef, useState } from "react";
import Header from "./Header";
import { validateCreds, validateName } from "../Utilities/validation";
import { auth } from "../Utilities/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../Reducers/userSlice";
import {
  ALREADY_MEMBER,
  MAIN_BG_IMG,
  NEW_MEMBER,
} from "../Utilities/constants";

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef();
  const passwordRef = useRef(null);

  const toggalSignIn = () => {
    setIsSigningIn(!isSigningIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = validateCreds(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (errorMessage !== null) {
      setErrorMessage(errorMessage);
      return;
    }
    if (!isSigningIn) {
      errorMessage = validateName(nameRef.current.value);
    }
    if (errorMessage !== null) {
      setErrorMessage(errorMessage);
      return;
    }

    if (isSigningIn) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: nameRef.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          });
        })
        .catch((error) => {
          // An error happened.
          setErrorMessage(error.message);
          //...
        });
    }
  };
  const inputClass = "p-4 my-4 w-full rounded-sm  bg-gray-700";
  const buttonClass = "p-4 my-6 bg-red-700 w-full rounded-sm";
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img className="w-full h-full" src={MAIN_BG_IMG} alt="main img" />
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
          {isSigningIn ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="p-2 cursor-pointer" onClick={toggalSignIn}>
          {isSigningIn ? NEW_MEMBER : ALREADY_MEMBER}
        </h2>
      </form>
    </div>
  );
};

export default Login;
