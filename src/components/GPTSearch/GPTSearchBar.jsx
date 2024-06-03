import React, { useRef } from "react";
import { getMovieRecommendation } from "../../apis/huggingface";
import Constants from "../../utils/Constants";
import { formatString } from "../../utils/functions";
import { addRecommendedMovies } from "../../store/gptSlice";
import { useDispatch } from "react-redux";

const GPTSearchBar = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchMovies = async (movie) => {
    const response = await fetch(
      formatString(Constants.apiURL.searchMovie, movie),
      Constants.options
    );
    const json = await response.json();
    return json.results;
  };

  const handleSearchClick = () => {
    getMovieRecommendation(
      formatString(Constants.query.recommendMovies, searchRef.current.value)
    ).then((openaiResponse) => {
      const recommendedMovies =
        openaiResponse.choices[0].message.content.split(",");
      const moviesPromise = Promise.all(
        recommendedMovies.map((movie) => searchMovies(movie))
      );
      moviesPromise.then((results) => {
        dispatch(
          addRecommendedMovies({
            recommendedMovies,
            movies: results,
          })
        );
      });
    });
  };

  return (
    <div className="pt-[15%] flex justify-center relative z-20">
      <div className="w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchRef}
          type="search"
          name="gptSearch"
          className=" mx-4 my-2 rounded p-2 col-span-9"
        />
        <button
          onClick={handleSearchClick}
          className="mx-4 my-2 rounded p-2 col-span-3 bg-red-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GPTSearchBar;
