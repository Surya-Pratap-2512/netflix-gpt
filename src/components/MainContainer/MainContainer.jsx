import React from "react";
import useMovies from "../../hooks/useMovies";
import Constants from "../../utils/Constants";
import { addNowPlayingMovies } from "../../store/moviesSlice";
import { useSelector } from "react-redux";
import VideoTitle from "../Video/VideoTitle";
import VideoBackground from "../Video/VideoBackground";
import withMuteUnmuteBtn from "../Video/withMuteUnmuteBtn";
import { getRandIntg } from "../../utils/functions";

const MainContainer = () => {
  useMovies(Constants.apiURL.nowPlayingMovies, addNowPlayingMovies);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const index = getRandIntg(0, movies.length);
  const { id, original_title, overview } = movies[index];
  const VideoBackgroundWithMuteUnmuteBtn = withMuteUnmuteBtn(VideoBackground);
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackgroundWithMuteUnmuteBtn id={id} />
    </div>
  );
};

export default MainContainer;
