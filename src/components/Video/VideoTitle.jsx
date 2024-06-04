import React from "react";
import { FormattedMessage } from "react-intl";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[30%] md:pt-[10%] pl-12 bg-gradient-to-r from-gray-700 text-white">
      <h1 className="text-lg md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-xl w-1/4 my-4">{description}</p>
      <div className="flex">
        <button className="my-4 flex text-lg px-2 py-1 md:py-2 md:px-4 md:mr-2 bg-white text-black rounded-lg hover:opacity-80">
          <PlayIcon className="self-center" />
          <FormattedMessage id={"playBtn"} />
        </button>
        <button className="hidden md:flex text-lg p-2 bg-black opacity-40 rounded-lg">
          <InfoIcon className="self-center" />
          <FormattedMessage id={"moreInfoBtn"} />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
