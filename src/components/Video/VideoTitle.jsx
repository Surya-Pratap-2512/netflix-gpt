import React from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[10%] pl-12 bg-gradient-to-r from-gray-700 text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl w-1/4 my-4">{description}</p>
      <div className="flex">
        <button className="flex text-lg py-2 px-4 mr-2 bg-white text-black rounded-lg hover:opacity-80">
          <PlayIcon className="self-center" />
          <FormattedMessage id={"playBtn"} />
        </button>
        <button className="text-lg p-2 bg-black opacity-40 rounded-lg flex">
          <InfoIcon className="self-center" />
          <FormattedMessage id={"moreInfoBtn"} />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
