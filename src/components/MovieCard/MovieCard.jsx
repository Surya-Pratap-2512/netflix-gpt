import React from "react";
import Image from "../Common/Image";
import Constants from "../../utils/Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-4">
      <Image alt="movie" src={`${Constants.apiURL.posterImg}${posterPath}`} />
    </div>
  );
};

export default MovieCard;
