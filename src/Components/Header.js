import { auth } from "../Utilities/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_IMG } from "../Utilities/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(removeUser());
      navigate("/");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged", user);
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full h-32 absolute z-10 bg-gradient-to-b from-black">
      <div className="flex justify-between">
        <img className="w-44" src={LOGO_IMG} alt="logo img" />
        {user ? (
          <button className="text-white" onClick={handleSignOut}>
            {user?.displayName} Sign out
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
