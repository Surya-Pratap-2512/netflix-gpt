import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChange } from "../../apis/firebase";
import { useIntl } from "react-intl";
import Constants from "../../utils/Constants";
import Image from "../Common/Image";
import { userSignOut } from "../../apis/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    userSignOut();
  };

  useEffect(() => {
    onAuthStateChange({ dispatch, navigate });
  }, []);

  return (
    <div
      className={`absolute z-10 opacity-50  ${
        user &&
        "w-full bg-gradient-to-r from-black flex justify-between justify-item-center"
      }`}
    >
      <Image
        src={Constants.imgURL.logo}
        alt={"logoAltText"}
        className="w-44 p-2 mx-4 my-2"
      />
      {user && (
        <div className="flex items-center mx-4">
          <Image
            src={user.photoURL}
            alt="userAvatar"
            className="w-7 rounded-full mx-2"
          />
          <button onClick={handleSignOut} className="text-white">
            {intl.formatMessage({ id: "signOut" })}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
