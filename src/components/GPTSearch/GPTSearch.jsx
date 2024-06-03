import React from "react";
import Image from "../Common/Image";
import Constants from "../../utils/Constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggest from "./GPTSuggest";

const GPTSearch = () => {
  return (
    <div className="">
      <Image src={Constants.imgURL.bg} alt={"bgAltText"} className="fixed" />
      <GPTSearchBar />
      <GPTSuggest />
    </div>
  );
};

export default GPTSearch;
