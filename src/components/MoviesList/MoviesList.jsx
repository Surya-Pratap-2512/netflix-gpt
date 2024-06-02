import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./style.css";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="mb-4 ml-4">
      <div>
        <h1 className="text-white text-2xl mb-2">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MoviesList;
