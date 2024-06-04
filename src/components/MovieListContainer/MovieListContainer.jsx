import React from "react";
import {
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
} from "../../store/moviesSlice";
import Constants from "../../utils/Constants";
import useMovies from "../../hooks/useMovies";
import MoviesList from "../MoviesList/MoviesList";
import { useSelector } from "react-redux";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../selector/moviesSelector";

const MovieListContainer = () => {
  useMovies(Constants.apiURL.popularMovies, addPopularMovies, getPopularMovies);
  useMovies(
    Constants.apiURL.topRatedMovies,
    addTopRatedMovies,
    getTopRatedMovies
  );
  useMovies(
    Constants.apiURL.upcomingMovies,
    addUpcomingMovies,
    getUpcomingMovies
  );
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="md:-mt-36 relative z-20">
        <MoviesList
          title={Constants.moviesType.nowPlaying}
          movies={movies?.nowPlayingMovies || []}
        />
        <MoviesList
          title={Constants.moviesType.popular}
          movies={movies?.popularMovies || []}
        />
        <MoviesList
          title={Constants.moviesType.topRated}
          movies={movies?.topRatedMovies || []}
        />
        <MoviesList
          title={Constants.moviesType.upcoming}
          movies={movies?.upcomingMovies || []}
        />
      </div>
    </div>
  );
};

export default MovieListContainer;
