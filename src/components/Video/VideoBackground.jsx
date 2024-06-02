import React from "react";
import useMovieVideos from "../../hooks/useMovieVideos";
import Constants from "../../utils/Constants";
import { useSelector } from "react-redux";
import { formatString } from "../../utils/functions";

const VideoBackground = ({ id, iframeRef }) => {
  useMovieVideos(id, Constants.videoTypes.clip);
  const movieVideo = useSelector((store) => store.movies?.movieVideo);
  return (
    <div>
      <iframe
        ref={iframeRef}
        id="youtube-video"
        className="w-screen aspect-video"
        src={formatString(Constants.apiURL.youtubeVideo, movieVideo?.key)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
