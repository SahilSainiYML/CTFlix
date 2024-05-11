import { auth } from "../Utilities/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Reducers/reducers";
import { useNavigate } from "react-router-dom";

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
  return (
    <div className="w-full h-32 absolute z-10 bg-gradient-to-b from-black">
      <div className="flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo img"
        />
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
