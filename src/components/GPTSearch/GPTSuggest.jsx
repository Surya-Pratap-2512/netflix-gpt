import React from "react";
import MoviesList from "../MoviesList/MoviesList";
import { useSelector } from "react-redux";

const GPTSuggest = () => {
  const { recommendedMovies, recommendedMoviesNames } = useSelector(
    (store) => store.gpt
  );
  return (
    <div className="bg-black absolute p-4 my-4 opacity-90">
      {recommendedMoviesNames &&
        recommendedMoviesNames.map((movie, index) => (
          <MoviesList
            key={movie}
            title={movie}
            movies={recommendedMovies[index]}
          />
        ))}
    </div>
  );
};

export default GPTSuggest;
