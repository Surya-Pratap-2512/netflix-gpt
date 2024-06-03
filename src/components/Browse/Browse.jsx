import React from "react";
import Header from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import GPTSearch from "../GPTSearch/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt?.gptSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
