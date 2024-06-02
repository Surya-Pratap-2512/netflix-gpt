import React, { useEffect } from "react";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Image from "../Common/Image";
import Constants from "../../utils/Constants";

const Body = () => {
  return (
    <div>
      {/* <Header /> */}
      <Image src={Constants.imgURL.bg} alt={"bgAltText"} className="absolute" />
      <Login />
    </div>
  );
};

export default Body;
