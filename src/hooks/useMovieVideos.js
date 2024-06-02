import { formatString } from "../utils/functions";
import Constants from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieVideo } from "../store/moviesSlice";

const useMovieVideos = (movieId, videoType) => {
  const dispatch = useDispatch();
  const fetchMovieVideo = async () => {
    const response = await fetch(
      formatString(Constants.apiURL.movieVideos, movieId),
      Constants.options
    );
    const json = await response.json();
    const filteredResult = json.results.filter(
      (movie) => movie.type === videoType
    );
    dispatch(
      addMovieVideo(filteredResult ? filteredResult[0] : json.results[0])
    );
  };
  useEffect(() => fetchMovieVideo, []);
};

export default useMovieVideos;
